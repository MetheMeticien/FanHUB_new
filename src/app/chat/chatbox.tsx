"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "~/convex/_generated/api";

interface ChatBoxProps {
  chatId: string | null; // Pass chatId as a prop
  heading: string; // Pass heading as a prop
}

export default function ChatBox({ chatId, heading }: ChatBoxProps) {
  // Fetch messages for the selected chat
  const messages = useQuery(
    api.chats.getMessages,
    chatId ? { chatId } : "skip" // Skip query if chatId is null
  ) || [];

  const sendMessage = useMutation(api.chats.sendMessage);

  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (input.trim() && !isSending && chatId) {
      setIsSending(true);
      try {
        await sendMessage({ text: input, sender: "Me", chatId }); // Send message to the selected chat
        setInput("");
      } catch (error) {
        console.error("Failed to send message:", error);
      } finally {
        setIsSending(false);
      }
    }
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col justify-between h-full bg-[#1e1e1e] rounded-2xl shadow-lg">
      {/* Header */}
      <header className="bg-[#2d2d2d] p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-white">{heading}</h2>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div> {/* Online status */}
        </div>
        <p className="text-sm text-gray-400">3 members</p> {/* Member count */}
      </header>

      {/* Chat Container */}
      <div className="h-full flex flex-col-reverse justify-start overflow-y-auto p-4 gap-3 scrollbar-thin scrollbar-thumb-[#3d3d3d] scrollbar-track-[#1e1e1e]">
        {messages.length === 0 ? (
          <p className="text-center text-gray-400 py-4">No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "Me" ? "justify-end" : "justify-start"}`}
            >
              <div className="flex items-end gap-2">
                {msg.sender !== "Me" && (
                  <div className="relative w-8 h-8">
                    <img
                      src={`https://i.pravatar.cc/150?u=${msg.sender}`} // Replace with actual user avatar
                      alt={msg.sender}
                      className="rounded-full"
                    />
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl shadow-md max-w-xl min-w-80 ${
                    msg.sender === "Me"
                      ? "bg-[#007bff] text-white"
                      : "bg-[#3d3d3d] text-gray-200"
                  }`}
                >
                  <p className="text-md font-semibold">{msg.sender}</p>
                  <p className="text-lg">{msg.text}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {new Date(msg._creationTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={chatRef}></div> {/* Ensures scrolling stays at the bottom */}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-[#2d2d2d] rounded-b-2xl">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 bg-[#3d3d3d] text-white rounded-xl outline-none placeholder-gray-400"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isSending || !chatId}
          />
          <button
            className="p-2 bg-[#007bff] text-white rounded-xl hover:bg-[#005bb5] transition-colors disabled:opacity-50"
            onClick={handleSend}
            disabled={isSending || !input.trim() || !chatId}
          >
            {isSending ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}