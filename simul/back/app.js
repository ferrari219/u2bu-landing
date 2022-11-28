const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const port = 3065;

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

dotenv.config();

//DB연결
const db = require('./models');
db.sequelize
  // .sync()
  .sync({ force: true })
  .then(() => {
    console.log('DB연결 성공');
  });

//cors
app.use(
  cors({
    origin: 'http://localhost:3060',
    credentials: true,
  })
);
//multipart/form-data
app.use('/', express.static(path.join(__dirname, 'uploads')));

//formData
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} server is running on port`);
});
