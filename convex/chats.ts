import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new chat
export const createChat = mutation({
  args: {
    name: v.string(), // Name of the chat
  },
  handler: async ({ db }, { name }) => {
    const chatId = await db.insert("chats", { name });
    return chatId; // Return the ID of the newly created chat
  },
});

// Get all chats
export const getChats = query({
  handler: async ({ db }) => {
    return await db.query("chats").collect(); // Fetch all chats
  },
});

// Get messages for a specific chat
export const getMessages = query({
  args: {
    chatId: v.id("chats"), // ID of the chat to fetch messages for
  },
  handler: async ({ db }, { chatId }) => {
    return await db
      .query("messages")
      .withIndex("by_chatId", (q) => q.eq("chatId", chatId)) // Filter by chatId
      .order("desc") // Sort by timestamp (descending)
      .take(100); // Limit to 100 messages
  },
});

// Send a message to a specific chat
export const sendMessage = mutation({
  args: {
    text: v.string(),
    sender: v.string(),
    chatId: v.id("chats"), // ID of the chat to send the message to
  },
  handler: async ({ db }, { text, sender, chatId }) => {
    await db.insert("messages", {
      text,
      sender,
      timestamp: Date.now(),
      chatId, // Associate the message with the chat
    });
  },
});