const http2 = require("spdy");
const express = require("express");
const fs = require("fs");

const app = express();

const privateKey = fs.readFileSync("./key.pem", "utf8");
const certificate = fs.readFileSync("./cert.pem", "utf8");

const options = {
  key: privateKey,
  cert: certificate
};

app.get("/", function(req, res) {
  res.send(`hello, http2! go to /pushy`);
});

app.get("/testing/push", (req, res) => {
  const stream = res.push("/main.js", {
    status: 200, // optional
    method: "GET", // optional
    request: {
      accept: "*/*"
    },
    response: {
      "content-type": "application/javascript"
    }
  });
  stream.on("error", function() {});
  stream.end('alert("hello from push stream!");');
  res.end('<script src="/main.js"></script>');
});

http2.createServer(options, app).listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
