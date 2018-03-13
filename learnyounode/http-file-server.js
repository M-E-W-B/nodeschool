const http = require("http");
const fs = require("fs");
const port = process.argv[2];
const filepath = process.argv[3];

const server = http.createServer(function(req, res) {
  const readStream = fs.createReadStream(filepath, { encoding: "utf8" });

  let data = "";

  readStream.on("data", function(chunk) {
    data += chunk;
  });

  readStream.on("end", function() {
    res.end(data);
  });
});
server.listen(port);
