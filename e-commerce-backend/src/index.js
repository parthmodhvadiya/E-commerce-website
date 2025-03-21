const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Your Backend is running succesfully" });
});
const authRouters = require("./routes/auth.route");
app.use("/auth", authRouters);

const userRouters = require("./routes/user.route");
app.use("/api/users", userRouters);

const productRoute = require('./routes/product.route');
app.use('/api/products',productRoute);

const adminProductRoute = require('./routes/adminProduct.route');
app.use('/api/admin/products',adminProductRoute);

const cartRoute = require('./routes/cart.route');
app.use('/api/cart',cartRoute);

const cartItemRoute = require('./routes/cartItem.route');
app.use('/api/cart_items',cartItemRoute);

const orderRoute = require('./routes/order.route');
app.use('/api/orders',orderRoute);

const reviewRoute = require('./routes/review.route');
app.use('/api/reviews',reviewRoute);

const ratingRoute = require('./routes/rating.route');
app.use('/api/ratings',ratingRoute);

const adminOrderRoute = require('./routes/adminOrder.route');
app.use('/api/admin/orders',adminOrderRoute);

module.exports = app;
