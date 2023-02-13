const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./dbconfig')
const PORT = 3001;

/// Middleware ///
app.use(cors());
app.use(express.json());

/// Create todo
app.get('/', (req,res) => {
    res.send("hello")
})

app.get('/todos', async (req,res) => {
    try{
        const allTodos = await pool.query("SELECT * from todo")
        res.send(allTodos.rows)
        console.log(allTodos)

    }

    catch (err) {
        console.error(err.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} `)
})

