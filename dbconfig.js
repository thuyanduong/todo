const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:f1ynjwcZwvCVSbPqlFAH@containers-us-west-32.railway.app:7290/railway'

const pool = new Pool({
  connectionString
 })
 
 
 
 module.exports = pool