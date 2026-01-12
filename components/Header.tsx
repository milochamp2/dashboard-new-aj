"use client";

import { Activity, Bell, Search, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Activity className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 blur-lg bg-cyan-400/50 animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold glow-text">TechDash</h1>
          </motion.div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search analytics..."
                className="w-full bg-white/5 border border-cyan-500/30 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-300" />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center cursor-pointer"
            >
              <span className="text-sm font-semibold">AJ</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
