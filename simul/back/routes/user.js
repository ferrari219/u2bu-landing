const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { User } = require('../models');

// 회원가입
router.post('/', async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await User.create({
      userid: req.body.userid,
      password: hashedPassword,
      email: req.body.email,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
