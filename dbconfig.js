const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:3YPdLyslfVLPZObDQQND@containers-us-west-198.railway.app:6206/railway'

const pool = new Pool({
  connectionString
  //  database: 'todo4',
  //  user:     'postgres',
  //  password: ''
 })
 
 
 
 module.exports = pool