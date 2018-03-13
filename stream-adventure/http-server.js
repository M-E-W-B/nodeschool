const http = require("http");
const fs = require("fs");
const through2 = require("through2");
const port = process.argv[2];

function write(chunk, encoding, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

const server = http.createServer(function(req, res) {
  if (req.method === "POST") {
    req.pipe(through2(write, end)).pipe(res);
  }
});

server.listen(port);
