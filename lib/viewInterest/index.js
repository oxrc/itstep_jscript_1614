var interest = 'test for us';
var persons = [];

var express = require('express')
var app = module.exports = express();

var db = require('../db');

var errors={
    mesage:'',
    status:''
}

var rezult={
    id:'',
    description:''
}
app.get('/interest', function (req, res) {

    db.all(`SELECT * from Interest where id=?`, req.query.id, function (err, rows) {
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