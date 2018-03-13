const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https");

const privateKey = fs.readFileSync("./key.pem", "utf8");
const certificate = fs.readFileSync("./cert.pem", "utf8");

const httpsOptions = {
  key: privateKey,
  cert: certificate
};

const app = express();

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome home</h1>");
});

app.get("/about", (req, res, next) => {
  res.send("<h1>Welcome to about page</h1>");
});

httpServer.listen(8080);
httpsServer.listen(8443);

