const fs = require('fs');
const path = require('path');
const readline = require('readline');

const chapterInput = process.argv[2];
const appName = process.argv[3];

// Validation
if (!/^\d+$/.test(chapterInput)) {
  console.error('error: Chapter is not a number');
  process.exit(1);
}

if (!appName) {
  console.error('error: App Name not provided');
  process.exit(1);
}

const chapter = `chapter${chapterInput}`;
const targetPath = path.join(chapter, appName);

async function confirmRemove() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      `Do you wish to remove this folder "${targetPath}"? (yes/no) `,
      (answer) => {
        rl.close();
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    );
  });
}

async function main() {
  try {
    console.log(targetPath);

    const confirmed = await confirmRemove();
    if (!confirmed) {
      console.log('Operation canceled');
      process.exit(0);
    }

    // Remove directories
    const pathsToRemove = [
      path.join('start', 'apps', chapter, appName),
      path.join('final', 'apps', chapter, appName),
    ];

    pathsToRemove.forEach((dirPath) => {
      if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
        console.log(`Removed: ${dirPath}`);
      }
    });

    console.log(`${targetPath} removed`);
  } catch (error) {
    console.error('Error removing directories:', error.message);
    process.exit(1);
  }
}

main();
