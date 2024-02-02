import React, { useState, useEffect } from "react";
import style from "../Event.module.css";

const EventTable = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/dayone/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleAddButtonClick = (eventId) => {
    console.log(`Add button clicked for event with ID ${eventId}`);
  };

  return (
    <div className={style.Dayone_table}>
      <h2>Day One</h2>
      <table>
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Event Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Artists</th>
            <th>Adding</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.startTime}</td>
              <td>{event.endTime}</td>
              <td>{event.date}</td>
              <td>{event.venue}</td>
              <td>{event.artists ? event.artists.join(", ") : "No artist"}</td>
              <td>
                <button className={style.table_button} onClick={() => handleAddButtonClick(event.id)}>
                  Add Event
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
