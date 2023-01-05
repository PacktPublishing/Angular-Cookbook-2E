import {
  Tree,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
  names,
  getWorkspaceLayout,
  offsetFromRoot,
  updateProjectConfiguration,
} from '@nrwl/devkit';
import { applicationGenerator } from '@nrwl/angular/generators';
import { NgCookbookRecipeGeneratorSchema } from './schema';
import path = require('path');

interface NormalizedSchema extends NgCookbookRecipeGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
  chapterName: string;
  recipeName: string;
}

function normalizeOptions(
  tree: Tree,
  options: NgCookbookRecipeGeneratorSchema
): NormalizedSchema {
  const recipeName = names(options.name).fileName;
  let chapterName = '';
  let projectDirectory;
  if (options.directory) {
    projectDirectory = `${names(options.directory).fileName}/${recipeName}`;
    chapterName = names(options.directory).fileName;
  } else {
    projectDirectory = recipeName;
  }
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).appsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    style: options.style || 'scss',
    skipDefaultProject: true,
    skipTests: options.skipTests !== undefined ? options.skipTests : false,
    prefix: 'app',
    e2eTestRunner:
      options.e2eTestRunner !== undefined ? options.e2eTestRunner : 'cypress',
    projectName,
    chapterName,
    recipeName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}

export default async function (
  tree: Tree,
  options: NgCookbookRecipeGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);
  try {
    await applicationGenerator(tree, normalizedOptions);
    const configuration = readProjectConfiguration(
      tree,
      normalizedOptions.projectName
    );
    updateProjectConfiguration(tree, normalizedOptions.projectName, {
      ...configuration,
      targets: {
        ...configuration.targets,
        rename: {
          executor: '@codewithahsan/ng-cookbook-recipe:rename',
          options: {
            chapter: normalizedOptions.chapterName,
            app: normalizedOptions.recipeName,
          },
        },
      },
      tags: normalizedOptions.parsedTags,
    });
    if (normalizedOptions.e2eTestRunner !== 'none') {
      const e2eProjectName = `${normalizedOptions.projectName}-e2e`;
      const e2eConfiguration = readProjectConfiguration(tree, e2eProjectName);

      updateProjectConfiguration(tree, e2eProjectName, {
        ...e2eConfiguration,
        targets: {
          ...e2eConfiguration.targets,
          rename: {
            executor: '@codewithahsan/ng-cookbook-recipe:rename',
            options: {
              chapter: normalizedOptions.chapterName,
              app: `${normalizedOptions.recipeName}-e2e`,
            },
          },
        },
        tags: normalizedOptions.parsedTags,
      });
    }
    addFiles(tree, normalizedOptions);
    await formatFiles(tree);
  } catch (error) {
    console.log(error);
  }
}
