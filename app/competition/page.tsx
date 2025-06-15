"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Trophy, Calendar, Users, Award, Target, Zap } from "lucide-react"

export default function CompetitionPage() {
  const competitions = [
    {
      title: "RoboRace 2024",
      description: "Annual autonomous robot racing competition featuring speed and precision challenges",
      date: "2024-03-15",
      registrationDeadline: "2024-03-01",
      participants: 45,
      maxParticipants: 60,
      prize: "$5,000",
      difficulty: "Advanced",
      categories: ["Autonomous Navigation", "Speed Challenge", "Obstacle Course"],
      status: "open",
      featured: true,
    },
    {
      title: "Arduino Innovation Challenge",
      description: "Create innovative solutions using Arduino platforms for real-world problems",
      date: "2024-04-20",
      registrationDeadline: "2024-04-05",
      participants: 32,
      maxParticipants: 50,
      prize: "$3,000",
      difficulty: "Intermediate",
      categories: ["IoT Solutions", "Smart Home", "Environmental Monitoring"],
      status: "open",
      featured: false,
    },
    {
      title: "Drone Programming Contest",
      description: "Program drones to complete complex aerial maneuvers and tasks",
      date: "2024-05-10",
      registrationDeadline: "2024-04-25",
      participants: 18,
      maxParticipants: 30,
      prize: "$2,500",
      difficulty: "Advanced",
      categories: ["Aerial Navigation", "Precision Landing", "Payload Delivery"],
      status: "open",
      featured: false,
    },
    {
      title: "Beginner Bot Battle",
      description: "Entry-level robotics competition perfect for newcomers to the field",
      date: "2024-02-28",
      registrationDeadline: "2024-02-15",
      participants: 28,
      maxParticipants: 40,
      prize: "$1,000",
      difficulty: "Beginner",
      categories: ["Line Following", "Sumo Wrestling", "Maze Solving"],
      status: "closed",
      featured: false,
    },
  ]

  const achievements = [
    {
      title: "National Robotics Championship 2023",
      position: "1st Place",
      team: "Team Alpha",
      description: "Autonomous navigation and object manipulation challenge",
    },
    {
      title: "IEEE Student Competition 2023",
      position: "2nd Place",
      team: "Team Beta",
      description: "Innovative IoT solution for smart agriculture",
    },
    {
      title: "Regional Tech Fest 2023",
      position: "1st Place",
      team: "Team Gamma",
      description: "Line following robot with advanced sensor integration",
    },
  ]

  const openCompetitions = competitions.filter((comp) => comp.status === "open")
  const pastCompetitions = competitions.filter((comp) => comp.status === "closed")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Navigation />

      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Competitions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Challenge yourself and showcase your skills in our exciting robotics and technology competitions.
          </p>
        </motion.div>

        {/* Open Competitions */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-3">
            <Zap className="text-yellow-400" />
            Open for Registration
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {openCompetitions.map((competition, index) => (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-purple-800/30 p-6 rounded-xl border border-purple-500/20 relative overflow-hidden"
              >
                {competition.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-orange-400 text-black px-4 py-1 text-sm font-semibold">
                    Featured
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white pr-4">{competition.title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{competition.prize}</div>
                    <div className="text-sm text-gray-400">Prize Pool</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{competition.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <div>
                      <div className="text-sm">Competition Date</div>
                      <div className="text-white font-semibold">{new Date(competition.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Target size={16} />
                    <div>
                      <div className="text-sm">Registration Deadline</div>
                      <div className="text-white font-semibold">
                        {new Date(competition.registrationDeadline).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users size={16} />
                    <span>
                      {competition.participants}/{competition.maxParticipants} registered
                    </span>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      competition.difficulty === "Beginner"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : competition.difficulty === "Intermediate"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {competition.difficulty}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Categories:</div>
                  <div className="flex flex-wrap gap-2">
                    {competition.categories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(competition.participants / competition.maxParticipants) * 100}%` }}
                  ></div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Register Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-400 flex items-center gap-3">
            <Trophy className="text-yellow-400" />
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20 text-center"
              >
                <Award className="mx-auto mb-4 text-yellow-400" size={48} />
                <h3 className="text-lg font-bold mb-2 text-white">{achievement.title}</h3>
                <div className="text-2xl font-bold text-yellow-400 mb-2">{achievement.position}</div>
                <div className="text-cyan-400 font-semibold mb-2">{achievement.team}</div>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Past Competitions */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <h2 className="text-3xl font-bold mb-8 text-gray-400">Past Competitions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastCompetitions.map((competition, index) => (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/30 to-purple-800/20 p-6 rounded-xl border border-gray-600/20 opacity-80"
              >
                <h3 className="text-lg font-bold mb-3 text-gray-300">{competition.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{competition.description}</p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{new Date(competition.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>{competition.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy size={14} />
                    <span>{competition.prize} prize pool</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
