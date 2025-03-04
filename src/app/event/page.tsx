"use client";

import "./page.css";
import EventCard from "./components/EventCard";
import { useState } from "react";

export default function EventPage() {
  const [selected, setSelected] = useState(null); // Default is None

  const handleClick = (option:any) => {
    // If the clicked option is already selected, unselect it (set to null)
    if (selected === option) {
      setSelected(null);
    } else {
      // Otherwise, select the new option
      setSelected(option);
    }
  };

  return (
    <div className="event">
      {/* <div className="left-bar">
        gfgfgfg
      </div> */}
      <div className="main-section sm:px-24 xl:px-48">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-center bg-[#202020] mx-20 mt-10 p-4 rounded-lg">
            <h1 className="font-bold text-3xl text-gray-400">Explore Events</h1>
            <h1 className="text-sm text-semibold text-gray-500">
              Find out about Events and buy Tickets anytime
            </h1>
          </div>
          <div className="flex gap-2 text-center bg-[#202020] mx-20 p-4 rounded-lg">
            <button
              className={`px-2 py-1 min-w-16 rounded-md font-semibold transition-colors duration-200 ${
                selected === "Top"
                  ? "bg-green-700 text-gray-900" // Selected style
                  : "bg-[#545353] hover:bg-gray-500 text-gray-900" // Default style
              }`}
              onClick={() => handleClick("Top")}
            >
              Top
            </button>
            <button
              className={`px-2 py-1 min-w-16 rounded-md font-semibold transition-colors duration-200 ${
                selected === "Following"
                  ? "bg-green-700 text-gray-900" // Selected style
                  : "bg-[#545353] hover:bg-gray-500 text-gray-900" // Default style
              }`}
              onClick={() => handleClick("Following")}
            >
              Following
            </button>
          </div>
          <div className="min-w-96 mx-20 p-4 grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 border-2 border-[#545353] rounded-xl">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
}