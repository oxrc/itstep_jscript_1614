var express = require('express')
var bodyParser = require('body-parser')
var app = express()

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('user-store.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

console.log('Server is up.');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/admin/login/', function (req, res) {
    var login = req.body.name;
    var pass = req.body.pass;
    var generatedSid = '';
    var ip = req.ip;
    console.log(login);
    console.log(pass);
    console.log("ip is"+ip);

    db.get("Select password from Users where name= " + login, function (err, password) {

        if (err != null) {
            console.log(err.mesage);
            res.json(err);
        }

        if (password == pass) {
            generatedSid = "fsfh75t35tycn39ty3n9";
            var ip = "192.568.256.311" //req.body.ip;
            var uid = '';
            var timeStemp

            db.get("Select from Person where name= " + login, function (err, userId) {
                if (err != null) {
                    console.log(err.mesage);
                    res.json(err);
                }
                uid = userId;
                console.log("user id=" + uid);
            });


            db.run("Insert into Session values (?) " + generatedSid, uid, timeStemp, ip, function (err, password) {

                if (err != null) {
                    console.log(err.mesage);
                    res.json(err);
                }
                console.log("session log on success")

            });
        };

        res.json(generatedSid);

    });
});

app.listen(3000, () => console.log('Listening on 3000'))
