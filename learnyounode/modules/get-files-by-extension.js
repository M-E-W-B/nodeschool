const fs = require("fs");
const path = require("path");

module.exports = (dirpath, extension, callback) => {
  fs.readdir(dirpath, (err, files) => {
    if (err) return callback(err);

    const matchedFiles = files.filter(f => path.extname(f) === "." + extension);
    return callback(null, matchedFiles);
  });
};
