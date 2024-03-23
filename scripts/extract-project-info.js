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
  const headerElement = $('ng-cb-ui-header');

  // Check if the element exists
  if (headerElement.length === 0) {
    return {
      appTitle: null,
      appName: null,
    }; // App title not found
  }

  // Extract the value of the `appTitle` attribute
  const appTitle = headerElement.attr('appTitle');
  const appName = headerElement.attr('appName');

  // Return the extracted title
  return {
    appTitle,
    appName,
  };
}

async function findPackageNames(dir) {
  let packageNames = [];

  async function traverseDirectories(currentPath) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    for (let entry of entries) {
      const entryPath = path.join(currentPath, entry.name);
      if (entry.isDirectory() && !entryPath.includes('node_modules')) {
        await traverseDirectories(entryPath);
      } else if (entry.name === 'app.component.html') {
        const contents = await fs.readFile(entryPath, 'utf8');
        const { appTitle, appName } = extractAppTitle(contents);

        packageNames.push({
          appTitle,
          appName,
        });
      }
    }
  }

  await traverseDirectories(dir);
  return packageNames;
}

// Replace './' with the path to the root directory you want to search from
findPackageNames('./final/apps')
  .then((packageNames) => {
    console.log('Found packages:', packageNames);
  })
  .catch((err) => {
    console.error('An error occurred:', err);
  });
