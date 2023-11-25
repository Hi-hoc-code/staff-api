const Pool = require('pg').Pool
const pool = process.env.ENVIRONMENT === 'develop' ? new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'staff',
    password: 'mysecretpassword',
    port: 5432,
}) : new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        require: true,
    },
})

module.exports = { pool }
