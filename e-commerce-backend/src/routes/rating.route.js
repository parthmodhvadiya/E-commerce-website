const express = require('express')
const router = express.Router();

const ratingController = require('../controller/rating.controller');
const authenticate = require('../middlewares/authenticate');

router.get('/product/:productId',authenticate,ratingController.getAllRating);
router.post('/create',authenticate,ratingController.createRating);

module.exports = router;