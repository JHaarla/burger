const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

//Make the connection
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting to DB: " + err.stack);
        return;
    }
    console.log("Connected to DB as ID: " + connection.threadId);
});

//export the connection so it can be used in the app (ORM)
module.exports = connection;