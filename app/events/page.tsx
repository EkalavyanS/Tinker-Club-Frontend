"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { use, useEffect, useState } from "react"

export default function EventsPage() {
  const [events, setEvents] = useState([])
  const getevents = async ()=>{
    try {
      const response = await fetch('https://tinkering-club-backend.onrender.com/events');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const event = await response.json();
      console.log('Fetched events:', event);
      setEvents(event)
      console.log(event)
      return event;
    } catch (error) {
      console.error('Failed to fetch events:', error);
      return null;
    }
  }

  // const events = [
  //   {
  //     title: "Arduino Workshop Series",
  //     date: "2024-02-15",
  //     time: "2:00 PM - 5:00 PM",
  //     location: "Tech Lab A",
  //     description: "Comprehensive workshop covering Arduino basics, sensors, and project development",
  //     attendees: 45,
  //     status: "upcoming",
  //     category: "Workshop",
  //   },
  //   {
  //     title: "Robotics Competition 2024",
  //     date: "2024-03-10",
  //     time: "9:00 AM - 6:00 PM",
  //     location: "Main Auditorium",
  //     description: "Annual robotics competition featuring line-following and obstacle-avoiding challenges",
  //     attendees: 120,
  //     status: "upcoming",
  //     category: "Competition",
  //   },
  //   {
  //     title: "IoT Hackathon",
  //     date: "2024-01-20",
  //     time: "10:00 AM - 8:00 PM",
  //     location: "Innovation Center",
  //     description: "24-hour hackathon focused on Internet of Things solutions for smart cities",
  //     attendees: 80,
  //     status: "completed",
  //     category: "Hackathon",
  //   },
  //   {
  //     title: "3D Printing Masterclass",
  //     date: "2024-02-28",
  //     time: "1:00 PM - 4:00 PM",
  //     location: "Maker Space",
  //     description: "Learn advanced 3D printing techniques and design optimization",
  //     attendees: 30,
  //     status: "upcoming",
  //     category: "Workshop",
  //   },
  //   {
  //     title: "Tech Talk: AI in Robotics",
  //     date: "2024-01-15",
  //     time: "3:00 PM - 4:30 PM",
  //     location: "Conference Room B",
  //     description: "Guest lecture on the integration of artificial intelligence in modern robotics",
  //     attendees: 65,
  //     status: "completed",
  //     category: "Seminar",
  //   },
  // ]
  useEffect(() => {
    getevents(); // <-- actually call the function
  }, []);
  const upcomingEvents = events.filter((event) => event.status === "upcoming")
  const pastEvents = events.filter((event) => event.status === "completed")

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
            Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for exciting workshops, competitions, and tech talks that will expand your knowledge and skills.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-purple-800/30 p-6 rounded-xl border border-purple-500/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500 to-cyan-500 text-black px-4 py-1 text-sm font-semibold">
                  {event.category}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white pr-20">{event.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Calendar size={16} />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Users size={16} />
                    <span>{event.attendees} registered</span>
                  </div>
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

        {/* Past Events */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <h2 className="text-3xl font-bold mb-8 text-purple-400">Past Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/30 to-purple-800/20 p-6 rounded-xl border border-gray-600/20 opacity-80"
              >
                <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 text-sm rounded-full">
                  {event.category}
                </div>

                <h3 className="text-lg font-bold mb-3 text-gray-300 pr-20">{event.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{event.description}</p>

                <div className="space-y-1 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>{event.attendees} attended</span>
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
