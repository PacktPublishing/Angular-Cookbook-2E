const fs = require('fs');
const path = require('path');

const sourceFile = path.join(
  'codewithahsan',
  'packages',
  'ng-cookbook-recipe',
  'src',
  'styles',
  'globals.scss'
);
const targets = ['start', 'final'];

try {
  // Remove existing style.scss files
  targets.forEach((target) => {
    const stylePath = path.join(target, 'globals', 'styles.scss');
    if (fs.existsSync(stylePath)) {
      fs.rmSync(stylePath, { force: true });
      console.log(`Removed: ${stylePath}`);
    }
  });

  // Copy and rename new files
  targets.forEach((target) => {
    const targetDir = path.join(target, 'globals');
    const tempPath = path.join(targetDir, 'globals.scss');
    const finalPath = path.join(targetDir, 'styles.scss');

    // Create directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`Created directory: ${targetDir}`);
    }

    // Copy file
    fs.copyFileSync(sourceFile, tempPath);
    console.log(`Copied to: ${tempPath}`);

    // Rename file
    fs.renameSync(tempPath, finalPath);
    console.log(`Renamed to: ${finalPath}`);
  });

  console.log('Style files updated successfully');
} catch (error) {
  console.error('Error updating style files:', error.message);
  process.exit(1);
}
