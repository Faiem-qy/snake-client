const { connect } = require("./client");

const { setupInput } = require("./input");


console.log("Connecting ...");
const conn = connect();
setupInput(conn);

//connect() returns an object that can be used to interact with the server
