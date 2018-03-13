const through2 = require("through2");
const readStream = process.stdin;
const writeStream = process.stdout;

readStream
  .pipe(
    through2(function(chunk, encoding, next) {
      this.push(chunk.toString().toUpperCase());
      next();
    })
  )
  .pipe(writeStream);
