const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    Trainer: {
      type: Schema.Types.ObjectId,
      ref: "Trainers",
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Token", schema);
