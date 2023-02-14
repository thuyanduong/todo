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
    }
    catch (err) {
        console.error(err.message)
    }
})

app.get('/todos/:id', async (req,res) => {
    try{
        const allTodos = await pool.query("SELECT * from todo WHERE id = $1", [req.params.id])
        res.send(allTodos.rows[0])
    }
    catch (err) {
        console.error(err.message)
    }
})

app.post('/todos', async (req,res) => {
    
    try{
        const {task} = req.body
        const allTodos = await pool.query("INSERT INTO todo(task) VALUES($1) RETURNING *", [task])
        res.send("it works")
    }
    catch (err) {
        console.error(err.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} `)
})

