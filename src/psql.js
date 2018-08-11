let { Pool } = require('pg')

let connectionString = process.env.DATABASE_URL
let pool = new Pool({ connectionString })

module.exports = pool
