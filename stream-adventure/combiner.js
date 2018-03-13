const combine = require("stream-combiner");
const through2 = require("through2");
const split = require("split");
const zlib = require("zlib");

module.exports = function() {
  let current;

  function write(line, encoding, next) {
    console.log(line.toString());
    if (line.length === 0) return next();
    const row = JSON.parse(line);

    if (row.type === "genre") {
      if (current) {
        this.push(JSON.stringify(current) + "\n");
      }
      current = { name: row.name, books: [] };
    } else if (row.type === "book") {
      current.books.push(row.name);
    }
    next();
  }

  function end(done) {
    if (current) {
      this.push(JSON.stringify(current) + "\n");
    }
    done();
  }

  return combine(split(), through2(write, end), zlib.createGzip());
};
