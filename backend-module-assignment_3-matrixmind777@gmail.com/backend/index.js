const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configure middleware
app.use(bodyParser.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'todos_db'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create a table for Todos
db.query('CREATE TABLE IF NOT EXISTS todos (id INT AUTO_INCREMENT PRIMARY KEY, task VARCHAR(255))', (err) => {
  if (err) {
    console.error('Error creating todos table:', err.message);
  }
});

// Routes

// Get all todos
app.get('/todos', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Create a new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;

  if (!task) {
    res.status(400).json({ error: 'Task is required' });
    return;
  }

  db.query('INSERT INTO todos (task) VALUES (?)', [task], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Todo added successfully', id: results.insertId });
  });
});

// Update a todo
app.put('/todos/:id', (req, res) => {
  const taskId = req.params.id;
  const { task } = req.body;

  if (!task) {
    res.status(400).json({ error: 'Task is required' });
    return;
  }

  db.query('UPDATE todos SET task = ? WHERE id = ?', [task, taskId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    res.json({ message: 'Todo updated successfully' });
  });
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const taskId = req.params.id;

  db.query('DELETE FROM todos WHERE id = ?', [taskId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    res.json({ message: 'Todo deleted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
