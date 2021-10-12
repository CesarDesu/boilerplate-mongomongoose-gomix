const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema(
  {
    name: { type: String, require: true },
    age: { type: Number },
    favoriteFoods: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Person", personSchema);
