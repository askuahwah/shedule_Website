const mongoose = require('mongoose');

const dayThreeSchema = new mongoose.Schema({
  name: String,
  startTime: String,
  endTime: String,
  data: String,
  venue: String,
  artists: String,
});

const DayThreeEvents = mongoose.model('daythrees', dayThreeSchema);

module.exports = DayThreeEvents;
