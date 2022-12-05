const express = require('express');
const router = express.Router();

const { User } = require('../models');

// 회원가입
router.post('/', async (req, res, next) => {
  try {
    const user = await User.create({
      userid: req.body.userid,
      password: req.body.password,
      email: req.body.email,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
