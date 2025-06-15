"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Users, Target, Lightbulb, Award, Heart, Globe, Rocket } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description:
        "We believe that passion is the fuel of innovation. Every project we undertake is driven by genuine enthusiasm for technology and its potential to change the world.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Our solutions aren't just local—we think globally. We develop technologies that can scale and make a difference worldwide.",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description:
        "We don't just follow trends; we create them. Our commitment to pushing boundaries drives us to explore uncharted territories in technology.",
    },
  ]

  const stats = [
    { icon: Users, label: "Active Members", value: "150+", color: "from-cyan-400 to-blue-500" },
    { icon: Target, label: "Projects Completed", value: "50+", color: "from-purple-400 to-pink-500" },
    { icon: Lightbulb, label: "Workshops Conducted", value: "25+", color: "from-green-400 to-teal-500" },
    { icon: Award, label: "Competitions Won", value: "15+", color: "from-yellow-400 to-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Tinker Club
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a passionate community of innovators, makers, and tech enthusiasts dedicated to pushing the
            boundaries of technology and creativity through collaborative learning and hands-on innovation.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Team working together"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To foster innovation and creativity in technology by providing a platform for students to explore,
                learn, and create cutting-edge projects in robotics, electronics, and programming. We believe in
                hands-on learning, collaborative problem-solving, and turning ideas into reality through the power of
                technology.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be the leading student organization that bridges the gap between academic learning and real-world
                application, creating the next generation of technology leaders who will shape the future of innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These principles guide everything we do and shape our approach to innovation and collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800/50 to-purple-800/30 p-8 rounded-2xl border border-purple-500/20 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-gray-800/50 to-purple-800/30 p-8 rounded-2xl border border-purple-500/20 text-center group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            What We Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Hands-On Projects",
              items: [
                "Arduino and Raspberry Pi development",
                "IoT and embedded systems",
                "3D printing and prototyping",
                "PCB design and manufacturing",
              ],
            },
            {
              title: "Learning & Development",
              items: [
                "Weekly workshops and tutorials",
                "Peer-to-peer mentoring",
                "Industry expert sessions",
                "Certification programs",
              ],
            },
            {
              title: "Competitions & Events",
              items: [
                "Robotics competitions",
                "Hackathons and coding challenges",
                "Tech fairs and exhibitions",
                "Inter-college tournaments",
              ],
            },
            {
              title: "Community Impact",
              items: [
                "Open-source contributions",
                "Community outreach programs",
                "STEM education initiatives",
                "Industry partnerships",
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-purple-800/30 p-8 rounded-2xl border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
