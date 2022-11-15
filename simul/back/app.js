const express = require('express');
const app = express();
const port = 3065;

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

// db연결
const db = require('./models');
db.sequelize.sync().then(() => {
  console.log('db연결 성공');
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} server is running on port`);
});
