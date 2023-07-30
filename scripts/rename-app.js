const { readFile, writeFile } = require('fs/promises');
const path = require('path');
const main = async () => {
  const [, , chapter, app, folder] = process.argv;
  console.log('Executor ran for Build', { chapter, app, folder });
  let filePath = `${folder}/apps/`;
  if (chapter) {
    filePath += `${chapter}/`;
  }
  if (!app) {
    return;
  }
  filePath += `${app}/project.json`;
  if (chapter) {
    let contents = await readFile(path.resolve(__dirname, '../', filePath), {
      encoding: 'utf-8',
    });
    contents = JSON.parse(contents);
    const originalName = contents['name'];
    const newName = contents['name'].replace(`${chapter}-`, '');
    contents['name'] = newName;
    let stringified = JSON.stringify(contents, null, 2);
    stringified = stringified.replaceAll(originalName, newName);
    await writeFile(filePath, stringified);
    console.log(`Renaming project done. New name = ${newName}`);
  }
};

main();
