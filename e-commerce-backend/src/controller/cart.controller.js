const cartService = require("../services/cart.services");

const findUserCart = async (req, res) => {
  const user = await req.user;
  try {
    const cart = await cartService.findUserCart(user.id);
    console.log(cart);
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const addItemToCart = async (req, res) => {
  const user = await req.user;
  try {
    await cartService.addCartItem(user.id, req.body);
    return res.status(200).send({message:"Your Item Successfully Added"});
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { findUserCart, addItemToCart };
