/*var express = require('express');
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
*/
var express = require('express')
var app = express()

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('user-store.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

console.log('Server is up.');
app.get('/user/read', function (req, res) {
    db.run(`SELECT from Person WHERE id =` + req.query.id, function (err) {
        if (err) {
            status = {
                status: "error",
                error_text: err.message
            }
            res.json(status);
            return console.log(err.message);
        }
        console.log(`A row ${req.query.id}`);
    });

});

app.listen(3000, () => console.log('Listening on 300'))
