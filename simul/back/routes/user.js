const express = require('express');
const router = express.Router();
const { User } = require('../models');

// SignUp
router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.create({
      userid: req.body.userid,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
