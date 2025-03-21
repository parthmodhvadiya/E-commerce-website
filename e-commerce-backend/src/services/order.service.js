const Addresses = require("../models/addresses.model");
const cartService = require('../services/cart.services');
const OrderItems = require('../models/orderItems.model');
const Order = require('../models/orders.model');

async function createOrder(user, shipAddresses) {
  let address;
  if (shipAddresses._id) {
    let existAddress = await Addresses.findById(shipAddresses._id);
    address = existAddress;
  } else {
    address = new Addresses(shipAddresses);
    address.user = user;
    await address.save();
    user.address.push(address);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItems({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountPrice: item.discountPrice,
    });
    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }
  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItems,
    shipAddresses: address,
  });
  const saveOrder = await createdOrder.save();
  return saveOrder;
}

async function placeOrder(orderId) {
  const order = await Order.findOrderById(orderId);
  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";
  return await order.save();
}

async function confirmedOrder(orderId) {
  const order = await Order.findOrderById(orderId);
  order.orderStatus = "CONFIRMED";
  return await order.save();
}

async function shipOrder(orderId) {
  const order = await Order.findOrderById(orderId);
  order.orderStatus = "SHIPPED";
  return await order.save();
}

async function deliverOrder(orderId) {
  const order = await Order.findOrderById(orderId);
  order.orderStatus = "DELIVERED";
  return await order.save();
}

async function cancelledOrder(orderId) {
  const order = await Order.findOrderById(orderId);
  order.orderStatus = "CANCELLED";
  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
}

async function userOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders(orderId) {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

async function deleteOrder(orderId) {
  const order = await findOrderById(orderId);
  await order.findByIdAndDelete(order._id);
}

module.exports = {
  createOrder,
  placeOrder,
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelledOrder,
  findOrderById,
  getAllOrders,
  userOrderHistory,
  deleteOrder,
};
