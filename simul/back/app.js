const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3065;

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

dotenv.config();

const db = require('./models');
db.sequelize
  // .sync()
  .sync({ force: true })
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.use(morgan('dev'));
// CORS
app.use(
  cors({
    origin: 'http://localhost:3060',
    credentials: true,
  })
);
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
