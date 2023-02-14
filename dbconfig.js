const { Pool } = require('pg')

const connectionLocal = {
  user: 'postgres',
  host: 'localhost',
  database: 'railway',
  password: 'postgres',
  port: 5432,
}

const connectionString = 'postgresql://postgres:Hf6fdE6UzFYbkL44NBb9@containers-us-west-118.railway.app:6551/railway'

const connectionProduction = {
  connectionString: connectionString
}

const pool = new Pool(connectionProduction)
// const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionLocal) // This makes it so fellows don't have to change the Pool every time they push to GitHub.

module.exports = pool
