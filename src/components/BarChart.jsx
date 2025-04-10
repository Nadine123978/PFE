import React, { useState } from "react";

const eventsData = [
  {
    id: 1,
    title: "Art Exhibition",
    category: "Art",
    date: "2025-04-10",
    image: "art_exhibition.jpg",
  },
  {
    id: 2,
    title: "Music Festival",
    category: "Music",
    date: "2025-04-15",
    image: "music_festival.jpg",
  },
  {
    id: 3,
    title: "Tech Conference",
    category: "Technology",
    date: "2025-04-20",
    image: "tech_conference.jpg",
  },
];

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Gallery</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "14px",
            marginRight: "10px",
            width: "300px",
          }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "10px", fontSize: "14px" }}
        >
          <option value="">All Categories</option>
          <option value="Art">Art</option>
          <option value="Music">Music</option>
          <option value="Technology">Technology</option>
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={event.image}
              alt={event.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{event.title}</h3>
            <p>{event.category}</p>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
