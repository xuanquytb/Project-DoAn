const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SchemaCustomer = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "role",
  },
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    require: true,
  },
  totalSpends: {
    type: String,
    default: 0,
  },
  totalOrder: {
    type: Int32,
    default: 0,
  },
  key: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("customer", SchemaCustomer);
