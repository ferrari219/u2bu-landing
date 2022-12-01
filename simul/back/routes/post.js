const express = require('express');
const router = express.Router();
const { Post } = require('');

router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create({
      applyName: req.body,
    });
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
