const express = require('express');
const app = express();

let counter = 0;

app.get('/', (req, res) => {
  res.json({ counter });
});

app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

let Port = 5000;
app.listen(Port, () => {
  console.log(`Server is running on port http://localhost:${Port}`);
});