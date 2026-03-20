"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileChatSheet from "./MobileChatSheet";

export default function MobileChatFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && <MobileChatSheet onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileTap={{ scale: 0.88 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
          >
            {/* Pulsing ring */}
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 opacity-40"
              animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Button body */}
            <span className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              Z
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
