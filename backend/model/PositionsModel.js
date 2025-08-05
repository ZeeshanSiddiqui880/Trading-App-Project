const mongoose = require("mongoose");
const { PositionsSchema } = require("../Schemas/PositionsSchema");

const PositionsModel = new mongoose.model("position", PositionsSchema);

module.exports = { PositionsModel };