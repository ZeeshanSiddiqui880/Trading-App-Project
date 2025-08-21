const { UsersModel } = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.SECRET, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await UsersModel.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};

module.exports.VerifyToken = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};
