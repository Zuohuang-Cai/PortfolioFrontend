"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChatStream } from "../shared/useChatStream";
import ChatMessage from "../shared/ChatMessage";
import MobileChatHeader from "./MobileChatHeader";
import MobileChatEmptyState from "./MobileChatEmptyState";
import MobileChatInput from "./MobileChatInput";

interface Props {
  onClose: () => void;
}

export default function MobileChatSheet({ onClose }: Props) {
  const { messages, input, setInput, isStreaming, sendMessage, handleKeyDown, messagesEndRef, inputRef } = useChatStream();
  const dragStartY = useRef(0);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      />

      {/* Sheet */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 320 }}
        className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-3xl bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
        style={{ height: "80dvh" }}
      >
        {/* Drag handle — touch-drag this to close */}
        <motion.div
          className="flex justify-center pt-3 pb-2 flex-shrink-0 cursor-grab active:cursor-grabbing touch-none"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={{ top: 0, bottom: 0.4 }}
          onDragStart={(_, info) => { dragStartY.current = info.point.y; }}
          onDragEnd={(_, info) => {
            if (info.offset.y > 80 || info.velocity.y > 400) onClose();
          }}
        >
          <div className="w-10 h-1 rounded-full bg-gray-600" />
        </motion.div>

        <MobileChatHeader onClose={onClose} />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {messages.length === 0 ? (
            <MobileChatEmptyState onSelect={q => { setInput(q); inputRef.current?.focus(); }} />
          ) : (
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <ChatMessage key={i} message={msg} />
              ))}
            </AnimatePresence>
          )}
          <div ref={messagesEndRef} />
        </div>

        <MobileChatInput
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
