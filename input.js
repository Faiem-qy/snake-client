const { write } = require("fs");

let connection; // stores the active TCP connection object

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('exiting..');
    process.exit();
  }
  if (key === '\u001B\u005B\u0041') {
    console.log('Moving up');
    connection.write("Move: up");
  }
  if (key === '\u001B\u005B\u0044') {
    console.log('Moving left');
    connection.write("Move: left");
  }
  if (key === '\u001B\u005B\u0042') {
    console.log("Moving down");
    connection.write("Move: down");
  }
  if (key === '\u001B\u005B\u0043') {
    console.log("Moving right");
    connection.write("Move: right");
  } if (key === '1') {
    connection.write("Say: Yum Yum!");
  } if (key === '2') {
    connection.write("Say: I am eating everthing!");
  } if (key === '3') {
    connection.write("Say: Look at me!");
  }

};
// setup interface to handle user input from stdin



// setupInput();
module.exports = { setupInput };