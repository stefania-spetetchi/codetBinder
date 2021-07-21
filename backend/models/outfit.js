const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OutfitSchema = new Schema({
  outfitCategory: '',
  items: [{type: Schema.Types.ObjectId, ref: "Item"}],
  name: '',
  description: '',
  value: '',
  dateToWear: ''
});

module.exports = mongoose.model("Outfit", OutfitSchema);
