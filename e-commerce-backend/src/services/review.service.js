const productService = require('./product.services');
const Reveiw = require('../models/reviews.model');

async function createReview(reqData,user) {
    const product = await productService.findProductById(reqData.productId);

    const review = new Review({
        user:user._Id,
        product:product._id,
        review:reqData.review,
        createdAt: new Date()
    })
    await product.save();
    return await review.save();
}

async function getAllReviews(productId) {
    const product = await productService.findProductById(productId);
    return await Review.find({product:product._id}).populate('user');
}

module.exports = {createReview,getAllReviews};