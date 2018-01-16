const sqlite3 = require('sqlite3').verbose();

exports.connection = new sqlite3.Database('user-store.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});