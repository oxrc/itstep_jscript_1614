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
app.get('/user/edit', function (req, res) {
    var stringQuery = 'UPDATE Person SET firstName = "' + req.query.firstName + '", lastName = "' + req.query.lastName + '", phone = ' + req.query.phone + ', active = ' + req.query.active + ', age = ' + req.query.age + ' WHERE id = ' + req.query.id
  db.run( stringQuery, function (err) {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      res.json(status);
    console.log(stringQuery);
      return console.log(err.message);
    }
    console.log(`A row has been updated ${req.query.id}`);
    status = {
      status: "ok",
      interest: {
        id: req.query.id,
        description: req.query.desc
      }
    }
    res.json(status);
  });
});

app.listen(3000, () => console.log('Listening on 300'))