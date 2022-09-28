const express = require('express');
const router = express.Router();

router.post('/signup', (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
  }
  res.status(200).json('ok');
});

module.exports = router;
