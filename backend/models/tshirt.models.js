const mongoose = require("mongoose");

const tshirtSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true,
      default: "L",
    },

    color: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Tshirt = mongoose.model("Tshirt", tshirtSchema);
module.exports = { Tshirt };
