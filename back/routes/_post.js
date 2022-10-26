const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const path = require('path');
const fs = require('fs');

const { Post, Image } = require('../models');
const { isNotLoggedIn } = require('./middleware');
const router = express.Router();

//uploads 폴더 체크
try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

//Image
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});
const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'landing-s3-j',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});
// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, 'uploads');
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       const basename = path.basename(file.originalname, ext);
//       done(null, basename + '_' + new Date().getTime() + ext);
//     },
//   }),
//   limits: { fileSize: 20 * 1024 * 1024 },
// });

//Apply Promotion
router.post('/', upload.none(), async (req, res, next) => {
  try {
    //정보재가공
    const iYear = 40;
    let birth = req.body.birth.replace(/[-.]/g, '');
    if (birth.length < 8) {
      if (parseInt(birth.substring(0, 2), 10) < iYear) {
        //2000
        birth = '20'.concat(birth);
      } else {
        birth = '19'.concat(birth);
      }
    }
    const phone = req.body.phone
      .replace(/[-.]/g, '')
      .replace(/(8210|82010)/g, '010');

    //중복응모자 찾기
    const exPhone = await Post.findOne({
      where: {
        phone: phone,
      },
    });
    if (exPhone) {
      return res.status(400).json('중복 응모할 수 없습니다.');
    }

    const post = await Post.create({
      key: phone,
      applyName: req.body.applyName,
      birth: birth,
      phone: phone,
      address: req.body.address,
      content: req.body.content,
      test: req.body.test,
    });
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        //이미지 복수면 image: [test1.png, test2.png]
        const images = await Promise.all(
          req.body.image.map((image) => Image.create({ src: image }))
        );
        await post.addImages(images); //db에 post.images로 들어감
      } else {
        //이미지 단수면 image:
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
  } catch (error) {
    console.error(error);
    next(error);
  }
  //   res.send('/post');
});

router.post('/images', upload.array('image'), (req, res, next) => {
  console.log(req.files);
  // res.json(req.files.map((v) => v.filename));
  res.json(
    // req.files.map((v) => v.location)
    req.files.map((v) => v.location.replace(/\/original\//, '/thumb/')) //lambda thumb
  ); //s3
});

module.exports = router;
