"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function NewsPage() {
  const [news, setNews] = useState([])
  const getnews = async ()=>{
    try {
      const response = await fetch('https://tinkering-club-backend.onrender.com/news');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const news = await response.json();
      console.log('Fetched events:', event);
      setNews(news)
      console.log(news)
      return news;
    } catch (error) {
      console.error('Failed to fetch events:', error);
      return null;
    }
  }
  // const news = [
  //   {
  //     title: "Tinker Club Wins National Robotics Championship",
  //     excerpt:
  //       "Our team secured first place in the National Robotics Championship with their innovative autonomous navigation system.",
  //     content:
  //       "After months of preparation and countless hours of coding and testing, Team Tinker has achieved a remarkable victory...",
  //     author: "Sarah Johnson",
  //     date: "2024-01-25",
  //     image: "/placeholder.svg?height=300&width=500",
  //     category: "Achievement",
  //     featured: true,
  //   },
  //   {
  //     title: "New Arduino Lab Opens with State-of-the-Art Equipment",
  //     excerpt:
  //       "The club inaugurates a new dedicated Arduino laboratory equipped with the latest development boards and sensors.",
  //     content:
  //       "We're excited to announce the opening of our new Arduino laboratory, featuring over 50 development stations...",
  //     author: "Mike Chen",
  //     date: "2024-01-20",
  //     image: "/placeholder.svg?height=300&width=500",
  //     category: "Facility",
  //     featured: false,
  //   },
  //   {
  //     title: "Guest Lecture: Future of AI in Robotics",
  //     excerpt:
  //       "Renowned AI researcher Dr. Emily Watson shares insights on the integration of artificial intelligence in modern robotics.",
  //     content:
  //       "Dr. Emily Watson from MIT delivered an inspiring lecture on how AI is revolutionizing the field of robotics...",
  //     author: "Alex Rodriguez",
  //     date: "2024-01-18",
  //     image: "/placeholder.svg?height=300&width=500",
  //     category: "Event",
  //     featured: false,
  //   },
  //   {
  //     title: "Student Project Featured in Tech Magazine",
  //     excerpt: "Junior member's IoT weather station project gets recognition in a leading technology publication.",
  //     content:
  //       "We're proud to announce that our member John Doe's innovative weather monitoring system has been featured...",
  //     author: "Lisa Park",
  //     date: "2024-01-15",
  //     image: "/placeholder.svg?height=300&width=500",
  //     category: "Recognition",
  //     featured: true,
  //   },
  //   {
  //     title: "Collaboration with Local Tech Companies",
  //     excerpt: "Tinker Club partners with three local tech companies to provide internship opportunities for members.",
  //     content: "We're thrilled to announce new partnerships that will provide real-world experience for our members...",
  //     author: "David Kim",
  //     date: "2024-01-12",
  //     image: "/placeholder.svg?height=300&width=500",
  //     category: "Partnership",
  //     featured: false,
  //   },
  // ]

  useEffect(() => {
    getnews(); // <-- actually call the function
  }, []);

  const featuredNews = news.filter((article) => article.featured)
  const regularNews = news.filter((article) => !article.featured)

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
            Latest News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements from Tinker Club.
          </p>
        </motion.div>

        {/* Featured News */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-800/50 to-purple-800/30 rounded-xl overflow-hidden border border-purple-500/20 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-cyan-400 font-semibold">
                    Read More
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Regular News */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <h2 className="text-3xl font-bold mb-8 text-purple-400">Recent Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-800/30 to-purple-800/20 rounded-xl overflow-hidden border border-gray-600/20 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={500}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={12} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={12} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-cyan-400 font-semibold text-sm"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
