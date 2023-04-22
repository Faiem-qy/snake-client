const { write } = require("fs");

let connection; // stores the active TCP connection object


// This will setup interface to handle user input from stdin
// In Client Setup, we returned a conn object from the connect function that allowed us to interact with the server.

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};


// handleUserInput takes inputs from the keyboard and interacts with the server.
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('exiting..');
    process.exit();
  }
  if (key === 'w') {// up
    console.log('Moving up');
    connection.write("Move: up");
  }
  if (key === 'a') {// left
    console.log('Moving left');
    connection.write("Move: left");
  }
  if (key === 's') {// down
    console.log("Moving down");
    connection.write("Move: down");
  }
  if (key === 'd') {// right
    console.log("Moving right");
    connection.write("Move: right");
  }

  if (key === '1') {
    connection.write("Say: Yum Yum!");
  }
  if (key === '2') {
    connection.write("Say: I am eating everthing!");
  }
  if (key === '3') {
    connection.write("Say: Look at me!");
  }

};

module.exports = { setupInput };