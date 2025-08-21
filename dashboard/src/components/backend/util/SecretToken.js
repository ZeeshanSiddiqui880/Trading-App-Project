require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    // expiresIn: 3 * 24 * 60 * 60,  //7days
    expiresIn: 2 * 60 * 60, //2hours
  });
};
