"use client"; // Add this directive if using Next.js App Router

import { useState } from "react";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "~/convex/_generated/api"; // Adjust the import based on your Convex setup

export default function EventCard({
  event_pic,
  title,
  area,
  start_time,
  end_time,
  interested_people_count,
}) {
  const [isInterested, setIsInterested] = useState(false);
  const createChat = useMutation(api.chats.createChat); // Convex mutation to create a chat

  // Format the date and time
  const startDate = new Date(start_time).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const startTime = new Date(start_time).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const endTime = new Date(end_time).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Handle Interested Click
  const handleInterestedClick = async () => {
    setIsInterested((prev) => !prev);

    if (!isInterested) {
      try {
        await createChat({ name: title }); // Create a chat with the event name
        console.log(`Chat created for event: ${title}`);
      } catch (error) {
        console.error("Error creating chat:", error);
      }
    }
  };

  return (
    <div className="flex w-full h-40 bg-[#202020] rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="w-1/3 h-full relative rounded-l-lg overflow-hidden">
        <Image
          src={event_pic}
          alt="Event Image"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content Section */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        {/* Top Section: Title and Location */}
        <div>
          <h2 className="text-lg font-bold text-gray-200">{title}</h2>
          <h5 className="text-sm opacity-80 font-medium text-gray-400">
            {area}
          </h5>
        </div>

        {/* Bottom Section: Date, Time, and Buttons */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h2 className="text-sm font-medium text-gray-400">{startDate}</h2>
            <h5 className="text-sm font-medium text-gray-400">
              {startTime} - {endTime}
            </h5>
            <p className="text-xs text-gray-400 mt-1">
              {interested_people_count.toLocaleString()} interested
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleInterestedClick}
              className={`rounded-md font-semibold px-3 py-1 transition-colors mr-2 ${
                !isInterested
                  ? "bg-gray-600 text-gray-200 hover:bg-gray-500" // Not Interested state
                  : "bg-emerald-600 text-gray-800 hover:bg-emerald-500" // Interested state
              }`}
            >
              {!isInterested ? "Not Interested" : "Interested"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
