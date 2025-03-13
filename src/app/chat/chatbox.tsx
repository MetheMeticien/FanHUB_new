"use client";

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "~/convex/_generated/api";

export default function ChatBox() {
  const messages = useQuery(api.messages.getMessages) || [];
  const sendMessage = useMutation(api.messages.sendMessage);

  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (input.trim()) {
      await sendMessage({ text: input, sender: "Me" }); // Replace "Me" with actual user
      setInput("");
    }
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col justify-between h-full rounded-2xl">
      {/* Header */}
      <header className="bg-accent text-white p-4 text-center text-lg font-semibold rounded-t-2xl">
        Group Chat
      </header>

      {/* Chat Container */}
      <div className="h-full flex flex-col-reverse justify-start overflow-y-scroll p-4 gap-2">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex ${msg.sender === "Me" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`min-w-20 p-3 rounded-xl shadow-md max-w-xs ${
          msg.sender === "Me" ? "bg-accent text-white" : "bg-red-300 text-gray-900"
        }`}
      >
        <p className="text-xs font-semibold">{msg.sender}</p>
        <p>{msg.text}</p>
      </div>
    </div>
  ))}
  <div ref={chatRef}></div> {/* Ensures scrolling stays at the bottom */}
</div>

      {/* Input Box */}
      <div className="p-4 bg-background shadow-md flex rounded-b-2xl">
        <input
          type="text"
          className="text-black bg-gray-400 flex-1 px-4 py-2 border border-gray-300 rounded-xl outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="ml-2 bg-accent text-white px-4 rounded-xl flex items-center"
          onClick={handleSend}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
