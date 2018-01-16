var persons=[];
var convertedPersons;

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

db.serialize(() => {
    db.each(`SELECT * from Person`, (err, row) => {
      if (err) {
        console.error(err.message);
      }

      persons.push(row)
  });
})


app.get('/', function (req, res) {
    res.send(persons);
});

//***********************************************************************************
//Interest Autocomplete
//***********************************************************************************

var matching = [];
var interests = [];

db.serialize(() => {
  db.each(`SELECT * from Interest`, (err, row) => {
    if (err) {
      console.error(err.message);
    }

    interests.push(row.description);
    // console.log(interests);
  });
});

app.get('/interest/autocomplite', function (req, res) {
  for (var i = 0; i < interests.length; i++) {
    if (interests[i].indexOf(req.query.q) != -1) {
      matching.push(interests[i]);
    }
  }

  // console.log(interests);

  if (matching.length > 0) {
    res.send(matching);
  } else {
    console.error("No data found with current query!");
  }
});

//*************************************************************************
//Search User
//*************************************************************************

var searchUser = require("./searchUser")
app.use(searchUser);

app.listen(3000, () => console.log('Example app listening on port 3000!'));