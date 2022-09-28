const express = require("express");
const { User } = require("../models");
const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create({
      userid: req.body.userid,
      password: req.body.password,
      email: req.body.email,
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
