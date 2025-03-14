// import { create } from "zustand";

// interface Message {
//   text: string;
//   sender: string;
// }

// interface ChatStore {
//   messages: Message[];
//   sendMessage: (text: string, sender: string) => void;
// }

// export const useChatStore = create<ChatStore>((set) => ({
//   messages: [],
//   sendMessage: (text, sender) =>
//     set((state) => ({ messages: [...state.messages, { text, sender }] })),
// }));
