const through2 = require("through2");
const readStream = process.stdin;
const writeStream = process.stdout;
let isLower = true;
readStream
  .pipe(
    through2(function(chunk, encoding, next) {
      let val;
      if (isLower) val = chunk.toString().toLowerCase();
      else val = chunk.toString().toUpperCase();
      this.push(val);
      isLower = !isLower;
      next();
    })
  )
  .pipe(writeStream);
