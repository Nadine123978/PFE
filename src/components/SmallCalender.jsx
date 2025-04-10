import React, { useState } from "react";

const SmallCalendar = () => {
  const daysInMonth = 31; // Customize for specific months if needed
  const [selectedDate, setSelectedDate] = useState(null);

  const events = {
    10: {
      title: "Tech Panel",
      description: "A discussion on technology trends.",
    },
    15: { title: "Live Concert", description: "An exciting musical evening." },
    20: {
      title: "Fashion Showcase",
      description: "A display of upcoming trends.",
    },
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>March 2029</h2>
      </div>
      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, index) => {
          const day = index + 1;
          const event = events[day];
          return (
            <div
              key={day}
              className={`calendar-day ${
                selectedDate === day ? "selected" : ""
              }`}
              onClick={() => handleDateClick(day)}
            >
              <span>{day}</span>
              {event && <div className="event-indicator">{event.title}</div>}
            </div>
          );
        })}
      </div>
      {selectedDate && events[selectedDate] && (
        <div className="event-details">
          <h3>Event Details</h3>
          <p>{events[selectedDate].description}</p>
        </div>
      )}
    </div>
  );
};

export default SmallCalendar;
