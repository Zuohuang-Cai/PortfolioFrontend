import { motion } from "framer-motion";
import { type Message } from "./chatConfig";

interface Props {
  message: Message;
}

export default function ChatMessage({ message }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          message.role === "user"
            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-sm"
            : "bg-gray-800/80 text-gray-100 rounded-bl-sm border border-gray-700/50"
        }`}
      >
        {message.content}
        {message.streaming && message.content === "" && (
          <span className="inline-flex gap-1 items-center">
            {[0, 150, 300].map(delay => (
              <span
                key={delay}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </span>
        )}
        {message.streaming && message.content !== "" && (
          <span className="inline-block w-0.5 h-3.5 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
        )}
      </div>
    </motion.div>
  );
}
