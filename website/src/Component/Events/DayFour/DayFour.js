// EventTable.js
import React, { useState, useEffect } from "react";
import style from "../Event.module.css";
import AddedEventsTable from "../Component/AddedEvent";

const EventTable = () => {
  const [events, setEvents] = useState([]);
  const [addedEvents, setAddedEvents] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/dayfour/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const hasTimeConflict = (newEvent) => {
    return addedEvents.some((addedEvent) => {
      const startConflict =
        newEvent.date === addedEvent.date &&
        (newEvent.startTime >= addedEvent.startTime &&
          newEvent.startTime < addedEvent.endTime);

      const endConflict =
        newEvent.date === addedEvent.date &&
        (newEvent.endTime > addedEvent.startTime &&
          newEvent.endTime <= addedEvent.endTime);

      return startConflict || endConflict;
    });
  };

  const handleAddButtonClick = (eventId) => {
    const addedEvent = events.find((event) => event.id === eventId);

    if (addedEvent && !hasTimeConflict(addedEvent)) {
      setAddedEvents((prevAddedEvents) => [...prevAddedEvents, addedEvent]);
      setDisabledButtons((prevDisabledButtons) => [
        ...prevDisabledButtons,
        eventId,
      ]);
    } else {
      window.alert("Event clashes with existing events.");
      console.log(`Time conflict for event with ID ${eventId}`);
    }
  };

  const handleRemoveButtonClick = (eventId) => {
    setAddedEvents((prevAddedEvents) =>
      prevAddedEvents.filter((event) => event.id !== eventId)
    );

    setDisabledButtons((prevDisabledButtons) =>
      prevDisabledButtons.filter((id) => id !== eventId)
    );
  };

  return (
    <div>
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
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.startTime}</td>
                <td>{event.endTime}</td>
                <td>{event.date}</td>
                <td>{event.venue}</td>
                <td>
                  {event.artists ? event.artists.join(", ") : "No artist"}
                </td>
                <td>
                  <button
                    className={style.table_button}
                    onClick={() => handleAddButtonClick(event.id)}
                    disabled={disabledButtons.includes(event.id)}
                  >
                    Add Event
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddedEventsTable
        addedEvents={addedEvents}
        handleRemoveButtonClick={handleRemoveButtonClick}
      />
    </div>
  );
};

export default EventTable;
