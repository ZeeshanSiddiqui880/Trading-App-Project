const mongoose = require("mongoose");
const { PostionsSchema } = require("../Schemas/PositionsSchema.js");

const PositionsModel = new mongoose.model("holding", PostionsSchema);

module.exports = { PositionsModel };
