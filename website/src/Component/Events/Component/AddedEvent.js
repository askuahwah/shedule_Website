import React, { useState } from "react";
import style from "../Event.module.css";

const AddedEventsTable = ({ addedEvents, handleRemoveButtonClick }) => {

  const [loading, setLoading] = useState(false);

 
  const addToGoogleCalendar = async (event) => {
    try {
     
      setLoading(true);

   
      await loadGoogleAPI();

      
      await authorizeAndAddEvent(event);

     
      setLoading(false);
    } catch (error) {
      console.error("Error adding event to Google Calendar:", error);
     
      setLoading(false);
    }
  };

 
  const loadGoogleAPI = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => {
        console.log("Google API script loaded successfully");
        resolve();
      };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const authorizeAndAddEvent = async (event) => {
    await window.gapi.client.init({
      apiKey: "AIzaSyAvX1rNvNKyqFMAPBdrlkzqd2AWnExiq0A",
      clientId: "659987461657-s81l9i3v997gp2dq4ora269e4cs2leo4.apps.googleusercontent.com",
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: "https://www.googleapis.com/auth/calendar.events",
    });

    const authResult = await window.gapi.auth2.getAuthInstance().signIn();

    if (authResult.isSignedIn.get()) {
      const response = await window.gapi.client.calendar.events.insert({
        calendarId: "primary", 
        resource: {
          summary: event.name,
          description: event.description,
          start: {
            dateTime: event.startTime,
            timeZone: "YourTimeZone",
          },
          end: {
            dateTime: event.endTime,
            timeZone: "YourTimeZone",
          },
        },
      });

      console.log("Event added to Google Calendar:", response.result);
    } else {
      throw new Error("Authorization failed");
    }
  };

  return (
    <div className={style.Dayone_table}>
      <h2>Added Events</h2>
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
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {addedEvents.map((addedEvent, index) => (
            <tr key={index}>
              <td>{addedEvent.id}</td>
              <td>{addedEvent.name}</td>
              <td>{addedEvent.startTime}</td>
              <td>{addedEvent.endTime}</td>
              <td>{addedEvent.date}</td>
              <td>{addedEvent.venue}</td>
              <td>
                {addedEvent.artists
                  ? addedEvent.artists.join(", ")
                  : "No artist"}
              </td>
              <td>
                <button
                  className={style.table_button}
                  onClick={() => {
                    handleRemoveButtonClick(addedEvent.id);
                    // Add the event to Google Calendar when the button is clicked
                    addToGoogleCalendar(addedEvent);
                  }}
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Remove Event"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddedEventsTable;
