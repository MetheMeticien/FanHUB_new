"use client";

import { useState } from "react";

export default function FilterBox() {
  // State for filter values
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters Applied:", { startDate, endDate, time, location });
    // Add your filter logic here
  };

  return (
    <div className="p-6 bg-[#202020] rounded-lg shadow-lg w-full max-w-md border border-gray-700">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">Filter Events</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Start Date Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 bg-[#2d2d2d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
          />
        </div>

        {/* End Date Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 bg-[#2d2d2d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
          />
        </div>

        {/* Time Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 bg-[#2d2d2d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
          />
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 bg-[#2d2d2d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}