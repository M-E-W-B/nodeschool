const request = require("request");

const src = process.stdin;
const r = request.post("http://localhost:8099");
const dst = process.stdout;

src.pipe(r).pipe(dst);
