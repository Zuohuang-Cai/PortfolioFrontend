"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import {
  DesignCard,
  CategoryTabs,
  designKnowledge,
  DesignItem
} from "@/components/design";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 12
    }
  }
};

const cardVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
  visible: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      stiffness: 100,
      damping: 15
    }
  }
};

export default function DesignSection() {
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="design" className="min-h-screen bg-black text-white py-20">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#FF008C] via-[#9C1AFF] to-[#4400FF] bg-clip-text text-transparent">
            Design Philosophy
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Clean code, solid principles, and scalable architecture
        </p>
      </motion.div>

      {/* Category Tabs */}
      <CategoryTabs
        categories={designKnowledge}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Content Section */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-12"
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h3
          className="text-2xl font-bold mb-8 text-center"
          variants={itemVariants}
          style={{ color: designKnowledge[activeCategory].color }}
        >
          {designKnowledge[activeCategory].category}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designKnowledge[activeCategory].items.map((item) => (
            <DesignCard
              key={item.name}
              item={item}
              color={designKnowledge[activeCategory].color}
              isSelected={selectedItem?.name === item.name}
              onSelect={() =>
                setSelectedItem(selectedItem?.name === item.name ? null : item)
              }
              variants={cardVariants}
            />
          ))}
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div
        className="text-center px-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <blockquote className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-400 italic">
            "Good programmers write code that humans can understand."
          </p>
          <footer className="mt-3 text-gray-600 text-sm">— Martin Fowler</footer>
        </blockquote>
      </motion.div>
    </section>
  );
}

