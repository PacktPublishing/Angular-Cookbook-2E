const fs = require('fs');
const path = require('path');

function findStandaloneProjects(directoryPath, logFilePath) {
  try {
    fs.readdirSync('logs');
  } catch (e) {
    fs.mkdirSync('logs');
  }
  fs.readdirSync(directoryPath).forEach((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory() && !filePath.includes('node_modules')) {
      findStandaloneProjects(filePath, logFilePath); // Recursively search subdirectories
    } else if (fileName === 'angular.json') {
      try {
        fs.appendFileSync(
          logFilePath,
          `Standalone Angular Project: ${filePath}\n`
        );
      } catch (error) {
        console.error(`Error reading ${filePath}: ${error}`);
      }
    }
  });
}

function main() {
  const parentFolder = process.argv[2]; // Get parent folder path from command line
  const logFilePath =
    process.argv[3] || 'logs/standalone_projects_filepaths.txt'; // Optional log file path (defaults to missing_spacer_log.txt)

  if (!parentFolder) {
    console.error('Please provide a parent folder path as the first argument.');
    return;
  }

  try {
    findStandaloneProjects(parentFolder, logFilePath);
    console.log(`Log written to ${logFilePath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
