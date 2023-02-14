const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:Hf6fdE6UzFYbkL44NBb9@containers-us-west-118.railway.app:6551/railway'

const pool = new Pool({
  connectionString
 })
 
 
 
 module.exports = pool