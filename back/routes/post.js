const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post, Image } = require('../models');
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
      done(null, basename + '_' + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});
router.post('/images', upload.array('image'), (req, res, next) => {
  console.log('req.files:', req.files);
  res.json(req.files.map((v) => v.filename));
});

//글쓰기
router.post('/', upload.none(), async (req, res, next) => {
  try {
    console.log('req.body:', req.body);

    const post = await Post.create({
      applyName: req.body.applyName,
      birth: req.body.birth,
      phone: req.body.phone,
      address: req.body.address,
      content: req.body.content,
    });
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        const images = await Promise.all(
          req.body.image.map((image) => Image.create({ src: image }))
        );
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
      ],
    });
    res.status(201).json(fullPost);
    // res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
