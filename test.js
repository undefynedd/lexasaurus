var mysql = require('mysql');

var con = mysql.createConnection({
    host: "209.182.202.254",
    user: "nbc8d95_cole",
    password: "Z6&V$qCZRB83"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connec");
});
