import React from "react";
import EventCard from "../upcomingEvents/upEvents";
//import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Upcoming Event</h3>
        <EventCard />
      </div>
      <div>
        <h3>Customer Review</h3>
      </div>
    </div>
  );
};

export default RightSide;
