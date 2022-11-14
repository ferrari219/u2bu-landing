const express = require('express');
const app = express();
const port = 3065;

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} server is running on port`);
});
