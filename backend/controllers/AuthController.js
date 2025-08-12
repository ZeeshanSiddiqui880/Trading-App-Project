const { UsersModel } = require("../model/UserModel");

const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
      console.log(existingUser);
    }

    const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);


    const user = await UsersModel.create({ email, password:hashedPassword, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure : process.env.NODE_ENV === "production",
      sameSite:"Lax"
    });
    console.log(user);
    

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.log(error);
  }
};
