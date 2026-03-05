"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useChatStream } from "./useChatStream";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatEmptyState from "./ChatEmptyState";
import ChatInput from "./ChatInput";

export default function ChatBox() {
  const { messages, input, setInput, isStreaming, sendMessage, handleKeyDown, messagesEndRef, inputRef } = useChatStream();

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -20, opacity: 0 }}
      transition={{ duration: 2 }}
      className="z-10 w-full h-[500px] table:h-[400px] flex flex-col rounded-3xl border border-gray-700/50 bg-gray-900/60 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      <ChatHeader />

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 ? (
          <ChatEmptyState onSelect={q => { setInput(q); inputRef.current?.focus(); }} />
        ) : (
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
          </AnimatePresence>
        )}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput
        inputRef={inputRef}
        value={input}
        onChange={setInput}
        onKeyDown={handleKeyDown}
        onSend={sendMessage}
        disabled={isStreaming}
      />
    </motion.div>
  );
}
