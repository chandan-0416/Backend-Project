import mysql from "mysql2/promise";

//? 1. to connect the mysql server
const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"4269",
    database: "mysql_db",
});
console.log("MySQL connected successfully");

//? 2. we need to create a db
// await db.execute(`create database mysql_db`);
// console.log(await db.execute("show databases"));

//? 3. then we to create a table
// await db.execute(`
//     CREATE TABLE users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
//     );
//     `)

//? 4. is to perform CRUD operation
//! INSERT
//! Using Inline Values (Not Recommended)
// await db.execute(`
//     insert into users(username, email) values ("chandan", "chandan@gmail.com")
//     `);

//* Using Prepared Statements (Best Practice)
// await db.execute(`
//     insert into users(username, email) values(?,?)`, [
//         "rahul", 
//         "rahul@gmail.com",
//     ]);
//! READ
const [rows] = await db.execute(`select * from users where id=3`);
console.log(rows);