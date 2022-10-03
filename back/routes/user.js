const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User } = require('../models');
const router = express.Router();

//로그인
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) return res.status(401).send(info.reason);
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserPassword = await User.findOne({
        where: { id: user.userid },
        attributes: {
          exclude: ['password'],
        },
        include: [],
      });
      return res.status(200).json(fullUserPassword);
    });
  })(req, res, next);
});

//회원가입
router.post('/signup', async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // console.log(req.body);
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
