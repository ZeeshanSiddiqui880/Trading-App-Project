const mongoose = require("mongoose");
const { HoldingsSchema } = require("../Schemas/HoldingsSchema.js");

const HoldingsModel = new mongoose.model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
