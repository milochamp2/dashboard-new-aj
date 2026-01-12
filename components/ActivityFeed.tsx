"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  TrendingUp,
  User,
  Server,
  Database,
} from "lucide-react";

const activities = [
  {
    id: 1,
    icon: CheckCircle,
    color: "text-green-400",
    bg: "bg-green-400/10",
    title: "Deployment Successful",
    description: "Production environment updated",
    time: "2 minutes ago",
  },
  {
    id: 2,
    icon: TrendingUp,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    title: "Traffic Spike Detected",
    description: "+45% increase in active users",
    time: "15 minutes ago",
  },
  {
    id: 3,
    icon: AlertCircle,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    title: "High Memory Usage",
    description: "Server 03 at 85% capacity",
    time: "32 minutes ago",
  },
  {
    id: 4,
    icon: User,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    title: "New User Registration",
    description: "50 new users registered today",
    time: "1 hour ago",
  },
  {
    id: 5,
    icon: Database,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    title: "Database Backup",
    description: "Automated backup completed",
    time: "2 hours ago",
  },
  {
    id: 6,
    icon: Server,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    title: "Server Health Check",
    description: "All systems operational",
    time: "3 hours ago",
  },
];

export default function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass rounded-xl p-6"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Activity Feed</h2>
        <p className="text-gray-400 text-sm">Recent system events and updates</p>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ x: 5 }}
            className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <div className={`p-2 rounded-lg ${activity.bg}`}>
              <activity.icon className={`w-5 h-5 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-1">{activity.title}</h3>
              <p className="text-gray-400 text-xs mb-1">{activity.description}</p>
              <span className="text-gray-500 text-xs">{activity.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
