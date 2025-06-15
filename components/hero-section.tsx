"use client"

import { motion } from "framer-motion"
import { ChevronDown, Zap, Code, Cpu } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          TINKER CLUB
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          Where Innovation Meets Technology
          <br />
          <span className="text-cyan-400">Build • Code • Create</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-cyan-500/30"
          >
            <Zap className="text-yellow-400" size={20} />
            <span>Electronics</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -5 }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-purple-500/30"
          >
            <Code className="text-green-400" size={20} />
            <span>Programming</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 px-6 py-3 rounded-full border border-green-500/30"
          >
            <Cpu className="text-cyan-400" size={20} />
            <span>Robotics</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Explore Our World
            </motion.button>
          </Link>

          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-500 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              View Projects
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8"
      >
        <ChevronDown className="text-cyan-400" size={32} />
      </motion.div>
    </div>
  )
}
