const express = require('express');
const { Post, Image } = require('../models');
const router = express.Router();

// Load Post
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Image,
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
