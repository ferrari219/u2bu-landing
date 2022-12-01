const express = require('express');
const app = express();
const port = 3065;

const postRouter = require('./routes/post');

app.use('/post', postRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
