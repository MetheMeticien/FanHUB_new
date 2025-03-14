import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  chats: defineTable({
    name: v.string(),
  }),
  messages: defineTable({
    text: v.string(),
    sender: v.string(),
    timestamp: v.number(),
    chatId: v.id("chats"), // This ensures it's a valid Convex ID
  }).index("by_chatId", ["chatId"]),
});
