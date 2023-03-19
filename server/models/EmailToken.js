const { Schema, model } = require("mongoose");

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, Default: Date.now(), expires: 3600 },
});

module.exports = model("tokens", tokenSchema);
