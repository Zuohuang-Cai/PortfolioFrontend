"use client";

import { motion } from "framer-motion";

interface Category {
  category: string;
  color: string;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: number;
  onCategoryChange: (index: number) => void;
}

export default function CategoryTabs({
                                       categories,
                                       activeCategory,
                                       onCategoryChange
                                     }: CategoryTabsProps) {
  return (
    <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex gap-4 overflow-x-auto p-1">
          {categories.map((category, index) => (
            <motion.button
              key={category.category}
              onClick={() => onCategoryChange(index)}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                activeCategory === index
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
              style={{
                background:
                  activeCategory === index
                    ? `linear-gradient(135deg, ${category.color}40, ${category.color}20)`
                    : "transparent",
                border:
                  activeCategory === index
                    ? `1px solid ${category.color}60`
                    : "1px solid transparent"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

