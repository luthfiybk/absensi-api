const {Pool} = require('pg')

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'absensi',
    password: 'password',
    port: 5432
})

module.exports = pool