import {
  Tree,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
  names,
  getWorkspaceLayout,
  offsetFromRoot,
  updateProjectConfiguration,
} from '@nx/devkit';
import {
  E2eTestRunner,
  UnitTestRunner,
  applicationGenerator,
} from '@nx/angular/generators';
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
    standalone: true,
    skipTests: options.skipTests ?? false,
    prefix: 'app',
    unitTestRunner: options.unitTestRunner ?? UnitTestRunner.Jest,
    e2eTestRunner: options.e2eTestRunner ?? E2eTestRunner.Cypress,
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

type ProjectConfiguration = ReturnType<typeof readProjectConfiguration>;

type RenameScriptOptions = {
  chapterName: string;
  recipeName: string;
  tags: string[];
};

export const addAssets = (
  config: ProjectConfiguration
): ProjectConfiguration => {
  return {
    ...config,
    targets: {
      ...config.targets,
      build: {
        ...config.targets.build,
        options: {
          ...config.targets.build.options,
          assets: [
            ...config.targets.build.options.assets,
            {
              glob: '**/*',
              input: 'node_modules/@codewithahsan/ng-cookbook-recipe/assets',
              output: 'assets',
            },
          ],
        },
      },
    },
  };
};

export const addStyles = (
  config: ProjectConfiguration
): ProjectConfiguration => {
  return {
    ...config,
    targets: {
      ...config.targets,
      build: {
        ...config.targets.build,
        options: {
          ...config.targets.build.options,
          styles: [
            ...config.targets.build.options.styles,
            'node_modules/@codewithahsan/ng-cb-ui/styles/globals.scss',
          ],
        },
      },
    },
  };
};

const addRenameScript = (
  config: ProjectConfiguration,
  options: RenameScriptOptions
): ProjectConfiguration => {
  return {
    ...config,
    targets: {
      ...config.targets,
      rename: {
        executor: '@codewithahsan/ng-cookbook-recipe:rename',
        options: {
          chapter: options.chapterName,
          app: options.recipeName,
        },
      },
    },
    tags: options.tags,
  };
};

export default async function (
  tree: Tree,
  options: NgCookbookRecipeGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);
  try {
    try {
      await applicationGenerator(tree, normalizedOptions);
    } catch (err) {
      console.log('caught while generating application', err);
    }
    let configuration = readProjectConfiguration(
      tree,
      normalizedOptions.projectName
    );
    configuration = addAssets(configuration);
    configuration = addStyles(configuration);
    configuration = addRenameScript(configuration, {
      recipeName: normalizedOptions.recipeName,
      chapterName: normalizedOptions.chapterName,
      tags: normalizedOptions.parsedTags,
    });

    updateProjectConfiguration(
      tree,
      normalizedOptions.projectName,
      configuration
    );

    if (normalizedOptions.e2eTestRunner !== 'none') {
      const e2eProjectName = `${normalizedOptions.projectName}-e2e`;
      let e2eConfiguration = readProjectConfiguration(tree, e2eProjectName);
      e2eConfiguration = addRenameScript(e2eConfiguration, {
        recipeName: `${normalizedOptions.recipeName}-e2e`,
        chapterName: normalizedOptions.chapterName,
        tags: normalizedOptions.parsedTags,
      });
      updateProjectConfiguration(tree, e2eProjectName, e2eConfiguration);
    }
    addFiles(tree, normalizedOptions);
    await formatFiles(tree);
  } catch (error) {
    console.log(error);
  }
}
