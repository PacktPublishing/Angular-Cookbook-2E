import { BuildExecutorSchema } from './schema';
import type { ExecutorContext } from '@nx/devkit';

import { readFile, writeFile } from 'fs/promises';

const updateProjectJSON = async (filePath, appName) => {
  let contents = await readFile(filePath, {
    encoding: 'utf-8',
  });
  contents = JSON.parse(contents);
  const originalName = contents['name'];
  contents['name'] = appName;
  let stringified = JSON.stringify(contents, null, 2);
  stringified = stringified.replace(
    new RegExp(
      originalName.endsWith('e2e')
        ? originalName.substr(0, originalName.length - 4)
        : originalName,
      'g'
    ),
    appName
  );
  await writeFile(filePath, stringified);
  return {
    originalName,
    appName,
  };
};

const updateJestConfig = async (filePath, appName, originalName) => {
  const contents = await readFile(filePath, {
    encoding: 'utf-8',
  });
  const stringified = contents.replace(
    new RegExp(
      originalName.endsWith('e2e')
        ? originalName.substr(0, originalName.length - 4)
        : originalName,
      'g'
    ),
    appName
  );
  await writeFile(filePath, stringified);
};

const renameApp = async (
  options: BuildExecutorSchema,
  context: ExecutorContext
) => {
  const { chapter, app: appName } = options;
  if (!chapter) {
    return;
  }
  console.log('Executor running for Build', { chapter, appName });
  const projectJSONFilePath = `${context.root}/apps/${chapter}/${appName}/project.json`;
  const { originalName } = await updateProjectJSON(
    projectJSONFilePath,
    appName
  );
  if (!originalName.endsWith('e2e')) {
    const jestConfigFilePath = `${context.root}/apps/${chapter}/${appName}/jest.config.ts`;
    try {
      await updateJestConfig(jestConfigFilePath, appName, originalName);
    } catch (err) {
      console.log('error caught while finding jest file', err);
    }
  }
  console.log(`Renaming project done. New name = ${appName}`);
};

export default async function runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  try {
    await renameApp(options, context);
  } catch (err) {
    console.log({ err });
    return {
      success: false,
    };
  }
  return {
    success: true,
  };
}
