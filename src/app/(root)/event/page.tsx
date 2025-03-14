"use client";

import { useState } from "react";
import EventCard from "./components/EventCard";
import FilterBox from "./components/Filter/FilterBox";
import Events from "~/public/jsons/events/events.json";

export default function EventsPage() {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    time: "",
    location: "",
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const applyFilters = () => {
    // Filter logic will be applied here
    console.log("Filters Applied:", filters);
  };

  // Filter events based on the filter criteria
  const filteredEvents = Events.filter((event) => {
    const eventDate = new Date(event.start_time);
    const startDate = filters.startDate ? new Date(filters.startDate) : null;
    const endDate = filters.endDate ? new Date(filters.endDate) : null;
  
    // Safely extract time from event.start_time
    const eventTime = event.start_time ? event.start_time.split("T")[1]?.substring(0, 5) : null;
  
    return (
      (!startDate || eventDate >= startDate) &&
      (!endDate || eventDate <= endDate) &&
      (!filters.time || eventTime === filters.time) &&
      (!filters.location || event.area.toLowerCase().includes(filters.location.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-[#121212] p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section: Events */}
        <div className="flex-1">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-200">Upcoming Events</h1>
            <p className="text-lg text-gray-400 mt-2">
              Discover exciting events near you or around the world.
            </p>
          </div>

          {/* Scrollable Events Container */}
          <div className="flex flex-col gap-6 h-[calc(100vh-200px)] overflow-y-auto">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id} // Ensure each event has a unique ID
                event_pic={event.event_pic}
                title={event.title}
                area={event.area}
                start_time={event.start_time}
                end_time={event.end_time}
                interested_people_count={event.interested_people_count}
              />
            ))}
          </div>
        </div>

        {/* Right Section: FilterBox */}
        <div className="w-96 hidden lg:block">
          <div className="pt-24">
            <FilterBox
              filters={filters}
              onFilterChange={handleFilterChange}
              onApplyFilters={applyFilters}
            />
          </div>
        </div>
      </div>

      {/* FilterBox for Mobile */}
      <div className="lg:hidden mt-8">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Filter Events</h2>
        <p className="text-sm text-gray-400 mb-6">
          Narrow down your search by date, time, and location.
        </p>
        <FilterBox
          filters={filters}
          onFilterChange={handleFilterChange}
          onApplyFilters={applyFilters}
        />
      </div>
    </div>
  );
}