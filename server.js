require("dotenv").config();
const express = require('express');
const app = express();

let mysql = require('mysql')
let connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

app.get('/', function (req, res) {
    connection.connect();
    connection.query('SELECT * FROM migrations', function (err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows)
    });
    connection.end();
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
