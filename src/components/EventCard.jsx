import React from "react";

const EventCard = ({
  category,
  title,
  date,
  time,
  location,
  price,
  progress,
  image,
  status,
}) => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden w-full max-w-xs">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full font-medium text-slate-800">
          {category}
        </span>
        <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          {status}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">
          {date} – {time}
        </p>
        <p className="text-sm text-slate-500">{location}</p>

        <div className="mt-4">
          <div className="w-full h-2 bg-slate-200 rounded-full">
            <div
              className="h-full bg-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-slate-600 mt-1">
            <span>{progress}%</span>
            <span className="font-semibold text-purple-600">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
