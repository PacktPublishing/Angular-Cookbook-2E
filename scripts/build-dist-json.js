const fs = require('fs').promises;
const path = require('path');
const cheerio = require('cheerio');

function extractAppTitle(html) {
  // Use cheerio to parse the HTML string
  const $ = cheerio.load(html, {
    xml: true,
    lowerCaseAttributeNames: false,
  });

  // Find the `ng-cb-ui-header` element
  const titleElement = $('title');

  // Check if the element exists
  if (titleElement.length === 0) {
    return {
      appTitle: null,
      appName: null,
    }; // App title not found
  }

  // Extract the value of the `appTitle` attribute
  const appTitle = titleElement.text();
  const appName = titleElement.attr('appName');

  // Return the extracted title
  return {
    appTitle,
    appName,
  };
}

async function findPackageNames(rootDir) {
  let packageNames = [];

  async function traverseDirectories(currentPath) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    for (let entry of entries) {
      const entryPath = path.join(currentPath, entry.name);
      if (entry.isDirectory() && !entryPath.includes('node_modules')) {
        await traverseDirectories(entryPath);
      } else if (entry.name === 'index.html') {
        const contents = await fs.readFile(entryPath, 'utf8');
        const appPath = path.relative(rootDir, entryPath);
        const { appTitle } = extractAppTitle(contents);

        packageNames.push({
          appTitle,
          appPath: normalizePath(appPath),
        });
      }
    }
  }

  await traverseDirectories(rootDir);
  return packageNames;
}

// Replace './' with the path to the root directory you want to search from
findPackageNames('./dist/apps')
  .then((packageNames) => {
    console.log('Found packages:', packageNames);
    fs.writeFile(
      './dist/apps/apps.json',
      JSON.stringify(packageNames, null, 2)
    );
  })
  .catch((err) => {
    console.error('An error occurred:', err);
  });

function normalizePath(p) {
  return p.replace(/\\/g, '/');
}
