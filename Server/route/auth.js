const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());

const DayOneEvent = require("../models/Dayone");
const DayTwoEvent = require("../models/Daytwo");
const DayThreeEvent = require("../models/Daythree");
const DayFourEvents = require("../models/Dayfour");

require("../conn/conn");

app.use(express.json());

app.get("/dayone/events", async (req, res) => {
  try {
    const events = await DayOneEvent.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/daytwo/events", async (req, res) => {
  try {
    const events = await DayTwoEvent.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/daythree/events", async (req, res) => {
  try {
    const events = await DayThreeEvent.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/dayfour/events", async (req, res) => {
  try {
    const events = await DayFourEvents.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});   

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
