var persons=[];
var convertedPersons = [];

const sqlite3 = require('sqlite3').verbose();
console.log('Server is up.');
let db = new sqlite3.Database('user-store.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage

db.serialize(() => {
  db.each(`SELECT * from Person`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    persons.push(row);
  });
});

app.get('/', function (req, res) {
 
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

 
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});