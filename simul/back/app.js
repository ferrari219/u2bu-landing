const express = require('express');
const postRouter = require('./routes/post');
const app = express();

const port = 3065;

const db = require('./models');
db.sequelize
  //   .sync()
  .sync({ force: true })
  .then(() => console.log('db 연결 성공'))
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', postRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
