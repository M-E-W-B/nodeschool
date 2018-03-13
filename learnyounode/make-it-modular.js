const getFilesByExtension = require("./modules/get-files-by-extension");
const dirpath = process.argv[2];
const extension = process.argv[3];

getFilesByExtension(dirpath, extension, (err, matchedFiles) => {
  if (err) throw err;

  matchedFiles.forEach(f => {
    console.log(f);
  });
});
