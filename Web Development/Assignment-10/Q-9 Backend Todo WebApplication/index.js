const express = require('express');
const app = express();
app.use(express.json());

// In-memory storage for the todos (replace with a database in production)
// Initial dummy data
let todos = [
    { id: 1, task: 'Finish homework' },
    { id: 2, task: 'Go grocery shopping' },
    { id: 3, task: 'Walk the dog' }
  ];
  

// GET / - Get all todos created by the user
app.get('/', (req, res) => {
  res.json(todos);
});

// POST /add - Create a new todo
app.post('/add', (req, res) => {
  const { task } = req.body;

  // Validate if task is provided
  if (!task) {
    return res.status(400).json({ error: 'Task is required.' });
  }

  // Create a new todo object
  const newTodo = {
    id: todos.length + 1,
    task,
  };

  // Add the todo to the list
  todos.push(newTodo);

  res.json({ msg: 'Todo created successfully', data: todos });
});

// PUT /update/:id - Update a todo
app.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;

  // Find the todo by id
  const todo = todos.find((todo) => todo.id === id);

  // If the todo doesn't exist, return an error
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found.' });
  }

  // Update the task
  todo.task = task;

  res.json({ msg: 'Todo updated successfully', data: todos });
});

// DELETE /delete/:id - Delete a todo
app.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Filter out the todo with the specified id
  todos = todos.filter((todo) => todo.id !== id);

  res.json({ msg: 'Todo deleted successfully', data: todos });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});