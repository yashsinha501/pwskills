const express = require('express');
const app = express();

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ random: randomNumber });
});

let port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});