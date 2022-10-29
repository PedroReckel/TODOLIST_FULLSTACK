const mysql = require('mysql2/promise')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todolist'
})

module.exports = connection