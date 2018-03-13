const concat = require("concat-stream");
const readStream = process.stdin;
const writeStream = process.stdout;

readStream.pipe(
  concat(function(data) {
    console.log(
      data
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  })
);
