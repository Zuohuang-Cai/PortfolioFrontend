"use client";

import { motion } from "framer-motion";

export default function DesignQuote() {
  return (
    <motion.section
      className="py-20 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <blockquote className="max-w-3xl mx-auto">
        <p className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed">
          "Any fool can write code that a computer can understand.
          <br />
          <span className="text-white font-semibold">
            Good programmers write code that humans can understand.
          </span>"
        </p>
        <footer className="mt-6 text-gray-500">— Martin Fowler</footer>
      </blockquote>
    </motion.section>
  );
}

