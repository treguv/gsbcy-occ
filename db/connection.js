const mysql = require("mysql2");
require("dotenv").config(); // load environmental variables
//connect to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
console.log("Connection Successful");

module.exports = connection;
