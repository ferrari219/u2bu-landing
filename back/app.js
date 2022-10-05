const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const userRouter = require('../back/routes/user');
const port = 3065;
dotenv.config();

const db = require('./models');
const passportConfig = require('./passport');
db.sequelize
  .sync()
  // .sync({ force: true })
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
passportConfig();

app.use(
  cors({
    origin: 'http://localhost:3060',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} 실행중`);
});
