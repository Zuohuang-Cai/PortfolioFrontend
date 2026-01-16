"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { useState, useRef } from "react";
import { designKnowledge, DesignItem } from "@/components/design";

function SwipeCard({
                     item,
                     categoryColor,
                     onExpand
                   }: {
  item: DesignItem;
  categoryColor: string;
  onExpand: () => void;
}) {
  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(145deg, rgba(20,20,25,0.95), rgba(10,10,15,0.98))`,
        border: `1px solid ${categoryColor}30`,
        boxShadow: `0 4px 30px ${categoryColor}10`
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onExpand}
    >
      <div className="p-5">
        {/* Icon & Title */}
        <div className="flex items-center gap-4 mb-3">
          <motion.div
            className="text-4xl w-14 h-14 flex items-center justify-center rounded-xl"
            style={{ background: `${categoryColor}15` }}
            whileHover={{ rotate: [0, -5, 5, 0] }}
          >
            {item.icon}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">{item.name}</h3>
            {item.principle && (
              <span
                className="text-xs font-mono px-2 py-0.5 rounded inline-block mt-1"
                style={{
                  background: `${categoryColor}25`,
                  color: categoryColor,
                  border: `1px solid ${categoryColor}40`
                }}
              >
                {item.principle}
              </span>
            )}
          </div>
        </div>

        {/* Description Preview */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Tap indicator */}
        <div className="flex items-center justify-center mt-4 gap-2 text-gray-500 text-xs">
          <span>Tap for details</span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

// Bottom sheet detail view
function DetailSheet({
                       item,
                       categoryColor,
                       onClose
                     }: {
  item: DesignItem;
  categoryColor: string;
  onClose: () => void;
}) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 300], [1, 0]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.velocity.y > 500 || info.offset.y > 150) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <motion.div
        ref={sheetRef}
        className="relative w-full max-h-[85vh] rounded-t-3xl overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(25,25,30,1) 0%, rgba(15,15,20,1) 100%)",
          y,
          opacity
        }}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        onDragEnd={handleDragEnd}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div
            className="w-12 h-1.5 rounded-full"
            style={{ background: `${categoryColor}60` }}
          />
        </div>

        <div className="px-5 pb-8 overflow-y-auto max-h-[80vh]">
          {/* Header */}
          <div className="flex items-center gap-4 mb-5">
            <div
              className="text-5xl w-16 h-16 flex items-center justify-center rounded-2xl"
              style={{ background: `${categoryColor}15` }}
            >
              {item.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              {item.principle && (
                <span
                  className="text-sm font-mono px-3 py-1 rounded inline-block mt-1"
                  style={{
                    background: `${categoryColor}25`,
                    color: categoryColor
                  }}
                >
                  SOLID - {item.principle}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Code Block */}
          {item.code && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-5"
            >
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Code Example</h4>
              <pre
                className="p-4 rounded-xl text-xs overflow-x-auto font-mono"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  border: `1px solid ${categoryColor}20`
                }}
              >
                <code className="text-gray-300">{item.code}</code>
              </pre>
            </motion.div>
          )}

          {/* Pros & Cons */}
          {item.pros && item.cons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-3 rounded-xl" style={{ background: "rgba(34,197,94,0.1)" }}>
                <h4 className="text-green-400 text-xs font-semibold mb-2 flex items-center gap-1">
                  <span>✓</span> Pros
                </h4>
                <ul className="space-y-1.5">
                  {item.pros.map((pro, i) => (
                    <li key={i} className="text-xs text-gray-400">{pro}</li>
                  ))}
                </ul>
              </div>
              <div className="p-3 rounded-xl" style={{ background: "rgba(239,68,68,0.1)" }}>
                <h4 className="text-red-400 text-xs font-semibold mb-2 flex items-center gap-1">
                  <span>✗</span> Cons
                </h4>
                <ul className="space-y-1.5">
                  {item.cons.map((con, i) => (
                    <li key={i} className="text-xs text-gray-400">{con}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Layers */}
          {item.layers && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5"
            >
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Architecture Layers</h4>
              <div className="flex flex-col items-center gap-2">
                {item.layers.map((layer, i) => (
                  <motion.div
                    key={layer}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="text-center py-2 px-4 rounded-lg text-sm font-medium"
                    style={{
                      background: `${categoryColor}${Math.max(15, 40 - i * 8)}`,
                      width: `${100 - i * 10}%`
                    }}
                  >
                    {layer}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MobileDesignSection() {
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const currentCategory = designKnowledge[activeCategory];

  return (
    <section id="design" className="min-h-screen bg-black text-white py-12 px-4">
      {/* Section Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-2">
          <span className="bg-gradient-to-r from-[#FF008C] via-[#9C1AFF] to-[#4400FF] bg-clip-text text-transparent">
            Design Philosophy
          </span>
        </h2>
        <p className="text-xs text-gray-500">
          Swipe through patterns • Tap for details
        </p>
      </motion.div>

      {/* Category Pills - Horizontal Scroll */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide snap-x snap-mandatory">
        {designKnowledge.map((category, index) => (
          <motion.button
            key={category.category}
            onClick={() => {
              setActiveCategory(index);
              setSelectedItem(null);
            }}
            className="snap-center px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium flex-shrink-0"
            style={{
              background: activeCategory === index
                ? `linear-gradient(135deg, ${category.color}40, ${category.color}20)`
                : "rgba(255,255,255,0.03)",
              border: activeCategory === index
                ? `1px solid ${category.color}60`
                : "1px solid rgba(255,255,255,0.08)",
              color: activeCategory === index ? "white" : "#6b7280"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {category.category}
          </motion.button>
        ))}
      </div>

      {/* Cards Stack */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          {currentCategory.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <SwipeCard
                item={item}
                categoryColor={currentCategory.color}
                onExpand={() => setSelectedItem(item)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Detail Bottom Sheet */}
      <AnimatePresence>
        {selectedItem && (
          <DetailSheet
            item={selectedItem}
            categoryColor={currentCategory.color}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>

      {/* Quote */}
      <motion.div
        className="text-center mt-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="w-8 h-px mx-auto mb-4"
          style={{ background: `linear-gradient(90deg, transparent, ${currentCategory.color}, transparent)` }}
        />
        <p className="text-sm text-gray-500 italic">
          "Good programmers write code that humans can understand."
        </p>
        <p className="text-xs text-gray-700 mt-2">— Martin Fowler</p>
      </motion.div>
    </section>
  );
}
