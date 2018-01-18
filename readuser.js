var express = require('express');
var app = express();

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('user-store.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});
console.log('Server is up1.');

let sql = `SELECT * FROM Person WHERE id  = ?`;
//let id = 31;

db.get(sql, [id], (err, row) => {
    if (err) {
        return console.error(err.message);
    }
    return row ?
        console.log(row.id, row.firstName, row.lastName, row.phone, row.active, row.age) :
        console.log(`No user found with the id ${id}`);
});
db.close();
app.listen(3000, () => console.log('Listening on 300'))
