var express = require('express');
var app = express();

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('user-store.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

console.log('Server is up.');
app.get('/user/read', function (req, res) {
    db.get(`SELECT * from Person WHERE id =` + req.query.id, function (err, row) {
        if (err != null) {
            return console.error(err.message);
        }
        return row ?
            res.send(row.id + " " + row.firstName + " " + row.lastName + " " + row.age + " " + row.phone + " " + row.active) :
            console.log(`No user found with the id ${id}`);
    });
    console.log(`A row ${req.id}`);
});

app.listen(3000, () => console.log('Listening on 300'))
