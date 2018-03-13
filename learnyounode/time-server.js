const net = require("net");

function zeroFill(val) {
  return val > 9 ? val : "0" + val;
}

const server = net.createServer(function(socket) {
  const d = new Date();
  const dateStr = `${d.getFullYear()}-${zeroFill(d.getMonth() + 1)}-${zeroFill(
    d.getDate()
  )} ${zeroFill(d.getHours())}:${zeroFill(d.getMinutes())}`;
  socket.write(dateStr + "\n");
  socket.end();
});
server.listen(process.argv[2]);
