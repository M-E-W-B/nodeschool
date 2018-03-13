const http = require("http");
const url = require("url");
const port = process.argv[2];

const server = http.createServer(function(req, res) {
  const urlObj = url.parse(req.url, true);
  const d = new Date(urlObj.query.iso);

  if (req.method === "GET") {
    let obj;
    if (urlObj.pathname === "/api/parsetime") {
      obj = {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
      };
    } else if (urlObj.pathname === "/api/unixtime") {
      obj = { unixtime: d.getTime() };
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(obj));
  }
});
server.listen(port);
