const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SchemaCategory = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  creatAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("category", SchemaCategory);
