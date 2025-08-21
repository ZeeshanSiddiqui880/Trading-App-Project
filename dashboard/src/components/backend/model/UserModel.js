const mongoose = require("mongoose");
const { UsersSchema } = require("../Schemas/UsersSchema");

const UsersModel = mongoose.model("user", UsersSchema);

module.exports = { UsersModel };
