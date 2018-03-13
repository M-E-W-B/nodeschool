const fs = require("fs");

const readStream = fs.createReadStream(process.argv[2], { encoding: "utf8" });

readStream.pipe(process.stdout);
