const express = require('express');
const router = express.Router();
const { Post, Image } = require('../models');

//글쓰기
router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create({
      applyName: req.body.applyName,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
