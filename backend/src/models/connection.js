const mysql = require('mysql2/promise')
require('dotenv').config()

const connection = mysql.createPool({  // Criando conexão
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

module.exports = connection

// Para saber o que as variáveis estão retornando
// console.log(process.env.MYSQL_HOST)
// console.log(process.env.MYSQL_USER)
// console.log(process.env.MYSQL_PASSWORD)
// console.log(process.env.MYSQL_DB)