const orderService = require("../services/order.service");

const createOrder = async (req, res) => {
  const user = await req.user;
  try {
    let createOrder = await orderService.createOrder(user, req.body);
    return res.status(201).send(createOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findOrderById = async (req, res) => {
  const user = await req.user;
  try {
    let order = await orderService.findOrderById(req.params.id);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const orderHistory = async (req, res) => {
  const user = await req.user;
  try {
    let orders = await orderService.userOrderHistory(user._id);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createOrder,
  findOrderById,
  orderHistory,
};
