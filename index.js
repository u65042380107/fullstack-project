var express = require("express");
var cors = require("cors");

require('dotenv').config();
// Get the client
// import mysql from 'mysql2/promise';
const mysql = require("mysql2");
// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

var app = express();

app.use(cors());

app.get("/hello-world", function (req, res, next) {
  res.json({ msg: "Hello world!" });
});

app.get("/todo", function (req, res, next) {
  // A simple SELECT query
  connection.query(
    'SELECT * FROM `todo`',
    function (err, results, fields) {
        res.json(results)
    }
  );
});

app.listen(5000, function () {
  console.log("CORS-enabled web server listening on port 5000");
});
