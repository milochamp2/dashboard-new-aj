"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Zap,
  Globe,
} from "lucide-react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import RevenueChart from "@/components/RevenueChart";
import PerformanceChart from "@/components/PerformanceChart";
import ActivityFeed from "@/components/ActivityFeed";
import MetricsCircle from "@/components/MetricsCircle";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] grid-bg">
      <Header />

      <main className="container mx-auto px-6 pt-24 pb-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <Zap className="w-16 h-16 text-cyan-400 animate-pulse" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
              Analytics Dashboard
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real-time insights and performance metrics for your digital ecosystem
            </p>
          </div>
        </motion.section>

        {/* Stats Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatsCard
              title="Total Revenue"
              value="$54,239"
              change="+12.5%"
              trend="up"
              icon={DollarSign}
              delay={0}
            />
            <StatsCard
              title="Active Users"
              value="8,924"
              change="+8.2%"
              trend="up"
              icon={Users}
              delay={0.1}
            />
            <StatsCard
              title="Conversion Rate"
              value="3.24%"
              change="-2.1%"
              trend="down"
              icon={TrendingUp}
              delay={0.2}
            />
            <StatsCard
              title="Server Uptime"
              value="99.9%"
              change="+0.1%"
              trend="up"
              icon={Activity}
              delay={0.3}
            />
            <StatsCard
              title="API Requests"
              value="1.2M"
              change="+23.5%"
              trend="up"
              icon={Zap}
              delay={0.4}
            />
            <StatsCard
              title="Global Reach"
              value="156"
              change="+5"
              trend="up"
              icon={Globe}
              delay={0.5}
            />
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <PerformanceChart />
          </div>
        </section>

        {/* Bottom Section */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
            <div>
              <MetricsCircle />
            </div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 pt-8 border-t border-cyan-500/20 text-center"
        >
          <p className="text-gray-500 text-sm">
            Built with Next.js, React, TypeScript, Tailwind CSS, and Recharts
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2026 TechDash. All rights reserved.
          </p>
        </motion.footer>
      </main>

      {/* Floating particles effect */}
      {isMounted && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
