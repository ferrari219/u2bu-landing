const express = require('express');
const app = express();
const port = 3065;

app.use('/post', (req, res, next) => {
  res.json('hello');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
