const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post } = require('../models');
const router = express.Router();

//uploads 폴더체크
try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

//Image
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + new Date().getTime() + ext);
    },
    limits: { fileSize: 20 * 1024 * 1024 },
  }),
});
router.post('/images', upload.array('image'), (req, res, next) => {
  res.json(req.files.map((v) => v.filename));
});

//글쓰기
router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
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
