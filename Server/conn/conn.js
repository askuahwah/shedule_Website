const mongoose = require("mongoose");

const DB =
  "mongodb+srv://moodindigo:moodindigo321@cluster0.wrud6bu.mongodb.net/Testing";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log("No Connection");
  });

