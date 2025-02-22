const { spawnSync } = require('child_process');
const path = require('path');

// Define paths
const project1 = path.join('apps', 'chapter10', 'ng-jest-setup');
const project2 = path.join('apps', 'chapter13', 'ng-pwa-conversion');

// Run first installation
const result1 = spawnSync('npm', ['i'], {
  cwd: project1,
  stdio: 'inherit',
  shell: true,
});

if (result1.status !== 0) {
  console.error(
    'Installation failed in chapter10/ng-jest-setup, skipping chapter13/ng-pwa-conversion'
  );
  process.exit(1);
}

// Run second installation if first succeeded
const result2 = spawnSync('npm', ['i'], {
  cwd: project2,
  stdio: 'inherit',
  shell: true,
});

if (result2.status !== 0) {
  console.error('Installation failed in chapter13/ng-pwa-conversion');
  process.exit(1);
}
