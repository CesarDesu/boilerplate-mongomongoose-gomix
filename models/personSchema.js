const { Schema, model } = require("mongoose");

const personSchema = Schema(
  {
    name: { type: String, require: true },
    age: { type: Number },
    favoriteFoods: [String],
  },
  { timestamps: true }
);

module.exports = model("Person", personSchema);
