const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("admins", adminSchema);
