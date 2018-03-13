const fs = require("fs");

const filepath = process.argv[2];

fs.readFile(filepath, (err, dataBuffer) => {
  if (err) throw err;
  const dataString = dataBuffer.toString();
  const lines = dataString.split("\n").length - 1;
  console.log(lines);
});
