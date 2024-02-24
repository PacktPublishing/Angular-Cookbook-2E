import { Tree } from '@nx/devkit';
import { formatFiles, getProjects } from '@nrwl/devkit';
import * as cheerio from 'cheerio';

export default async function updateAppComponentFiles(tree: Tree) {
  const projects = getProjects(tree);

  projects.forEach((project, projectName) => {
    if (project.projectType !== 'application') {
      return; // Skip non-application projects
    }

    const appComponentHtmlPath = `${project.sourceRoot}/app/app.component.html`;
    const appComponentTsPath = `${project.sourceRoot}/app/app.component.ts`;

    // Update HTML content
    if (tree.exists(appComponentHtmlPath)) {
      const content = tree.read(appComponentHtmlPath, 'utf-8');
      const $ = cheerio.load(content);
      const toolbar = $('.toolbar');
      if (toolbar.length) {
        const title = toolbar.find('span').first().text();
        const linkHref = toolbar.find('a').attr('href');
        const appName = linkHref.split('?chapter=')[1];

        // Construct the new header component with extracted information
        const newToolbar = $('<ng-cb-ui-header></ng-cb-ui-header>')
          .attr('appTitle', title)
          .attr('appName', appName);

        // Move additional buttons or elements inside the toolbar into the new header
        toolbar
          .children()
          .not('img, span, a')
          .each(function () {
            newToolbar.append($(this));
          });

        // Replace the old toolbar div with the new header component
        toolbar.replaceWith(newToolbar);

        // Write the updated HTML back to the file
        tree.write(appComponentHtmlPath, $('body').html());
      }
    }

    // Update TS content
    if (tree.exists(appComponentTsPath)) {
      let tsContent = tree.read(appComponentTsPath, 'utf-8');

      // Check if HeaderComponent is already imported
      if (!tsContent.includes('HeaderComponent')) {
        // Add the import statement at the top
        tsContent = `import { HeaderComponent } from '@codewithahsan/ng-cb-ui';\n${tsContent}`;
      }

      // Update the @Component decorator to include HeaderComponent in the imports array
      tsContent = tsContent.replace(
        /(imports:\s*\[[^\]]*)(\])/,
        `$1, HeaderComponent$2`
      );

      tree.write(appComponentTsPath, tsContent);
    }
  });

  // Format updated files
  await formatFiles(tree);
}
