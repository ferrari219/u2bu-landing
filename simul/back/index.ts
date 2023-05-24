import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as hpp from 'hpp';
import helmet from 'helmet';

// import { Request, Response, NextFunction } from 'express'; //생략가능
// import postRouter from './routes/post';

import { sequelize } from './models';

dotenv.config();

const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';

const port = prod ? process.env.PORT : 3065;
app.set('port', port);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch((err: Error) => {
    console.error(err);
  });

//미들웨어 영역
if (prod) {
  app.use(hpp());
  app.use(helmet());
  app.use(morgan('combined'));
  app.use(
    cors({
      origin: /grah\.shop$/,
      credentials: true, //반드시 true로 설정-cookie도 브라우저간 통신 허용 필요
    })
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}
app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!, //타입추론시 확신을 못하므로 !로 확신 줄것
    cookie: {
      httpOnly: true,
      secure: false, // https -> true
      domain: prod ? '.grah.shop' : undefined, //prod && '.grah.shop' 해도 동작은 하지만 왼쪽 코드 추천
    },
    name: 'rnbck', //connect.sid 대신 사용할 이름
  })
);

app.get('/', (req, res, next) => {
  res.send(`${port}port is running`);
});

// app.use('/post', postRouter);

app.listen(port, () => {
  console.log(`${port}port is running`);
});
