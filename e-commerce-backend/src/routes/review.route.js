const express = require('express')
const router = express.Router();

const reviewController = require('../controller/review.controller');
const authenticate = require('../middlewares/authenticate');

router.get('/product/:productId',authenticate,reviewController.getAllReviews);
router.post('/create',authenticate,reviewController.createReview);

module.exports = router;