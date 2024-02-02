const mongoose = require('mongoose');

const dayFourSchema = new mongoose.Schema({
  name: String,
  startTime: String,
  endTime: String,
  data: String,
  venue: String,
  artists: String,
});

const DayFourEvents = mongoose.model('dayfours', dayFourSchema);

module.exports = DayFourEvents;
