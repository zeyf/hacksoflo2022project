import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "mydb.cfwsgcrrnvcr.us-east-1.rds.amazonaws.com",
    database: "hacksoflo2022",
    user: "admin",
    password: "password123"
});

connection.connect((err: any) => {
    if (err)
        console.log(err);
    else
        console.log("Successfully Connected to Amazon RDS MySQL Database.");
});

module.exports = connection;