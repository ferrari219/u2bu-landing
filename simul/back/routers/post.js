const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  try {
    res.status(200).json('test');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
