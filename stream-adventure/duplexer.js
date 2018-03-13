const duplexer2 = require("duplexer2");
const { spawn } = require("child_process");

// A concrete example of a duplex stream is a network socket. A Node.js socket
// builds on a duplex stream to implement the ability to transmit
// and receive data over the network. This one socket instance has two independent
// channels, one for sending data, and one for receiving data.

module.exports = (cmd, args) => {
  // spawn the process and return a single stream
  // joining together the stdin and stdout here
  const childProcess = spawn(cmd, args);
  return duplexer2(childProcess.stdin, childProcess.stdout);
};
