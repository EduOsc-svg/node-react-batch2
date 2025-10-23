require('dotenv').config()
const mysql = require('mysql2')

// Prefer explicit DB_ prefixed env vars to avoid colliding with OS vars like USER
const host = process.env.host 
const user = process.env.user
const password = process.env.password
const database = process.env.database

// Helpful runtime check so the developer knows which values are missing
if (!user || !database) {
    console.error('\n[db.js] Missing database credentials. Please create a .env file based on .envExample and set DB_USER, DB_PASSWORD (if any) and DB_NAME.')
    console.error('Resolved values:', { host, user: user || '<EMPTY>', database: database || '<EMPTY>' })
    // Do not silently continue with empty credentials; throw to fail fast during development
    // If you want the app to keep running even when DB is not configured, remove the next line.
    throw new Error('Database credentials not provided')
}

const connectionPool = mysql.createPool({
    host,
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

connectionPool.getConnection(function(err) {
    if (err) {
        console.error('[db.js] MySQL connection error:')
        console.error(err)
        throw err
    }
    console.log('[db.js] MySQL pool connected.')
})

module.exports = { connectionPool }