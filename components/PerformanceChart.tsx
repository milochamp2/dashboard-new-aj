"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Mon", cpu: 65, memory: 80, disk: 45 },
  { name: "Tue", cpu: 59, memory: 75, disk: 52 },
  { name: "Wed", cpu: 80, memory: 90, disk: 68 },
  { name: "Thu", cpu: 81, memory: 85, disk: 71 },
  { name: "Fri", cpu: 56, memory: 70, disk: 55 },
  { name: "Sat", cpu: 55, memory: 68, disk: 48 },
  { name: "Sun", cpu: 40, memory: 60, disk: 42 },
];

export default function PerformanceChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass rounded-xl p-6"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">System Performance</h2>
        <p className="text-gray-400 text-sm">Weekly resource utilization</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(10, 10, 15, 0.9)",
              border: "1px solid rgba(0, 240, 255, 0.3)",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="cpu" fill="#00f0ff" radius={[8, 8, 0, 0]} />
          <Bar dataKey="memory" fill="#9d4edd" radius={[8, 8, 0, 0]} />
          <Bar dataKey="disk" fill="#ff006e" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
