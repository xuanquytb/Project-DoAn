const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SchemaProduct = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  idCategory: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  hide: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
  },
  price: {
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

module.exports = mongoose.model("product", SchemaProduct);
