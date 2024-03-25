import { Tree } from '@nx/devkit';
import { formatFiles, getProjects } from '@nrwl/devkit';
import { load } from 'cheerio';

export default async function updateAppComponentFiles(tree: Tree) {
  const projects = getProjects(tree);

  projects.forEach((project, projectName) => {
    if (project.projectType !== 'application') {
      return; // Skip non-application projects
    }

    const appComponentHtmlPath = `${project.sourceRoot}/app/app.component.html`;
    const appComponentTsPath = `${project.sourceRoot}/app/app.component.ts`;
    const appModuleTsPath = `${project.sourceRoot}/app/app.module.ts`;

    // Update HTML content
    if (tree.exists(appComponentHtmlPath)) {
      const content = tree.read(appComponentHtmlPath, 'utf-8');
      const $ = load(content, {
        xml: true,
        lowerCaseAttributeNames: false,
      });
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

        const output = $.html({
          xmlMode: false,
          decodeEntities: false,
        });

        // Write the updated HTML back to the file
        tree.write(appComponentHtmlPath, output);
      }
    }

    let tsContent = '';
    let isModulesBasedApp = false;

    // Update TS content
    if (tree.exists(appComponentTsPath)) {
      tsContent = tree.read(appComponentTsPath, 'utf-8');
      if (
        !tsContent.includes('standalone: true') &&
        tree.exists(appModuleTsPath)
      ) {
        // an app that uses app.module...
        tsContent = tree.read(appModuleTsPath, 'utf-8');
        isModulesBasedApp = true;
      }
    }

    if (!tsContent) {
      // there's no content in either the component or module file
      return;
    }

    if (
      !tsContent.includes('HeaderComponent') &&
      !tsContent.includes('@codewithahsan/ng-cb-ui')
    ) {
      tsContent = `import { HeaderComponent } from '@codewithahsan/ng-cb-ui';\n${tsContent}`;
    } else if (tsContent.includes('HeaderComponent')) {
      // already added
      return;
    }

    tsContent = tsContent.replace(
      /(imports:\s*\[)([^\]]*\])/,
      `$1HeaderComponent, $2`
    );

    tree.write(
      isModulesBasedApp ? appModuleTsPath : appComponentTsPath,
      tsContent
    );
  });

  await formatFiles(tree);
}
