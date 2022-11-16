const express = require('express');
const app = express();
const port = 3065;

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

//DB연결
const db = require('./models');
db.sequelize
  // .sync()
  .sync({ force: true })
  .then(() => {
    console.log('DB연결 성공');
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} server is running on port`);
});
