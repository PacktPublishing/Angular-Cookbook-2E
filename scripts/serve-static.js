const { spawn, spawnSync } = require('child_process');

const chapter = process.argv[2];
const appName = process.argv[3];
const portArg = process.argv[4];
const isFinal = process.argv[5] === 'final';

if (!chapter || !appName) {
  console.error('Error: Chapter Name and App Name must be provided');
  process.exit(1);
}

// Validate port number
const port = portArg || '8080';
if (isNaN(port) || port < 1 || port > 65535) {
  console.error(`Invalid port number: ${port}`);
  process.exit(1);
}

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

if (isFinal) {
  const buildProcess = spawn(npmCmd, ['run', 'build', appName, 'final'], {
    stdio: 'ignore',
    shell: true,
  });
  buildProcess.unref();

  const serverProcess = spawn(
    npxCmd,
    [
      'http-server',
      `final/dist/apps/${chapter}/${appName}`,
      `--port=${port}`,
      '--address=localhost',
      '-o',
    ],
    { stdio: 'inherit', shell: true }
  );

  serverProcess.on('exit', (code) => {
    try {
      process.kill(-buildProcess.pid);
    } catch (err) {
      if (err.code !== 'ESRCH')
        console.error('Error killing build process:', err);
    }
    process.exit(code || 0);
  });
} else {
  const buildResult = spawnSync(npmCmd, ['run', 'build', appName], {
    stdio: 'inherit',
    shell: true,
  });

  if (buildResult.status !== 0) {
    console.error('Build failed');
    process.exit(buildResult.status || 1);
  }

  const serverProcess = spawn(
    npxCmd,
    [
      'http-server',
      `start/dist/apps/${chapter}/${appName}`,
      `--port=${port}`,
      '--address=localhost',
      '-o',
    ],
    { stdio: 'inherit', shell: true }
  );

  serverProcess.on('exit', (code) => {
    process.exit(code || 0);
  });
}
