const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwtProvider = require("../config/jwtProvider");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("user already exist with email:", email);
    }

    password = await bcrypt.hash(password, 8);
    const user = await User.create({ firstName, lastName, email, password,role:"user" });
    console.log("created user", user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findById = async (userId) => {
  try {
    // const user = await User.findById(userId).populate("addresses");
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("user not found with ID", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found with email", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByToken = async (token) => {
  try {
    const userId = await jwtProvider.getUserIdFromToken(token);
    const user = User.findById(userId);
    if (!user) {
      throw new Error("user not found with email", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findAllUser = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findAllUser,
  findUserByEmail,
  findUserByToken,
  findById,
};
