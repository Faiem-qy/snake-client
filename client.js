const net = require("net");
// import net from 'net';

const connect = function() {
  const conn = net.createConnection({  //a socket is an endpoint for sending or receiving data across a network. A socket is identified by a unique combination of an IP address and a port number.
    host: "localhost",
    port: 50541,
  });

  conn.on('connect', () => { //Emitted when a socket connection is successfully established.
    console.log("Successfully connected to game server");
    console.log("Name: FQY");
  });

  conn.on("data", (data) => { //used when data is received
    console.log("Server says: ", data);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};




module.exports = { connect };
// export default connect;
