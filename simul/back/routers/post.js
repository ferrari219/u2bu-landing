const express = require('express');
const { Post } = require('../models');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create({
      applyName: req.body.applyName,
    });
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
