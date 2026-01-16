"use client";

import { motion, Variants } from "framer-motion";

interface DesignItem {
  name: string;
  description: string;
  icon: string;
  code?: string;
  principle?: string;
  pros?: string[];
  cons?: string[];
  layers?: string[];
}

interface DesignCardProps {
  item: DesignItem;
  color: string;
  isSelected: boolean;
  onSelect: () => void;
  variants: Variants;
}

export default function DesignCard({
                                     item,
                                     color,
                                     isSelected,
                                     onSelect,
                                     variants
                                   }: DesignCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 20px 40px ${color}20`
      }}
      className="relative group cursor-pointer"
      onClick={onSelect}
    >
      <div
        className="p-6 rounded-2xl border transition-all duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          borderColor: isSelected ? color : "rgba(255,255,255,0.1)"
        }}
      >
        {/* Card Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{item.icon}</span>
          <div>
            <h3 className="text-xl font-semibold text-white">{item.name}</h3>
            {item.principle && (
              <span
                className="text-sm font-mono px-2 py-1 rounded"
                style={{
                  background: `${color}30`,
                  color: color
                }}
              >
                {item.principle}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>

        {/* Code Block (for Design Patterns) */}
        {item.code && isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <pre
              className="p-4 rounded-lg text-sm overflow-x-auto font-mono"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: `1px solid ${color}30`
              }}
            >
              <code className="text-gray-300">{item.code}</code>
            </pre>
          </motion.div>
        )}

        {/* Pros & Cons (for Architecture) */}
        {item.pros && isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="grid grid-cols-2 gap-4 mt-4"
          >
            <div>
              <h4 className="text-green-400 text-sm font-semibold mb-2">Pros</h4>
              <ul className="space-y-1">
                {item.pros?.map((pro, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-400 flex items-center gap-2"
                  >
                    <span className="text-green-400">✓</span> {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-red-400 text-sm font-semibold mb-2">Cons</h4>
              <ul className="space-y-1">
                {item.cons?.map((con, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-400 flex items-center gap-2"
                  >
                    <span className="text-red-400">✗</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Layers (for Clean Architecture) */}
        {item.layers && isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4"
          >
            <div className="flex flex-col items-center gap-2">
              {item.layers.map((layer, i) => (
                <div
                  key={layer}
                  className="w-full text-center py-2 rounded-lg text-sm"
                  style={{
                    background: `${color}${(4 - i) * 15 + 10}`,
                    width: `${100 - i * 15}%`
                  }}
                >
                  {layer}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Expand indicator */}
        <div className="flex justify-center mt-4">
          <motion.div
            animate={{ rotate: isSelected ? 180 : 0 }}
            className="text-gray-500"
          >
            ▼
          </motion.div>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${color}20, transparent 70%)`,
          filter: "blur(20px)",
          transform: "translateY(10px)"
        }}
      />
    </motion.div>
  );
}

