const fs = require('fs');
const path = require('path');
const process = require('process');

// Validate arguments
const chapterInput = process.argv[2];
const appName = process.argv[3];

if (!/^\d+$/.test(chapterInput)) {
  console.error('error: Chapter is not a number');
  process.exit(1);
}

if (!appName) {
  console.error('error: App Name not provided');
  process.exit(1);
}

const CHAPTER = `chapter${chapterInput}`;
const SRC_DIR = path.join('start', 'apps', CHAPTER, appName);
const DEST_DIR = path.join('final', 'apps', CHAPTER, appName);

try {
  // Create destination directory structure
  fs.mkdirSync(path.join('final', 'apps', CHAPTER), {
    recursive: true,
    mode: 0o755, // Maintain directory permissions
  });

  // Remove existing directory if it exists
  if (fs.existsSync(DEST_DIR)) {
    fs.rmSync(DEST_DIR, {
      recursive: true,
      force: true,
      maxRetries: 3, // Handle Windows file locking
      retryDelay: 100,
    });
    console.log(`Removed existing directory: ${DEST_DIR}`);
  }

  // Copy directory contents
  fs.cpSync(SRC_DIR, DEST_DIR, {
    recursive: true,
    preserveTimestamps: true,
    errorOnExist: false,
    force: true,
  });

  console.log(`Copied ${CHAPTER}/${appName} to final`);
  process.exit(0);
} catch (error) {
  console.error(`Error copying files: ${error.message}`);
  process.exit(1);
}
