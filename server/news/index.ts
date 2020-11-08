import express from 'express';
const ctrl = require('./newsController');
const router = express.Router();

router.get('/', ctrl.getAll).get('/category', ctrl.getByCategory);


module.exports={path: '/news_portal', router};
