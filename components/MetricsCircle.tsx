"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Active", value: 400, color: "#00f0ff" },
  { name: "Idle", value: 300, color: "#9d4edd" },
  { name: "Offline", value: 200, color: "#ff006e" },
  { name: "Maintenance", value: 100, color: "#00ff94" },
];

export default function MetricsCircle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass rounded-xl p-6"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Server Status</h2>
        <p className="text-gray-400 text-sm">Current server distribution</p>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(10, 10, 15, 0.9)",
              border: "1px solid rgba(0, 240, 255, 0.3)",
              borderRadius: "8px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-xs text-gray-400">{item.name}</p>
              <p className="text-sm font-semibold">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
