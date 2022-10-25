const express = require('express');
const { Post } = require('../models');
const router = express.Router();

//글쓰기
router.post('/', async (req, res, next) => {
  try {
    // console.log(req.body);
    const post = await Post.create({
      applyName: req.body.applyName,
      birth: req.body.birth,
      phone: req.body.phone,
      address: req.body.address,
      content: req.body.content,
    });
    res.status(201).json(post);
    // res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
