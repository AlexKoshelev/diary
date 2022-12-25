const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    sex: { type: String, enum: ["male", "female"] },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Trainers", schema);
