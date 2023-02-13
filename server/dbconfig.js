const { Pool } = require('pg')

const pool = new Pool({
   database: 'todo4',
   user:     'postgres',
   password: ''
 })
 
 
 
 module.exports = pool