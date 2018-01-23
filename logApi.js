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

    console.log("login =" + login);
    console.log("pass =" + pass);

    /////
    var os = require('os');

    var networkInterfaces = os.networkInterfaces();

    var ip = networkInterfaces.Ethernet[0].address;
    console.log("client IP is " + ip);

    let query1 = "Select * from User where userName=" + "'" + login + "'";
    let query2 = "Select * from Person where firstName=" + "'" + login + "'";
    console.log(query2);

    db.get(query1, function (err, row) {

        if (row !== undefined) {
            console.log("Naideno " + row.password);
        } else {

        }

        if (err != null) {
            console.log("No such person " + err.mesage);
            return res.json(err);
        }


        if (row.password == pass) {
            generatedSid = "fsfh75t35tycn39ty3n9";
            console.log("generatedSid is complite");
            var uid = '';
            var timeStemp = '';

            db.get(query2, function (err, row) {
                if (err != null) {
                    console.log(err.mesage);
                    return res.json("Net usera");
                }
                if (row !== undefined) {
                    console.log("Naideno " + row.id);
                    uid = row.id;
                    console.log("user id=" + uid);
                } else {

                }
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
