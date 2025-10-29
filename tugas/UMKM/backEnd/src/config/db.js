require('dotenv').config()
const mysql = require('mysql2')

const connectionPool = mysql.createPool({
    host: process.env.HOSTNAME || 'localhost',
    user: process.env.USERNAME || 'root',
    password: process.env.PASSWORD || 'root',
    database: process.env.DATABASE || 'umkm_db'
})

connectionPool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL database:')
        console.error(err)
        return
    }
    console.log('Connected to MySQL database.')
})

module.exports = { connectionPool }