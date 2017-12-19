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
app.get('/user/delete', function (req, res) {
  db.run(`DELETE from Person WHERE id =` + req.query.id, function (err) {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      res.json(status);
      return console.log(err.message);
    }
  });
  db.run(`DELETE from Person_Interests WHERE personId =` + req.query.id, function (err) {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      res.json(status);
      return console.log(err.message);
    }
    console.log(`A row has been deleted ${req.query.id}`);
    res.json("Okey, person has been removed");
  });
});

app.listen(3000, () => console.log('Listening on 300'))
