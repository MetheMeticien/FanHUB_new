"use client";

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

export default function AIChatBox() {
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Hey! Get to know more about your favourite celebrity!!" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  const fetchAIResponse = async (message: string) => {
    const response = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message }),
    });

    const data = await response.json();
    console.log(data.reply);
    return data.reply || "I'm not sure how to respond to that.";
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);
  

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: "Me", text: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      const aiResponse = await fetchAIResponse(input);
      const aiMessage = { sender: "AI", text: aiResponse };
      setMessages((prev) => [...prev, aiMessage]);
    }
  };

  useEffect(() => {
    // Scroll to the bottom when messages change
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col justify-between rounded-2xl h-[700px]"> {/* Fixed height for chat box */}
      {/* Header */}
      <header className="bg-accent text-white p-4 text-center text-lg font-semibold rounded-t-2xl">
        AI Chat
      </header>

      {/* Chat Container */}
      <div className="flex flex-col-reverse justify-start overflow-y-auto p-4 gap-2 flex-1"> {/* Made it scrollable and filled */}
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "Me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`min-w-20 p-3 rounded-xl shadow-md max-w-xs ${
                msg.sender === "Me" ? "bg-accent text-white" : "bg-blue-300 text-gray-900"
              }`}
            >
              <p className="text-xs font-semibold">{msg.sender}</p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={chatRef}></div>
      </div>

      {/* Input Box */}
      <div className="p-4 bg-background shadow-md flex rounded-b-2xl">
        <input
          type="text"
          className="text-black bg-gray-400 flex-1 px-4 py-2 border border-gray-300 rounded-xl outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevent page scroll on Enter
              handleSend();
            }
          }}
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
