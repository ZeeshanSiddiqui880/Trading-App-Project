const { UsersModel } = require("../model/UserModel");

const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
      console.log(existingUser);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UsersModel.create({
      email,
      password: hashedPassword,
      username,
      createdAt,
    });
    const token = createSecretToken(user._id);
    res.status(201).json({
      success: true,
      message: "User signed up successfully",
      token,
      user: {
        email: user.email,
        username: user.username,
      },
    });
    next();
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required", success: false });
    }
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }
    const token = createSecretToken(user._id);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      user: {
        email: user.email,
        username: user.username,
      },
    });
    next();
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
