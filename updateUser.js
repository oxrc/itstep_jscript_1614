console.log('Update-user')
var interest = 'test for update user';
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
var errors = {
    mesage: '',
    status: ''
}
var rezult = {
    description: ''
}
app.get('/user/edit', function (req, res) {

    db.run(`Update Person set firstName=?, lastName=?, phone=?, age=? where id=?`, req.query.firstName, req.query.lastName, req.query.age, req.query.phone, req.query.id, function (err) {

        errors.status='not enought parameters' 
        if (req.query.firstName == null) {
            errors.mesage = 'firstName is empty';
            return res.json(errors);
        }
        if (req.query.lastName == null) {
            errors.mesage = 'lastName is empty';
            return res.json(errors);
        }
        if (req.query.phone == null) {
            errors.mesage = 'Phone is empty';
            return res.json(errors);
        }
        if (req.query.age == null) {
            errors.mesage = 'Phone is empty';
            return res.json(errors);
        }
        if (err != null) {
            console.log(err);
            errors.status = err.name;
            errors.mesage = err.message;
            res.json(errors);
        }
        if (this.changes === 0) {
            errors.status = 'Not found element';
            errors.mesage = 'No such Person';
            return res.json(errors);
        }

        console.log(`Row(s) updated: ${this.changes}`)
        rezult.description = 'User data update success, rows updated=' + this.changes;
        return res.json(rezult);

    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
