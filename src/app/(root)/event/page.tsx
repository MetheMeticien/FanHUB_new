"use client";

import EventCard from "./components/EventCard";
import FilterBox from "./components/Filter/FilterBox";
import Events from "~/public/jsons/events/events.json";

export default function EventsPage() {
  // Use the events data from the JSON file
  const events = Events;

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
            {events.map((event) => (
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
            <FilterBox />
          </div>
        </div>
      </div>

      {/* FilterBox for Mobile */}
      <div className="lg:hidden mt-8">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Filter Events</h2>
        <p className="text-sm text-gray-400 mb-6">
          Narrow down your search by date, time, and location.
        </p>
        <FilterBox />
      </div>
    </div>
  );
}