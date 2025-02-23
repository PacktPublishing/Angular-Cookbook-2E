const { spawnSync } = require('child_process');
const path = require('path');
const process = require('process');

// Validate arguments
const chapterInput = process.argv[2];
const appName = process.argv[3];
const appTitle = process.argv[4];
const bothFlag = process.argv[5];

if (!/^\d+$/.test(chapterInput)) {
  console.error('error: Chapter is not a number');
  process.exit(1);
}

if (!appName) {
  console.error('error: App Name not provided');
  process.exit(1);
}

if (!appTitle) {
  console.error('error: App Title not provided');
  process.exit(1);
}

const CHAPTER = `chapter${chapterInput}`;
const APP_FULL_NAME = `${CHAPTER}/${appName}`.replace(/\/+/g, '-');
const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

function runCommand(cmd, args, cwd) {
  const result = spawnSync(cmd, args, {
    stdio: 'inherit',
    shell: true,
    cwd,
  });

  if (result.status !== 0) {
    console.error(`Command failed: ${cmd} ${args.join(' ')}`);
    process.exit(result.status || 1);
  }
}

function createProject(workspace) {
  const workspacePath = path.resolve(workspace);

  console.log(`Creating project for ${workspace}`);
  runCommand(
    npxCmd,
    [
      'nx',
      'g',
      '@codewithahsan/ng-cookbook-recipe:ng-cookbook-recipe',
      appName,
      `--title=${appTitle}`,
      `--directory=${CHAPTER}`,
      '--style=scss',
      '--routing',
      '--e2eTestRunner=none',
      '--skipDefaultProject',
      '--addTailwind',
    ],
    workspacePath
  );

  console.log('Running rename command');
  runCommand(npxCmd, ['nx', 'run', `${APP_FULL_NAME}:rename`], workspacePath);
}

try {
  // Create start project
  createProject('start');

  // Create final project if requested
  if (bothFlag === 'both') {
    console.log('Creating project for final as well');
    createProject('final');
  }

  console.log('Project creation completed successfully');
} catch (error) {
  console.error('Project creation failed:', error.message);
  process.exit(1);
}
