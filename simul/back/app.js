const express = require('express');
const app = express();
const cors = require('cors');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const prod = process.env.NODE_ENV === 'production';
const port = prod ? process.env.PORT : 3065;

//DB연결
const db = require('./models');
db.sequelize
  .sync({ force: true })
  // .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

//미들웨어
app.use(
  cors({
    origin: 'http://localhost:3060',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`${port} is running`);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} is running`);
});
