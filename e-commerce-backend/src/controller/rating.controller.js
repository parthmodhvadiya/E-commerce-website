const ratingService = require('../services/review.service')

const createRating = async (req,res)=>
{
    const user = req.user;
    try {
        const review = await ratingService.createRating(user,req.body);
        return res.status(200).send(review);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const getAllRating= async (req,res)=>
{
    const productId = req.params.productId;
    try {
        const reviews = await ratingService.getAllRating(productId);
        return res.status(200).send(reviews);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports = {
    getAllRating,
    createRating
}