const { spawn } = require('child_process');
const process = require('process');

const appName = process.argv[2];
const command = process.argv[3];

if (!appName) {
  console.error('Error: App Name must be provided');
  process.exit(1);
}

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

function runServe(directory, project, port, options = []) {
  return spawn(
    npxCmd,
    ['nx', 'serve', project, `--port=${port}`, '-o', ...options],
    {
      stdio: 'inherit',
      shell: true,
      cwd: directory,
    }
  );
}

function runFakeBE() {
  return spawn(npxCmd, ['nx', 'run', 'fake-be:serve'], {
    stdio: 'inherit',
    shell: true,
    cwd: 'codewithahsan',
  });
}

try {
  switch (command) {
    case 'both': {
      const startServer = runServe('start', appName, 4200);
      const finalServer = runServe('final', appName, 4201);

      const cleanup = () => {
        try {
          process.kill(-startServer.pid);
          process.kill(-finalServer.pid);
        } catch (err) {
          if (err.code !== 'ESRCH') console.error('Cleanup error:', err);
        }
      };

      process.on('SIGINT', cleanup);
      process.on('SIGTERM', cleanup);

      finalServer.on('exit', (code) => {
        cleanup();
        process.exit(code || 0);
      });
      break;
    }

    case 'with-server': {
      const appServer = runServe('start', appName, 4200);
      const beServer = runFakeBE();

      let appServerDead = false;
      appServer.on('exit', () => (appServerDead = true));

      const cleanup = () => {
        try {
          if (!appServerDead) process.kill(-appServer.pid);
          process.kill(-beServer.pid);
        } catch (err) {
          if (err.code !== 'ESRCH') console.error('Cleanup error:', err);
        }
      };

      process.on('SIGINT', cleanup);
      process.on('SIGTERM', cleanup);

      beServer.on('exit', (code) => {
        cleanup();
        process.exit(code || 0);
      });
      break;
    }

    case 'final': {
      const finalServer = runServe('final', appName, 4201);
      finalServer.on('exit', (code) => process.exit(code || 0));
      break;
    }

    default: {
      const startServer = runServe('start', appName, 4200);
      startServer.on('exit', (code) => process.exit(code || 0));
    }
  }
} catch (error) {
  console.error('Serve process failed:', error);
  process.exit(1);
}
