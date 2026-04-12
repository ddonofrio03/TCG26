"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function TeamHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-3 h-3 bg-primary/60 rounded-full"
        animate={{
          y: [-30, 30, -30],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-accent/50 rounded-full"
        animate={{
          y: [20, -20, 20],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <Link 
              href="/"
              className="text-slate-400 hover:text-primary transition-colors duration-300 text-lg"
            >
              ← Back to Home
            </Link>
          </motion.div>
          
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="block">OUR</span>
              <span className="text-primary">TEAM</span>
            </motion.h1>

            <motion.div
              className="w-32 h-1 bg-primary mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            />

            {/* Three pillars */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              {[
                "Depth of Experience",
                "Experts in their Fields", 
                "Team Players"
              ].map((pillar, index) => (
                <motion.div
                  key={pillar}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.2) }}
                  className="text-center"
                >
                  <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-4" />
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-300">
                    {pillar}
                  </h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            >
              Meet the strategic minds behind The Casey Group's success. 
              Each team member brings specialized expertise and unwavering commitment 
              to delivering exceptional results for our clients.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
} 