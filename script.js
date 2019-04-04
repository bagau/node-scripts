const folderName = './folderName/';
const fs = require('fs');
const cyrillicToTranslit = require('cyrillic-to-translit-js');

fs.readdir(folderName, (err, files) => {
  files.forEach(file => {
    const newName = cyrillicToTranslit().transform(file, '-').toLowerCase();
    fs.renameSync(folderName + file, folderName + newName);
  });
});
