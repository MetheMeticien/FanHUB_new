import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    text: v.string(),
    sender: v.string(),
    timestamp: v.number(),
  }).index("by_timestamp", ["timestamp"]), // Corrected index definition
});
