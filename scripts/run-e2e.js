const { spawn } = require('child_process');
const process = require('process');

const appName = process.argv[2];
const command = process.argv[3];

if (!appName) {
  console.error('Error: App Name must be provided');
  process.exit(1);
}

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

function runE2E(directory, watch = false) {
  const args = ['nx', 'run', `${appName}-e2e:e2e`];
  if (watch) args.push('--watch');

  return spawn(npxCmd, args, {
    stdio: 'inherit',
    shell: true,
    cwd: directory,
  });
}

function runFakeBE() {
  return spawn(npxCmd, ['nx', 'serve', 'fake-be'], {
    stdio: 'inherit',
    shell: true,
    cwd: 'codewithahsan',
  });
}

try {
  switch (command) {
    case 'both': {
      const startProcess = runE2E('start');
      const finalProcess = runE2E('final');

      const cleanup = () => {
        if (!startProcess.killed) startProcess.kill();
        if (!finalProcess.killed) finalProcess.kill();
      };

      process.on('SIGINT', cleanup);
      process.on('SIGTERM', cleanup);

      finalProcess.on('exit', (code) => {
        cleanup();
        process.exit(code || 0);
      });
      break;
    }

    case 'with-server': {
      const e2eProcess = runE2E('start', true);
      const beProcess = runFakeBE();

      const cleanup = () => {
        if (!e2eProcess.killed) e2eProcess.kill();
        if (!beProcess.killed) beProcess.kill();
      };

      process.on('SIGINT', cleanup);
      process.on('SIGTERM', cleanup);

      beProcess.on('exit', (code) => {
        cleanup();
        process.exit(code || 0);
      });
      break;
    }

    case 'final': {
      const finalProcess = runE2E('final', true);
      finalProcess.on('exit', (code) => process.exit(code || 0));
      break;
    }

    default: {
      const startProcess = runE2E('start', true);
      startProcess.on('exit', (code) => process.exit(code || 0));
    }
  }
} catch (error) {
  console.error('E2E process failed:', error);
  process.exit(1);
}
