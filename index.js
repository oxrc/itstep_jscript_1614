var persons=[];
var convertedPersons;

var express = require('express')
var app = module.exports = express();

console.log('Server is up.');

app.get('/', function (req, res) {
    res.send(persons);
});

var addInterest = require('./lib/addInterest');
var deleteInterest = require('./lib/deleteInterest');
var deletePerson = require('./lib/deletePerson');
var editInterest = require('./lib/editInterest');
var editPerson = require('./lib/editPerson');

app.use(addInterest);
app.use(deleteInterest);
app.use(deletePerson);
app.use(editInterest);
app.use(editPerson);

app.listen(3000, () => console.log('Listening on port 3000'))