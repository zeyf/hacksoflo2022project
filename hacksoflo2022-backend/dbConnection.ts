declare var require:any;
declare var module:any;

const mySQL = require('mysql');

const connection = mySQL.createConnection({
    host: "mydb.cfwsgcrrnvcr.us-east-1.rds.amazonaws.com",
    database: "mydb",
    user: "admin",
    password: "password123"
});

connection.connect((err: any) => {
    if (err)
        console.log(err);
    else
        console.log("Successfully Connected to MySQL Database.");
});

module.exports = connection;