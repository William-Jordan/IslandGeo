const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to My REST API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


let items = [];

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) an item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  items = items.map(item => (item.id === id ? updatedItem : item));
  res.json(updatedItem);
});

// DELETE an item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(item => item.id !== id);
  res.status(204).end();
});
