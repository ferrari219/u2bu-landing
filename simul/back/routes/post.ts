import * as express from 'express';

const router = express.Router();

router.get('/post', (req, res, next) => {
  res.send('/post');
});

export default router;
