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
app.get('/interest/edit', function (req, res) {
  db.run(`UPDATE Interest SET description = '`+ req.query.desc+`' WHERE id =`+ req.query.id, function (err) {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      res.json(status);
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