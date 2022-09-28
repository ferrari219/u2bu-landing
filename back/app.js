const express = require('express');
const app = express();
const userRouter = require('../back/routes/user');
const port = 3065;

const db = require('./models');
db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} 실행중`);
});
