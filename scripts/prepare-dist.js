const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function runBuilds() {
  try {
    // Run all builds in parallel
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
