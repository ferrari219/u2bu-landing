const express = require('express');
const app = express();

const port = 3065;

app.listen(port, () => {
  console.log(`${port} server start!`);
});
