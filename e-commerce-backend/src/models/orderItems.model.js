const mongoose = require('mongoose')

const orderItemsSchema = mongoose.Schema({
    product:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    size:
    {
        type:String,
    },
    quantity:
    {
        type:Number,
        required:true
    },
    price:
    {
        type:Number,
        required:true
    },
    discountPrice:
    {
        type:Number,
        required:true
    },
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required:true
    },
    delivary:
    {
        type:Date
    }
})
const OrderItems = mongoose.model('orderItems',orderItemsSchema);
module.exports = OrderItems; 