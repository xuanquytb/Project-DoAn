const mongodb = require("mongoose");

const Schema = mongodb.Schema;

const SchemaRole = new Schema({
  nameRole: {
    type: String,
    require: true,
    unique: true,
    enum: ["Admin", "Customer"],
  },
  description: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = mongodb.model("role", SchemaRole);
