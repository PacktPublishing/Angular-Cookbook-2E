const { spawnSync, spawn } = require('child_process');
const process = require('process');

const appName = process.argv[2];
const command = process.argv[3];

if (!appName) {
  console.error('Error: App Name must be provided');
  process.exit(1);
}

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

function runNxBuild(context, project, options = []) {
  const result = spawnSync(npxCmd, ['nx', 'build', project, ...options], {
    stdio: 'inherit',
    shell: true,
    cwd: context,
  });

  if (result.status !== 0) {
    console.error(`Build failed in ${context}`);
    process.exit(result.status || 1);
  }
}

try {
  switch (command) {
    case 'both':
      runNxBuild('start', appName);
      runNxBuild('final', appName);
      break;

    case 'with-stats':
      runNxBuild('start', appName, ['--stats-json']);
      break;

    case 'with-server':
      const appBuild = spawn(npxCmd, ['nx', 'build', appName], {
        stdio: 'ignore',
        shell: true,
        cwd: 'start',
      });
      appBuild.unref();

      runNxBuild('codewithahsan', 'fake-be');
      try {
        process.kill(-appBuild.pid);
      } catch (err) {
        if (err.code !== 'ESRCH')
          console.error('Error killing app build:', err);
      }
      break;

    case 'final':
      runNxBuild('final', appName);
      break;

    default:
      runNxBuild('start', appName);
  }
} catch (error) {
  console.error('Build process failed:', error);
  process.exit(1);
}
