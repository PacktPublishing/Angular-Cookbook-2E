import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import updateAppComponentFiles from './replace-app-toolbar';
jest.useFakeTimers();
describe('replace-app-toolbar migration', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });

    // Simulate adding an application with app.component.html and app.component.ts
    const appRoot = 'apps/chapter01/cc-inputs-outputs/src/app';
    tree.write(
      `${appRoot}/app.component.html`,
      `<!-- Toolbar -->
      <div class="toolbar" role="banner">
        <img
          width="40"
          class="toolbar__logo"
          routerLink="/"
          alt="Angular Logo"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
        />
        <span routerLink="/" class="toolbar__title"
          >Detaching the change detector from components</span
        >
        <div class="spacer"></div>
        <a
          href="https://www.codewithahsan.dev/ng-book-reader?chapter=ng-cd-ref"
          target="_blank"
          rel="noopener noreferer"
        >
          <span class="material-symbols-outlined"> info </span>
        </a>
      </div>

      <main class="content" role="main">
        <router-outlet></router-outlet>
      </main>

      `
    );
    tree.write(
      `${appRoot}/app.component.ts`,
      `import { CommonModule } from '@angular/common';
      import { Component } from '@angular/core';
      import { RouterModule } from '@angular/router';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
        standalone: true,
        imports: [CommonModule, RouterModule]
      })
      export class AppComponent { }
      `
    );

    // Add nx.json configuration for the test app
    tree.write(
      'nx.json',
      JSON.stringify(
        {
          $schema: './node_modules/nx/schemas/nx-schema.json',
          targetDefaults: {
            build: {
              dependsOn: ['^build'],
              inputs: ['production', '^production'],
              cache: true,
            },
            lint: {
              inputs: ['default', '{workspaceRoot}/.eslintrc.json'],
              cache: true,
            },
            e2e: {
              inputs: ['default', '^production'],
              cache: true,
            },
            '@nx/jest:jest': {
              inputs: [
                'default',
                '^production',
                '{workspaceRoot}/jest.preset.js',
              ],
              cache: true,
              options: {
                passWithNoTests: true,
              },
              configurations: {
                ci: {
                  ci: true,
                  codeCoverage: true,
                },
              },
            },
          },
          namedInputs: {
            default: ['{projectRoot}/**/*', 'sharedGlobals'],
            production: [
              'default',
              '!{projectRoot}/**/?(*.)+(spec|test).[jt]s?(x)?(.snap)',
              '!{projectRoot}/tsconfig.spec.json',
              '!{projectRoot}/jest.config.[jt]s',
              '!{projectRoot}/.eslintrc.json',
              '!{projectRoot}/src/test-setup.[jt]s',
            ],
            sharedGlobals: [],
          },
          generators: {
            '@nx/angular:application': {
              style: 'scss',
              linter: 'eslint',
              unitTestRunner: 'jest',
              e2eTestRunner: 'none',
            },
            '@nx/angular:library': {
              linter: 'eslint',
              unitTestRunner: 'jest',
            },
            '@nx/angular:component': {
              style: 'scss',
            },
          },
        },
        null,
        2
      )
    );

    // Add workspace.json configuration for the test app
    const workspaceJson = {
      name: 'cc-inputs-outputs',
      $schema: '../../../node_modules/nx/schemas/project-schema.json',
      projectType: 'application',
      sourceRoot: 'apps/chapter01/cc-inputs-outputs/src',
      prefix: 'app',
      targets: {
        build: {
          executor: '@angular-devkit/build-angular:browser',
          outputs: ['{options.outputPath}'],
          options: {
            outputPath: 'dist/apps/chapter01/cc-inputs-outputs',
            index: 'apps/chapter01/cc-inputs-outputs/src/index.html',
            main: 'apps/chapter01/cc-inputs-outputs/src/main.ts',
            polyfills: ['zone.js'],
            tsConfig: 'apps/chapter01/cc-inputs-outputs/tsconfig.app.json',
            inlineStyleLanguage: 'scss',
            assets: [
              'apps/chapter01/cc-inputs-outputs/src/favicon.ico',
              'apps/chapter01/cc-inputs-outputs/src/assets',
            ],
            styles: ['apps/chapter01/cc-inputs-outputs/src/styles.scss'],
            scripts: [],
          },
          configurations: {
            production: {
              budgets: [
                {
                  type: 'initial',
                  maximumWarning: '500kb',
                  maximumError: '1mb',
                },
                {
                  type: 'anyComponentStyle',
                  maximumWarning: '2kb',
                  maximumError: '4kb',
                },
              ],
              outputHashing: 'all',
            },
            development: {
              buildOptimizer: false,
              optimization: false,
              vendorChunk: true,
              extractLicenses: false,
              sourceMap: true,
              namedChunks: true,
            },
          },
          defaultConfiguration: 'production',
        },
        serve: {
          executor: '@angular-devkit/build-angular:dev-server',
          configurations: {
            production: {
              buildTarget: 'cc-inputs-outputs:build:production',
            },
            development: {
              buildTarget: 'cc-inputs-outputs:build:development',
            },
          },
          defaultConfiguration: 'development',
        },
        'extract-i18n': {
          executor: '@angular-devkit/build-angular:extract-i18n',
          options: {
            buildTarget: 'cc-inputs-outputs:build',
          },
        },
        lint: {
          executor: '@nx/eslint:lint',
          outputs: ['{options.outputFile}'],
          options: {
            lintFilePatterns: [
              'apps/chapter01/cc-inputs-outputs/**/*.ts',
              'apps/chapter01/cc-inputs-outputs/**/*.html',
            ],
          },
        },
        test: {
          executor: '@nx/jest:jest',
          outputs: ['{workspaceRoot}/coverage/{projectRoot}'],
          options: {
            jestConfig: 'apps/chapter01/cc-inputs-outputs/jest.config.ts',
          },
        },
        rename: {
          executor: '@codewithahsan/ng-cookbook-recipe:rename',
          options: {
            chapter: 'chapter01',
            app: 'cc-inputs-outputs',
          },
        },
      },
      tags: [],
    };
    tree.write(
      'apps/chapter01/cc-inputs-outputs/project.json',
      JSON.stringify(workspaceJson, null, 2)
    );
  });

  it('should run successfully', async () => {
    await updateAppComponentFiles(tree);
    // expect changes made to app.component.html
    const updatedHtml = tree.read(
      'apps/chapter01/cc-inputs-outputs/src/app/app.component.html',
      'utf-8'
    );
    expect(updatedHtml).toContain('<ng-cb-ui-header');
    expect(updatedHtml).toContain(
      `appTitle="Detaching the change detector from components"`
    );
    expect(updatedHtml).toContain('appName="ng-cd-ref"');

    // expect changes made to app.component.ts
    const updatedTs = tree.read(
      'apps/chapter01/cc-inputs-outputs/src/app/app.component.ts',
      'utf-8'
    );
    expect(updatedTs).toContain(
      "import { HeaderComponent } from '@codewithahsan/ng-cb-ui';"
    );
  });
});
