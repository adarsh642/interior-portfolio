const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
    unit: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", PhotoSchema);
