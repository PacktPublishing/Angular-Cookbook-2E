const { spawn } = require('child_process');
const process = require('process');

const appName = process.argv[2];
const command = process.argv[3];

if (!appName) {
  console.error('Error: App Name must be provided');
  process.exit(1);
}

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

function runTest(directory, watch = false) {
  const args = ['nx', 'test', appName];
  if (watch && command !== 'both') args.push('--watch');

  const child = spawn(npxCmd, args, {
    stdio: 'inherit',
    shell: true,
    cwd: directory,
  });

  return child;
}

try {
  switch (command) {
    case 'both': {
      const startTest = runTest('start');
      const finalTest = runTest('final');

      // Handle process cleanup
      const cleanup = () => {
        if (!startTest.killed) startTest.kill();
        if (!finalTest.killed) finalTest.kill();
      };

      process.on('SIGINT', cleanup);
      process.on('SIGTERM', cleanup);

      // Wait for either process to exit
      finalTest.on('exit', (code) => {
        cleanup();
        process.exit(code || 0);
      });

      startTest.on('exit', (code) => {
        cleanup();
        process.exit(code || 0);
      });
      break;
    }

    case 'final': {
      const finalTest = runTest('final');
      finalTest.on('exit', (code) => process.exit(code || 0));
      break;
    }

    default: {
      const startTest = runTest('start', true);
      startTest.on('exit', (code) => process.exit(code || 0));
    }
  }
} catch (error) {
  console.error('Test process failed:', error);
  process.exit(1);
}
