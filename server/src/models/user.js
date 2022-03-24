const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SchemaUser = new Schema({
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
});

module.exports = mongoose.model("user", SchemaUser);
