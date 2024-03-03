import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import updateAppComponentFiles from './replace-app-toolbar';
jest.useFakeTimers();
describe('replace-app-toolbar migration for standalone apps', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });

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
        <ng-container *ngIf="$listItemsData | async as listItemsData; else loader">
          <app-users-list [listItems]="listItemsData"></app-users-list>
        </ng-container>
      </main>
      <ng-template #loader>
        <app-loader></app-loader>
      </ng-template>
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

    tree.write('nx.json', JSON.stringify(nxJSON, null, 2));

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

    const updatedHtml = tree.read(
      'apps/chapter01/cc-inputs-outputs/src/app/app.component.html',
      'utf-8'
    );
    expect(updatedHtml).toContain('<ng-cb-ui-header');
    expect(updatedHtml).toContain(
      `appTitle="Detaching the change detector from components"`
    );
    expect(updatedHtml).toContain('appName="ng-cd-ref"');

    const leftOverHTML = `
      <main class="content" role="main">
        <ng-container *ngIf="$listItemsData | async as listItemsData; else loader">
          <app-users-list [listItems]="listItemsData"></app-users-list>
        </ng-container>
      </main>
      <ng-template #loader>
        <app-loader></app-loader>
      </ng-template>
    `;

    expect(updatedHtml.replace(/\s/g, '')).toContain(
      leftOverHTML.replace(/\s/g, '')
    );

    const updatedTs = tree.read(
      'apps/chapter01/cc-inputs-outputs/src/app/app.component.ts',
      'utf-8'
    );
    expect(updatedTs).toContain(
      "import { HeaderComponent } from '@codewithahsan/ng-cb-ui';"
    );
  });
});

describe('replace-app-toolbar migration for module based apps', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });

    const appRoot = 'apps/chapter01/cc-ng-on-changes/src/app';
    tree.write(
      `${appRoot}/app.component.html`,
      `<!-- Toolbar -->
      <div class="toolbar" role="banner">
        <img
          width="40"
          alt="Angular Logo"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
        />
        <span>Component Communication using ngOnChanges</span>
        <div class="spacer"></div>
        <a
          href="https://www.codewithahsan.dev/ng-book-reader?chapter=cc-ng-on-changes"
          target="_blank"
          rel="noopener noreferer"
        >
          <span class="material-symbols-outlined"> info </span>
        </a>
      </div>

      <main class="content" role="main">
        <ng-container *ngIf="$listItemsData | async as listItemsData; else loader">
          <app-users-list [listItems]="listItemsData"></app-users-list>
        </ng-container>
      </main>
      <ng-template #loader>
        <app-loader></app-loader>
      </ng-template>

      `
    );

    tree.write(
      `${appRoot}/app.component.ts`,
      `import { Component } from '@angular/core';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
      })
      export class AppComponent {}
      `
    );

    tree.write(
      `${appRoot}/app.module.ts`,
      `import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';

      import { AppComponent } from './app.component';
      import { VersionControlComponent } from './components/version-control/version-control.component';
      import { VcLogsComponent } from './components/vc-logs/vc-logs.component';
      import { ReactiveFormsModule } from '@angular/forms';
      import { RouterModule } from '@angular/router';
      import { appRoutes } from './app.routes';

      @NgModule({
        declarations: [AppComponent, VersionControlComponent, VcLogsComponent],
        imports: [
          BrowserModule,
          RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
          ReactiveFormsModule,
        ],
        providers: [],
        bootstrap: [AppComponent],
      })
      export class AppModule {}

      `
    );

    tree.write('nx.json', JSON.stringify(nxJSON, null, 2));

    const workspaceJson = {
      name: 'cc-ng-on-changes',
      $schema: '../../../node_modules/nx/schemas/project-schema.json',
      projectType: 'application',
      sourceRoot: 'apps/chapter01/cc-ng-on-changes/src',
      prefix: 'app',
      targets: {
        build: {
          executor: '@angular-devkit/build-angular:browser',
          outputs: ['{options.outputPath}'],
          options: {
            outputPath: 'dist/apps/chapter01/cc-ng-on-changes',
            index: 'apps/chapter01/cc-ng-on-changes/src/index.html',
            main: 'apps/chapter01/cc-ng-on-changes/src/main.ts',
            polyfills: ['zone.js'],
            tsConfig: 'apps/chapter01/cc-ng-on-changes/tsconfig.app.json',
            inlineStyleLanguage: 'scss',
            assets: [
              'apps/chapter01/cc-ng-on-changes/src/favicon.ico',
              'apps/chapter01/cc-ng-on-changes/src/assets',
            ],
            styles: ['apps/chapter01/cc-ng-on-changes/src/styles.scss'],
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
              buildTarget: 'cc-ng-on-changes:build:production',
            },
            development: {
              buildTarget: 'cc-ng-on-changes:build:development',
            },
          },
          defaultConfiguration: 'development',
        },
        'extract-i18n': {
          executor: '@angular-devkit/build-angular:extract-i18n',
          options: {
            buildTarget: 'cc-ng-on-changes:build',
          },
        },
        lint: {
          executor: '@nx/eslint:lint',
          outputs: ['{options.outputFile}'],
          options: {
            lintFilePatterns: [
              'apps/chapter01/cc-ng-on-changes/**/*.ts',
              'apps/chapter01/cc-ng-on-changes/**/*.html',
            ],
          },
        },
        test: {
          executor: '@nx/jest:jest',
          outputs: ['{workspaceRoot}/coverage/{projectRoot}'],
          options: {
            jestConfig: 'apps/chapter01/cc-ng-on-changes/jest.config.ts',
          },
        },
        rename: {
          executor: '@codewithahsan/ng-cookbook-recipe:rename',
          options: {
            chapter: 'chapter01',
            app: 'cc-ng-on-changes',
          },
        },
      },
      tags: [],
    };
    tree.write(
      'apps/chapter01/cc-ng-on-changes/project.json',
      JSON.stringify(workspaceJson, null, 2)
    );
  });

  it('should run successfully', async () => {
    await updateAppComponentFiles(tree);

    const updatedHtml = tree.read(
      'apps/chapter01/cc-ng-on-changes/src/app/app.component.html',
      'utf-8'
    );
    expect(updatedHtml).toContain('<ng-cb-ui-header');
    expect(updatedHtml).toContain(
      `appTitle="Component Communication using ngOnChanges"`
    );
    expect(updatedHtml).toContain('appName="cc-ng-on-changes"');

    const leftOverHTML = `
      <main class="content" role="main">
        <ng-container *ngIf="$listItemsData | async as listItemsData; else loader">
          <app-users-list [listItems]="listItemsData"></app-users-list>
        </ng-container>
      </main>
      <ng-template #loader>
        <app-loader></app-loader>
      </ng-template>
    `;
    expect(updatedHtml.replace(/\s/g, '')).toContain(
      leftOverHTML.replace(/\s/g, '')
    );

    const updatedTs = tree.read(
      'apps/chapter01/cc-ng-on-changes/src/app/app.module.ts',
      'utf-8'
    );
    expect(updatedTs).toContain(
      "import { HeaderComponent } from '@codewithahsan/ng-cb-ui';"
    );
  });
});

const nxJSON = {
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
      inputs: ['default', '^production', '{workspaceRoot}/jest.preset.js'],
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
};
