const mongoose = require('mongoose');

const dayTwoSchema = new mongoose.Schema({
  name: String,
  startTime: String,
  endTime: String,
  data: String,
  venue: String,
  artists: String,
});

const DayTwoEvent = mongoose.model('daytwos', dayTwoSchema);

module.exports = DayTwoEvent;
