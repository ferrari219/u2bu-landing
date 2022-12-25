const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.post('/', (req, res, next) => {
  try {
    const post = Post.create({
      applyName: req.body.applyName,
    });
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
