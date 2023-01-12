const express = require('express');
const { Post } = require('../models');
const router = express.Router();

router.post('/post', async (req, res, next) => {
  try {
    const post = await Post.create({
      applyName: req.body.applyName,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
