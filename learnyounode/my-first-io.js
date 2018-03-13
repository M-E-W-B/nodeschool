const fs = require("fs");

const filepath = process.argv[2];

const dataBuffer = fs.readFileSync(filepath);
const dataString = dataBuffer.toString();
const lines = dataString.split("\n").length - 1;
console.log(lines);
