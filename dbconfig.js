const { Pool } = require('pg')

const connectionLocal = {
  user: 'postgres',
  host: 'localhost',
  database: 'railway',
  password: 'postgres',
  port: 5432,
}

const connectionProduction = {
  connectionString: 'postgresql://postgres:Hf6fdE6UzFYbkL44NBb9@containers-us-west-118.railway.app:6551/railway'
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionLocal) 

module.exports = pool 

