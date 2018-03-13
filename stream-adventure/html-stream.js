const through2 = require("through2");
// Create a new trumpet stream. This stream is readable and writable.
// Pipe an html stream into tr and get back a transformed html stream.
const tr = require("trumpet")();

function write(chunk, encoding, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

const loudStream = tr.select(".loud").createStream();

loudStream.pipe(through2(write, end)).pipe(loudStream);

process.stdin.pipe(tr).pipe(process.stdout);
