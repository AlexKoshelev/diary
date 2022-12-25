const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
    },
    _id: {
      type: String,
    },
    phone: {
      type: String,
    },
    trainerId: {
      type: Schema.Types.ObjectId,
      ref: "Trainers",
      required: true,
    },
    params: {
      age: { type: String },
      arm: { type: String },
      bust: { type: String },
      growth: { type: String },
      hips: { type: String },
      leg: { type: String },
      waist: { type: String },
      weight: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Clients", schema);
