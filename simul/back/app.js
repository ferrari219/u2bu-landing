const express = require('express');
const app = express();

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const prod = process.env.NODE_ENV === 'production';
const port = prod ? process.env.PORT : 3065;

//DB연결
const db = require('./models');
db.sequelize
  .sync({ force: true }) // {force: true}
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.get('/', (req, res) => {
  res.send(`${port} is running`);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} is running`);
});
