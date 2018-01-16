var express = require('express')
var app = module.exports = express()
var db = require('../db');

var persons = [];

db.connection.each(`SELECT * from Person`, (err, row) => {
  if (err) {
    console.error(err.message);
  }

  persons.push(row)
});

app.get('/user/search', function (req, res) {
  var result = [];

  if (req.phone != null) {
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].phone == req.phone) {
        result.push(persons[i]);
      }
    }
  } else if (req.name != null) {
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].firstName + persons[i].lastName == req.name) {
        result.push(persons[i]);
      }
    }
  } else {
    result = persons[0];

    // for (var i = 0; i < persons.length; i++) {
    //   var interestFound = false;

    //   for (var j = 0; j < persons[i].interests.length; j++) {
    //     if (persons[i].interests[j] == req.interest) {
    //       interestFound = true;
    //       break;
    //     }
    //   }

    //   if (interestFound) {
    //     result.push(persons[i]);
    //   }
    // }
  }

  res.send(result);
});