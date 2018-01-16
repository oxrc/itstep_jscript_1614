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
var errors={
    mesage:'',
    status:''
}
var rezult={
    id:'',
    description:''
}
app.get('/user/edit?id=&firstName=&lastName=&age=&phone=', function (req, res) {

    db.run(`Update Person set firstName=?, lastName=?, age=? where id=?`, req.query.id, req.query.firstName, req.query.lastName, function (err, rows) {
        if (err != null) {
            console.log(err);
            errors.status=err.name;
            errors.mesage=err.message;
            res.json(errors);            
        }

        if (rows.length === 0) {
             errors.status='Not found element';
            errors.mesage='No such interest';
            res.json(errors);
        }

        rows.forEach(function (row) {
          rezult.id=row.id;
            rezult.description=row.description;
            res.json(rezult);
        })
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
