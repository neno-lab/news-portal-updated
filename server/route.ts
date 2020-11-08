import express from 'express';

const news = require('./news');

const router = express.Router();
router.use(news.path, news.router);

module.exports=router;