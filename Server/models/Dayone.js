const mongoose = require('mongoose');

const dayOneSchema = new mongoose.Schema({
  name: String,
  startTime: String,
  endTime: String,
  data: String,
  venue: String,
  artists: String,
});

const DayOneEvent = mongoose.model('users', dayOneSchema);

module.exports = DayOneEvent;
