"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  delay?: number;
}

export default function StatsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  delay = 0,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass rounded-xl p-6 relative overflow-hidden group cursor-pointer"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
            <Icon className="w-6 h-6 text-cyan-400" />
          </div>
          <span
            className={`text-sm font-semibold px-2 py-1 rounded ${
              trend === "up"
                ? "text-green-400 bg-green-400/10"
                : "text-red-400 bg-red-400/10"
            }`}
          >
            {change}
          </span>
        </div>

        <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
    </motion.div>
  );
}
