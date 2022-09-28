const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

const userRouter = require('../back/routes/user');
const port = 3065;
dotenv.config();

const db = require('./models');
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
app.use(
  cors({
    origin: 'http://localhost:3060',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} 실행중`);
});
