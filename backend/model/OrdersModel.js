const mongoose = require("mongoose");
const { OrdersSchema } = require("../Schemas/OrdersSchema.js");

const OrdersModel = new mongoose.model("order", OrdersSchema);

module.exports = { OrdersModel };
