var express = require('express')
var app = module.exports = express()
var db = require('../db');

app.get('/user/search', function (req, res) {
  var persons = [];

  db.connection.all(`SELECT * from Person`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }

    persons = rows;

    var result = [];
  
    if (req.query.phone != null) {
      for (var i = 0; i < persons.length; i++) {
        if (persons[i].phone == req.query.phone) {
          result.push(persons[i]);
        }
      }

      res.send(result);
    } else if (req.query.name != null) {
      for (var i = 0; i < persons.length; i++) {
        if (persons[i].firstName + persons[i].lastName == req.query.name) {
          result.push(persons[i]);
        }
      }

      res.send(result);
    } else {
      var interestDescription = req.query.interest;

      db.connection.all('SELECT * from Interest', (err, rows) => {
        if (err) {
          console.error(err.message);
        }

        var interests = rows;
        var interestId;

        for (var i = 0; i < interests.length; i++) {
          if (interests[i].description == interestDescription) {
            interestId = interests[i].id;
          }
        }

        db.connection.all('SELECT * from Person_Interests', (err, rows) => {
          if (err) {
            console.error(err.message);
          }

          var person_interests = rows;
          var personsId = [];

          for (var i = 0; i < person_interests.length; i++) {
            if (person_interests[i].interestId == interestId) {
              personsId.push(person_interests[i].personId);
            }
          }

          for (var i = 0; i < personsId.length; i++) {
            result.push(persons[personsId[i]]);
          }

          res.send(result);
        });
      });
    }
  });
});