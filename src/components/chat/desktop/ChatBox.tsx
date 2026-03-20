"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useChatStream } from "../shared/useChatStream";
import ChatHeader from "./ChatHeader";
import ChatMessage from "../shared/ChatMessage";
import ChatEmptyState from "./ChatEmptyState";
import ChatInput from "./ChatInput";

export default function ChatBox() {
  const { messages, input, setInput, isStreaming, sendMessage, handleKeyDown, messagesEndRef, inputRef } = useChatStream();
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      {/* Backdrop when fullscreen */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 2, layout: { duration: 0.35, ease: "easeInOut" } }}
        className={
          isFullscreen
            ? "fixed inset-6 z-50 flex flex-col rounded-3xl border border-gray-700/50 bg-gray-900/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            : "z-10 w-full h-[500px] table:h-[400px] flex flex-col rounded-3xl border border-gray-700/50 bg-gray-900/60 backdrop-blur-xl shadow-2xl overflow-hidden"
        }
      >
        <ChatHeader isFullscreen={isFullscreen} onToggle={() => setIsFullscreen(f => !f)} />

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
    </>
  );
}
