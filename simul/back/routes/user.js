const express = require('express');
const router = express.Router();

// SignUp
router.post('/', (req, res, next) => {
  res.send('/user');
});

module.exports = router;
