const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:nSbZS3PdW1fAg89yiM9t@containers-us-west-164.railway.app:7837/railway'

const pool = new Pool({
  connectionString
  //  database: 'todo4',
  //  user:     'postgres',
  //  password: ''
 })
 
 
 
 module.exports = pool