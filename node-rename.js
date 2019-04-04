const fs = require('fs');
// import plugin for translit cyrillic symbols
const cyrillicToTranslit = require('cyrillic-to-translit-js');

// folder name, where will loop for each file
const folderName = './folderName/';

fs.readdir(folderName, (err, files) => {
  files.forEach(file => {
    const newName = cyrillicToTranslit().transform(file, '-').toLowerCase();
    fs.renameSync(folderName + file, folderName + newName);
  });
});
