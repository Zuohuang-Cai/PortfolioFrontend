export const API_URL = `${process.env.NEXT_PUBLIC_CHATAPI_URL!}/api/Chat/send-stream`;
export const STORAGE_KEY = "portfolio_chat_conversation_id";

export const QUICK_QUESTIONS = [
  "What can you build?",
  "Tell me about your experience",
  "What's your stack?",
  "What's your ip address?",
  "Show me your source code."
];

export interface Message {
  role: "user";
  content: string;
  streaming?: boolean;
}
