import { query, mutation } from "./_generated/server";
import {v} from "convex/values"


export const getMessages = query(async ({ db }) => {
  return await db.query("messages").order("desc").take(100);
});


export const sendMessage = mutation({
    args: { 
      text: v.string(), 
      sender: v.string() 
    },
    handler: async ({ db }, { text, sender }) => {
      await db.insert("messages", {
        text,
        sender,
        timestamp: Date.now(),
      });
    },
  });
