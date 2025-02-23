const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function findAllProjects() {
  const projects = [];

  // Process both start and final directories
  for (const root of ['start', 'final']) {
    const appsPath = path.join(process.cwd(), root, 'apps');
    if (!fs.existsSync(appsPath)) continue;

    const chapters = fs
      .readdirSync(appsPath)
      .filter((name) => fs.statSync(path.join(appsPath, name)).isDirectory());

    for (const chapter of chapters) {
      const chapterPath = path.join(appsPath, chapter);
      const apps = fs
        .readdirSync(chapterPath)
        .filter((name) =>
          fs.statSync(path.join(chapterPath, name)).isDirectory()
        );

      for (const app of apps) {
        const appPath = path.join(chapterPath, app);
        const projectJsonPath = path.join(appPath, 'project.json');
        const angularJsonPath = path.join(appPath, 'angular.json');

        if (fs.existsSync(projectJsonPath)) {
          projects.push({
            configPath: projectJsonPath,
            chapter,
            app,
            type: root,
          });
        } else if (fs.existsSync(angularJsonPath)) {
          projects.push({
            configPath: angularJsonPath,
            chapter,
            app,
            type: root,
          });
        }
      }
    }
  }

  return projects;
}

function updateBaseHref(project) {
  const { configPath, chapter, app, type } = project;
  let originalBaseHref = null;

  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const baseHref = `/Angular-Cookbook-2E/${chapter}/${app}/${type}/`;

    if (configPath.endsWith('project.json')) {
      if (config?.targets?.build?.configurations?.production) {
        originalBaseHref =
          config.targets.build.configurations.production.baseHref;
        config.targets.build.configurations.production.baseHref = baseHref;
      }
    } else if (configPath.endsWith('angular.json')) {
      if (config?.projects) {
        for (const projectName in config.projects) {
          const projectConfig = config.projects[projectName];
          if (projectConfig?.architect?.build?.configurations?.production) {
            originalBaseHref =
              projectConfig.architect.build.configurations.production.baseHref;
            projectConfig.architect.build.configurations.production.baseHref =
              baseHref;
            break;
          }
        }
      }
    }

    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
    console.log(`Updated baseHref for ${app} in ${chapter} to ${baseHref}`);
    return originalBaseHref;
  } catch (error) {
    console.error(`Error updating baseHref in ${configPath}:`, error);
    return null;
  }
}

function revertBaseHref(project, originalBaseHref) {
  const { configPath, app, chapter } = project;
  if (!originalBaseHref) return;

  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    if (configPath.endsWith('project.json')) {
      if (config?.targets?.build?.configurations?.production) {
        config.targets.build.configurations.production.baseHref =
          originalBaseHref;
      }
    } else if (configPath.endsWith('angular.json')) {
      if (config?.projects) {
        for (const projectName in config.projects) {
          const projectConfig = config.projects[projectName];
          if (projectConfig?.architect?.build?.configurations?.production) {
            projectConfig.architect.build.configurations.production.baseHref =
              originalBaseHref;
            break;
          }
        }
      }
    }

    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
    console.log(`Reverted baseHref for ${app} in ${chapter}`);
  } catch (error) {
    console.error(`Error reverting baseHref in ${configPath}:`, error);
  }
}

async function runBuilds() {
  try {
    // 1. Find all projects and update their baseHrefs first
    console.log('Updating baseHrefs for all projects...');
    const projects = await findAllProjects();
    const projectsWithBaseHrefs = projects.map((project) => ({
      ...project,
      originalBaseHref: updateBaseHref(project),
    }));

    // 2. Run all builds
    console.log('Running builds...');
    const builds = [
      {
        cmd: 'npx',
        args: ['nx', 'run-many', '--target', 'build'],
        cwd: 'start',
      },
      {
        cmd: 'npm',
        args: ['run', 'build'],
        cwd: 'start/apps/chapter10/ng-jest-setup',
      },
      { cmd: 'npx', args: ['nx', 'build', 'ng-pwa-app-shell'], cwd: 'start' },
      {
        cmd: 'npm',
        args: ['run', 'build'],
        cwd: 'start/apps/chapter13/ng-pwa-conversion',
      },
      {
        cmd: 'npx',
        args: ['nx', 'run-many', '--target', 'build'],
        cwd: 'final',
      },
      {
        cmd: 'npm',
        args: ['run', 'build'],
        cwd: 'final/apps/chapter10/ng-jest-setup',
      },
      { cmd: 'npx', args: ['nx', 'build', 'ng-pwa-app-shell'], cwd: 'final' },
      {
        cmd: 'npm',
        args: ['run', 'build'],
        cwd: 'final/apps/chapter13/ng-pwa-conversion',
      },
    ];

    const results = builds.map(({ cmd, args, cwd }) => {
      const result = spawnSync(cmd, args, {
        stdio: 'inherit',
        shell: true,
        cwd,
      });
      if (result.status !== 0) {
        throw new Error(`Build failed in ${cwd}`);
      }
      return result;
    });

    console.log('All builds completed successfully');

    // Copy files
    await copyBuildOutput('start');
    await copyBuildOutput('final');
    copyDistApp();

    console.log('Build output organized successfully');

    // 3. Revert all baseHrefs
    console.log('Reverting baseHrefs...');
    for (const project of projectsWithBaseHrefs) {
      revertBaseHref(project, project.originalBaseHref);
    }
  } catch (error) {
    console.error('Error during build process:', error.message);
    process.exit(1);
  }
}

async function copyBuildOutput(type) {
  const rootDir = path.resolve(process.cwd());
  const sourceBase = path.join(rootDir, type, 'dist', 'apps');

  if (!fs.existsSync(sourceBase)) {
    console.warn(`No build output found for ${type}`);
    return;
  }

  try {
    const chapters = fs
      .readdirSync(sourceBase)
      .filter((name) => fs.statSync(path.join(sourceBase, name)).isDirectory());

    for (const chapter of chapters) {
      const chapterPath = path.join(sourceBase, chapter);
      const apps = fs
        .readdirSync(chapterPath)
        .filter((name) =>
          fs.statSync(path.join(chapterPath, name)).isDirectory()
        );

      for (const app of apps) {
        const src = path.join(chapterPath, app);
        const dest = path.join(rootDir, 'dist', 'apps', chapter, app, type);

        fs.mkdirSync(dest, { recursive: true });
        fs.cpSync(src, dest, { recursive: true });

        console.log(`Copied ${type} content for ${chapter}/${app}`);
      }
    }
  } catch (error) {
    throw new Error(`Failed to copy ${type} output: ${error.message}`);
  }
}

function copyDistApp() {
  const source = path.resolve('dist-app');
  const dest = path.resolve('dist', 'apps');

  if (!fs.existsSync(source)) {
    console.warn('No dist-app directory found');
    return;
  }

  try {
    fs.cpSync(source, dest, { recursive: true });
    console.log('Copied dist-app contents');
  } catch (error) {
    throw new Error(`Failed to copy dist-app: ${error.message}`);
  }
}

runBuilds();
