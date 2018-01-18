var persons = [];

var express = require('express');
var app = module.exports = express();
var db = require('../db');

app.get('/users', function (req, res) {

    db.connection.all('SELECT * from Person limit 20 offset ' + req.query.lim * 20, function (err, rows) {
        if (err != null) {
            res.send("Error")
        }

        var result = rows;
        
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("No user found");
        }
    });
});
