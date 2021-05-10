const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prayerSchema = new Schema({
  name: { type: String, required: true },
  detail: String,
  date: { type: Date, default: Date.now }
});

const Prayer = mongoose.model("Prayer", prayerSchema);

module.exports = Prayer;
