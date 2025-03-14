"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "~/convex/_generated/api";
import ChatBox from "./chatbox";
import Navbar from "@/Navbar/navbar";
import FilterBox from "./Filterbox";

export default function ChatApp() {
  // State for the selected chat
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  // Fetch chats from the backend
  const chats = useQuery(api.chats.getChats) || [];

  // Find the selected chat's name
  const selectedChatName = selectedChat
    ? chats.find((chat) => chat._id === selectedChat)?.name
    : "Private Chat"; // Default heading if no chat is selected

  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-10 mt-16 mx-10 h-svh">
        {/* FilterBox */}
        <div className="hidden lg:flex flex-col lg:w-1/4 h-4/5 bg-primary rounded-2xl">
          <FilterBox
            selectedChat={selectedChat}
            onSelectChat={setSelectedChat}
          />
        </div>

        {/* ChatBox */}
        <div className="bg-primary w-5/6 lg:w-2/3 h-4/5 rounded-2xl">
          <ChatBox chatId={selectedChat} heading={selectedChatName} />
        </div>
      </div>
    </div>
  );
}