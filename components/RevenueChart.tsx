"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000, profit: 2400 },
  { name: "Feb", revenue: 3000, profit: 1398 },
  { name: "Mar", revenue: 2000, profit: 9800 },
  { name: "Apr", revenue: 2780, profit: 3908 },
  { name: "May", revenue: 1890, profit: 4800 },
  { name: "Jun", revenue: 2390, profit: 3800 },
  { name: "Jul", revenue: 3490, profit: 4300 },
  { name: "Aug", revenue: 4200, profit: 5100 },
  { name: "Sep", revenue: 3800, profit: 4600 },
  { name: "Oct", revenue: 4500, profit: 5300 },
  { name: "Nov", revenue: 5200, profit: 6100 },
  { name: "Dec", revenue: 6000, profit: 7200 },
];

export default function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass rounded-xl p-6"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Revenue Overview</h2>
        <p className="text-gray-400 text-sm">Monthly revenue and profit trends</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9d4edd" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9d4edd" stopOpacity={0} />
            </linearGradient>
          </defs>
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
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#00f0ff"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="profit"
            stroke="#9d4edd"
            fillOpacity={1}
            fill="url(#colorProfit)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
