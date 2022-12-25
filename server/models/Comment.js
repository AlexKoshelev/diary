const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    _id: {
      type: String,
    },
    clientId: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Comment", schema);
