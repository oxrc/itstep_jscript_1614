var interest = 'test for us';
var persons = [];

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('user-store.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

var express = require('express');
var app = express();

app.get('/interest', function (req, res) {

    db.each(`SELECT description from Interest where id=?`, req.query.id, (err, item) => {
        if (err) {
            console.error(err.message);
            res.send(err.message);
        } else {
            interest = item;
            res.send(interest);
        }
    });
    res.send('No such interest');

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
