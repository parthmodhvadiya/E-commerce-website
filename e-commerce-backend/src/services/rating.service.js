const Rating = require('../models/rating.model');
const productService = require('./product.services');

async function createRating(reqData,user)
{  
    const product = await productService.findProductById(reqData.productId);

    const rating = new Rating({
        user:user._id,
        product:product._id,
        rating:reqData.rating,
        createdAt:new Date()
    })

    return await rating.save();
}

async function getProductRating(productId)
{
    const product = await productService.findProductById(productId);
    return await Rating.find({product:product._id});
}

module.exports = {createRating,getProductRating}