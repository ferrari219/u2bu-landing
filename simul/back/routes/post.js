const express = require('express');
const router = express.Router();
const { Post, Image } = require('../models');

//AddPost
router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create(
      {
        applyName: req.body.applyName,
        // birth: '20000101',
        // phone: '010-0000-0000',
        // address: '서울',
        // content: req.body.content,
      },
      {
        include: Image,
      }
    );
    console.log(post);
    return res.status(201).json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
