const fs = require("fs");
const path = require("path");
const dirpath = process.argv[2];
const extension = process.argv[3];

fs.readdir(dirpath, (err, files) => {
  if (err) throw err;

  files.forEach(f => {
    if (path.extname(f) === "." + extension) {
      console.log(f);
    }
  });
});
