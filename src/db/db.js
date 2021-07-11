const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "08071996@usa",
    database: "bsale_test"
});

mysqlConnection.connect(function(e){
    if(e) {
        console.log(e);
        return;
    } else {
        console.log("Database is conected");
    }
});

module.exports = mysqlConnection;