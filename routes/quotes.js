import express from 'express';

var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('List of quotes');
});

export default router;
