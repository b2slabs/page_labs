// import Database from 'better-sqlite3'

// const db = new Database('database.db')
// // const db = require('better-sqlite3')('database.db')

// const createTable = () => {
//   const sql = `
//     CREATE TABLE users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT NOT NULL,
//       age INTEGER
//     )
//   `
//   db.prepare(sql).run()
// }

// const insertTable = (name, age) => {
//   const sql = `
//     INSERT INTO users (name, age)
//     VALUES (?, ?)
//   `
//   db.prepare(sql).run(name, age)
// }

// const getUsers = () => {
//   const sql = `
//     SELECT * FROM users
//   `
//   const rows = db.prepare(sql).all()
//   console.log(rows);
// }
// window.getUsers = getUsers

// // insertTable("Kuro", 32)
// // getUsers()
// console.log("test")

// import initSqlJs from 'sql.js';

// const SQL = await initSqlJs({
//   // locateFile: file => `https://sql.js.org/dist/${file}`
//   locateFile: file => `src/db/database.db`
// })

// const db = new SQL.Database();

// function getUsers(db) {
//   const results = db.exec("SELECT * FROM users");
//   console.log(results)
// }

// getUsers(db)

