import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import update from './add-base-href';
jest.useFakeTimers();
describe('should add base href to projects', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });

    tree.write('nx.json', JSON.stringify(nxJSON, null, 2));

    tree.write('package.json', JSON.stringify(packageJson, null, 2));

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
    await update(tree);

    const updatedProjectJson = tree.read(
      'apps/chapter01/cc-inputs-outputs/project.json',
      'utf-8'
    );
    expect(updatedProjectJson).toContain(
      '"baseHref": "/Angular-Cookbook-2E/chapter01/cc-inputs-outputs/start/"'
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

const packageJson = {
  name: 'start',
};
