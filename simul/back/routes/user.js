const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('/user');
});

//Sign up
router.post('/signup', async (req, res, next) => {
  try {
    //중복여부
    const exUser = await User.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    if (exUser) {
      return res.status(403).json('이미 가입된 아이디입니다.');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await User.create({
      userId: req.body.userId,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
