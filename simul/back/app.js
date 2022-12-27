const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const postRouter = require('./routers/post');

const port = 3065;

dotenv.config();

// DB연결
const db = require('./models');
db.sequelize
  //   .sync()
  .sync({ force: true })
  .then(() => {
    console.log('DB연결 성공');
  })
  .catch(console.error);
//cors
app.use(
  cors({
    origin: 'http://localhost:3060',
    credentials: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터
app.use('/post', postRouter);

app.listen(port, () => {
  console.log(`${port} server start!`);
});
