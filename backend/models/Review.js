const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // auto createdAt + updatedAt
);

module.exports = mongoose.model("Review", ReviewSchema);
