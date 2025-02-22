const { spawn } = require('child_process');
const process = require('process');

function runCommand(command, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, {
      shell: true,
      stdio: 'inherit',
      cwd: cwd,
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed: ${command} in ${cwd}`));
      }
    });
  });
}

async function runSanityChecks() {
  try {
    const commands = [
      // Start directory commands
      { cmd: 'npx nx run-many --target build', cwd: 'start' },
      {
        cmd: 'rm -rf ./node_modules && npm i && npm run build',
        cwd: 'start/apps/chapter10/ng-jest-setup',
      },
      { cmd: 'npx nx build ng-pwa-app-shell', cwd: 'start' },
      {
        cmd: 'rm -rf ./node_modules && npm i && npm run build',
        cwd: 'start/apps/chapter13/ng-pwa-conversion',
      },

      // Final directory commands
      { cmd: 'npx nx run-many --target build', cwd: 'final' },
      {
        cmd: 'rm -rf ./node_modules && npm i && npm run build',
        cwd: 'final/apps/chapter10/ng-jest-setup',
      },
      { cmd: 'npx nx build ng-pwa-app-shell', cwd: 'final' },
      {
        cmd: 'rm -rf ./node_modules && npm i && npm run build',
        cwd: 'final/apps/chapter13/ng-pwa-conversion',
      },
    ];

    // Run all commands in parallel
    await Promise.all(commands.map(({ cmd, cwd }) => runCommand(cmd, cwd)));

    console.log('All sanity checks completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Sanity checks failed:', error.message);
    process.exit(1);
  }
}

runSanityChecks();
