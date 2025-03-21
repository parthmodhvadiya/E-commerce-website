const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    reviews:
    {
        type:String,
        required:true
    },
    product:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    },
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    createdAt:
    {
        type:Date,
        default:Date.now()
    }
});
const Reviews = mongoose.model('review',reviewSchema);
module.exports = Reviews;