const { Pool } = require('pg')

const connectionLocal = {
  user: 'postgres',
  host: 'localhost',
  database: 'railway',
  password: 'postgres',
  port: 5432,
}

const connectionString = 'postgresql://postgres:nSbZS3PdW1fAg89yiM9t@containers-us-west-164.railway.app:7837/railway'

const connectionProduction = {
  connectionString: connectionString
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionLocal) // This makes it so fellows don't have to change the Pool every time they push to GitHub.

module.exports = pool
 
 module.exports = pool