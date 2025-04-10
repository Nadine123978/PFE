import React from "react";

const eventsData = [
  {
    id: 1,
    title: "Champions League Screening Night",
    category: "Sport",
    location: "SkyDome Stadium, Toronto, ON",
    date: "Apr 20, 2029",
    price: "$30",
  },
  {
    id: 2,
    title: "Culinary Delights Festival",
    category: "Food & Culinary",
    location: "Gourmet Plaza, San Francisco, CA",
    date: "Mar 3, 2029",
    price: "$40",
  },
  {
    id: 3,
    title: "Artistry Unveiled: Modern Art Expo",
    category: "Fashion",
    location: "Vogue Hall, Los Angeles, CA",
    date: "Mar 10, 2029",
    price: "$110",
  },
];

const EventsSection = () => {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>All Events</h1>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "14px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View All Events
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {eventsData.map((event) => (
          <div
            key={event.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "15px",
              textAlign: "left",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "5px 10px",
                backgroundColor: "#007BFF",
                color: "white",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            >
              {event.category}
            </span>
            <h2 style={{ fontSize: "18px", margin: "10px 0" }}>
              {event.title}
            </h2>
            <p style={{ color: "#555", margin: "5px 0" }}>
              Location: {event.location}
            </p>
            <p style={{ color: "#555", margin: "5px 0" }}>Date: {event.date}</p>
            <p style={{ color: "#555", margin: "5px 0" }}>
              Price: {event.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
