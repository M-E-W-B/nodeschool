const http = require("http");
const urls = process.argv.splice(2);

function request(url, callback) {
  http.get(url, res => {
    res.setEncoding("utf8");
    let data = "";
    res.on("data", chunk => {
      data += chunk;
    });
    res.on("end", () => {
      callback(data);
    });
  });
}

const arr = [];
let count = 0;

urls.forEach((url, i) => {
  request(urls[i], function(data) {
    arr[i] = data;
    count += 1;

    if (count === 3) {
      arr.forEach(a => console.log(a));
    }
  });
});
