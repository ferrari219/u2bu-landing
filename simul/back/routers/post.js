const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post } = require('../models');
const router = express.Router();

// 폴더 체크
try {
  fs.readdirSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
// 이미지 업로드
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' + new Date().valueOf() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});
router.post('/images', upload.array('image'), (req, res, next) => {
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

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
