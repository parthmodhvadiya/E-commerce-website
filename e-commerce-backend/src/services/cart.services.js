const Cart = require('../models/cart.model');
const CartItem = require('../models/cartItem.model');
const Product = require('../models/product.model');


const createCart= async (user)=>
{
    try {
    const cart = new Cart({user});
    const createCart = await cart.save();
    return createCart;   
    } catch (error) {
        throw new Error(error.message);
    }
}

async function findUserCart(userId){
    try {
        let cart = await Cart.findOne({user:userId});
        let CartItems = await CartItem.find({cart:cart._id}).populate('product');
        cart.cartItems = CartItems;
        let totalPrice = 0;
        let totalDiscountedPrice =0;
        let totalItem=0;

        for(let CartItem in cart.cartItems)
        {
            totalPrice+=CartItem.price;
            totalDiscountedPrice +=CartItem.discountedPrice;
            totalItem+= CartItem.quantity;
        }

        cart.totalDiscountedPrice = totalDiscountedPrice;
        cart.totalPrice = totalPrice;
        cart.totalItems = totalItem;

        return cart;

    } catch (error) {
        throw new Error(error.message);
    }
}

async function addCartItem(userId,req){
    try {
        const cart = await Cart.findOne({user:userId});
        const product = await Product.findOne({_id:req.productId});
        const isPresent = await CartItem.findOne({cart:cart._id,product:product._id,userId});
        if(!isPresent)
        {
            const cartItem = new CartItem({
                product:product._id,
                cart:cart._id,
                userId,
                quantity:1,
                price:product.price,
                discountPrice:product.discountedPrice,
                size:req.size
            })
            console.log(cartItem);
            const createdCartItem = await cartItem.save();
            Cart.cartItems.push(createdCartItem);
            await Cart.save();
            console.log('heello');
            return "Item added to cart";
        }
    } catch (error) {
        throw new Error(err.message);
    }
}

module.exports = {createCart,addCartItem,findUserCart};