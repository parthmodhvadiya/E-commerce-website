const userService = require('../services/user.services');
const CartItem = require('../models/cartItem.model');

async function updateCartItem(userId, CartItemId,cartItemData)
{
    try {
        const item = await findCartItemById(CartItemId);
        if(!item)
        {
            throw new Error("cart item not found with id",CartItemId);
        }
        const user = await userService.findById(item.userId);

        if(!user)
        {
            throw new Error("user not found with id",userId);
        }

        if(userId.toString()===userId.toString())
        {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity*item.price;
            item.discountedPrice = item.quantity*item.discountedPrice;
            const updatedCartItem = await item.save();
            return updatedCartItem;
        }
        else
        {
            throw new Error("You can't updated this cart item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeCartItem(userId,CartItemId)
{
    const cartItem = await findCartItemById(CartItemId);
    const user = await userService.findById(userId);
    if(user._id.toString()===cartItem.userId.toString())
    {
        await CartItem.findByIdAndDelete(cartItem._id);
    }
    else
    {
        throw new Error("you can't remove another's item");
    }
}

async function findCartItemById(cartItemId)
{
    const cartItem = await CartItem.findOne({product:cartItemId}).populate('product');
    if(cartItem)
    {
        return cartItem;
    }
    else
    {
        throw new Error("cartItem not found with id :"+cartItemId);
    }
}

module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}