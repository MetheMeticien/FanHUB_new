"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "~/convex/_generated/api";
import Image from "next/image";

interface FilterBoxProps {
  selectedChat: string | null;
  onSelectChat: (id: string | null) => void;
}

export default function FilterBox({ selectedChat, onSelectChat }: FilterBoxProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch chats from the backend
  const chats = useQuery(api.chats.getChats) || [];

  // Filter chats based on search query
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 h-full p-6 bg-[#202020] rounded-xl shadow-lg">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search chats..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 bg-[#2d2d2d] text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Chat List */}
      <div className="flex flex-col gap-4 overflow-y-auto">
        {filteredChats.map((chat) => (
          <div
            key={chat._id}
            onClick={() => onSelectChat(chat._id)}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
              selectedChat === chat._id
                ? "bg-blue-600" // Selected chat background
                : "bg-[#2d2d2d] hover:bg-[#3d3d3d]" // Default and hover background
            }`}
          >
            {/* Chat Image */}
            {/* <div className="relative w-10 h-10">
              <Image
                src={chat.image || "https://via.placeholder.com/150"} // Fallback image
                alt={chat.name}
                fill
                className="rounded-full object-cover"
                unoptimized
              />
            </div> */}

            {/* Chat Name */}
            <h2
              className={`ml-4 text-sm font-medium ${
                selectedChat === chat._id ? "text-white" : "text-gray-300"
              }`}
            >
              {chat.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}