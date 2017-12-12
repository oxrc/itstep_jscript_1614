var persons=[];
var convertedPersons;
var express = require('express')
var app = express()

/*
db.run(`INSERT INTO Interest(description) VALUES(?)`, ['description'], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('user-store.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});
*/

app.get('/p/:tagId', function(req, res) {
  res.send("tagId is set to " + req.params.tagId);
});


