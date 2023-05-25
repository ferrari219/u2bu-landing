const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('/user');
});

//Sign up
router.post('/', (req, res, next) => {
  res.json(req.body);
});

module.exports = router;
