import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Clock, Users, Video, Play, Download, BookOpen, Brain, Trophy, Zap, Globe, Target, Award, Bell, ExternalLink, MapPin, User } from 'lucide-react'

const EventsWebinars = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [activeTab, setActiveTab] = useState('upcoming')

    const upcomingEvents = [
        {
            id: 1,
            title: "Mastering AI-Powered Quiz Creation",
            type: "Workshop",
            date: "Oct 25, 2025",
            time: "3:00 PM EST",
            duration: "90 minutes",
            speaker: "Dr. Sarah Chen",
            speakerRole: "AI Education Expert",
            attendees: 1847,
            maxAttendees: 2000,
            description: "Learn how to leverage AI to create engaging, personalized quizzes that adapt to different learning styles. We'll cover advanced techniques and best practices.",
            topics: ["AI Tools", "Quiz Design", "Personalization"],
            level: "Intermediate",
            image: "bg-gradient-to-br from-purple-500/30 to-blue-500/30",
            featured: true
        },
        {
            id: 2,
            title: "Speed Tournament Strategies Live Demo",
            type: "Live Demo",
            date: "Oct 28, 2025",
            time: "6:00 PM EST",
            duration: "60 minutes",
            speaker: "Alex Kumar",
            speakerRole: "Top 10 Global Player",
            attendees: 2341,
            maxAttendees: 3000,
            description: "Watch a live tournament with real-time strategy explanations from one of our top-ranked players. Q&A session included.",
            topics: ["Competitive Play", "Time Management", "Strategy"],
            level: "Advanced",
            image: "bg-gradient-to-br from-orange-500/30 to-red-500/30",
            featured: true
        },
        {
            id: 3,
            title: "Building Effective Study Groups",
            type: "Workshop",
            date: "Oct 30, 2025",
            time: "4:00 PM EST",
            duration: "75 minutes",
            speaker: "Prof. Michael Roberts",
            speakerRole: "Education Specialist",
            attendees: 892,
            maxAttendees: 1500,
            description: "Discover best practices for creating and managing study groups that maximize learning outcomes and engagement.",
            topics: ["Collaboration", "Study Techniques", "Team Building"],
            level: "Beginner",
            image: "bg-gradient-to-br from-green-500/30 to-teal-500/30",
            featured: false
        },
        {
            id: 4,
            title: "Gamification in Education: A Deep Dive",
            type: "Webinar",
            date: "Nov 2, 2025",
            time: "2:00 PM EST",
            duration: "120 minutes",
            speaker: "Dr. Emily Thompson",
            speakerRole: "EdTech Researcher",
            attendees: 1523,
            maxAttendees: 2500,
            description: "Explore the psychology behind gamification and how it transforms learning experiences. Case studies and practical applications included.",
            topics: ["Gamification", "Psychology", "Learning Science"],
            level: "Intermediate",
            image: "bg-gradient-to-br from-pink-500/30 to-purple-500/30",
            featured: false
        },
        {
            id: 5,
            title: "Preparing Students for Global Competitions",
            type: "Workshop",
            date: "Nov 5, 2025",
            time: "5:00 PM EST",
            duration: "90 minutes",
            speaker: "Coach Jennifer Lee",
            speakerRole: "Tournament Coordinator",
            attendees: 756,
            maxAttendees: 1200,
            description: "A comprehensive guide for educators on preparing students for competitive quiz tournaments at regional and global levels.",
            topics: ["Competition Prep", "Coaching", "Team Strategy"],
            level: "Intermediate",
            image: "bg-gradient-to-br from-yellow-500/30 to-orange-500/30",
            featured: false
        }
    ]

    const pastWebinars = [
        {
            id: 1,
            title: "The Future of AI in Education",
            date: "Oct 10, 2025",
            duration: "105 minutes",
            views: 15234,
            rating: 4.9,
            speaker: "Dr. Sarah Chen",
            topics: ["AI", "Education Technology", "Innovation"],
            thumbnail: "bg-gradient-to-br from-blue-500/30 to-cyan-500/30"
        },
        {
            id: 2,
            title: "Quiz Creation Masterclass",
            date: "Oct 5, 2025",
            duration: "90 minutes",
            views: 12890,
            rating: 4.8,
            speaker: "Prof. Michael Roberts",
            topics: ["Quiz Design", "Best Practices", "Engagement"],
            thumbnail: "bg-gradient-to-br from-purple-500/30 to-pink-500/30"
        },
        {
            id: 3,
            title: "Student Success Stories Panel",
            date: "Sep 28, 2025",
            duration: "75 minutes",
            views: 10567,
            rating: 4.9,
            speaker: "Multiple Speakers",
            topics: ["Success Stories", "Motivation", "Tips"],
            thumbnail: "bg-gradient-to-br from-green-500/30 to-teal-500/30"
        },
        {
            id: 4,
            title: "Advanced Tournament Strategies",
            date: "Sep 20, 2025",
            duration: "80 minutes",
            views: 9234,
            rating: 4.7,
            speaker: "Alex Kumar",
            topics: ["Tournaments", "Strategy", "Competition"],
            thumbnail: "bg-gradient-to-br from-red-500/30 to-orange-500/30"
        }
    ]

    const eventTypes = [
        { name: "All Events", count: upcomingEvents.length },
        { name: "Workshops", count: upcomingEvents.filter(e => e.type === "Workshop").length },
        { name: "Webinars", count: upcomingEvents.filter(e => e.type === "Webinar").length },
        { name: "Live Demos", count: upcomingEvents.filter(e => e.type === "Live Demo").length }
    ]

    const stats = [
        { icon: Calendar, value: "50+", label: "Events This Year" },
        { icon: Users, value: "125K+", label: "Total Attendees" },
        { icon: Video, value: "200+", label: "Recorded Sessions" },
        { icon: Award, value: "4.8/5", label: "Avg. Rating" }
    ]

    return (
        <div className="min-h-screen bg-[#3B132A] text-[#F3EFDA] overflow-hidden relative">
            {/* Animated Geometric Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleLeft }}
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleRight }}
                    animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20"
                        style={{ left: `${20 + i * 20}%`, top: `${30 + i * 10}%` }}
                        animate={{ y: [-20, 20, -20], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-[#F3EFDA]/10 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-full px-6 py-2 mb-6"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(243, 239, 218, 0.1)",
                                "0 0 40px rgba(243, 239, 218, 0.2)",
                                "0 0 20px rgba(243, 239, 218, 0.1)"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Video className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Learn & Connect Live</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Events & Webinars
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Join live workshops, webinars, and demos from education experts. Learn strategies,
                        discover new features, and connect with the community in real-time.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <stat.icon className="w-8 h-8 text-[#F3EFDA] mx-auto mb-3" />
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-sm text-[#F3EFDA]/70">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
                    {['upcoming', 'past'].map((tab) => (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${activeTab === tab
                                    ? 'bg-[#F3EFDA] text-[#3B132A]'
                                    : 'bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/20'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tab === 'upcoming' ? '📅 Upcoming Events' : '🎬 Past Webinars'}
                        </motion.button>
                    ))}
                </div>

                {/* Upcoming Events Tab */}
                {activeTab === 'upcoming' && (
                    <div className="space-y-8">
                        {/* Featured Events */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {upcomingEvents.filter(e => e.featured).map((event, index) => (
                                    <motion.div
                                        key={event.id}
                                        className={`relative ${event.image} backdrop-blur-sm border-2 border-[#F3EFDA]/30 rounded-3xl overflow-hidden`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="bg-[#3B132A]/80 backdrop-blur-sm p-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-4 py-1 text-sm font-semibold">
                                                    {event.type}
                                                </span>
                                                <span className="bg-purple-400/20 border border-purple-400/40 rounded-full px-4 py-1 text-sm font-semibold text-purple-400">
                                                    Featured
                                                </span>
                                                <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-4 py-1 text-sm font-semibold">
                                                    {event.level}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                                            <p className="text-[#F3EFDA]/80 mb-4">{event.description}</p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {event.topics.map((topic, idx) => (
                                                    <span key={idx} className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded px-3 py-1 text-xs">
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Calendar className="w-4 h-4 text-[#F3EFDA]/60" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Clock className="w-4 h-4 text-[#F3EFDA]/60" />
                                                    <span>{event.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <User className="w-4 h-4 text-[#F3EFDA]/60" />
                                                    <span>{event.speaker}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Users className="w-4 h-4 text-[#F3EFDA]/60" />
                                                    <span>{event.attendees}/{event.maxAttendees}</span>
                                                </div>
                                            </div>

                                            <div className="h-2 bg-[#F3EFDA]/10 rounded-full overflow-hidden mb-4">
                                                <div
                                                    className="h-full bg-gradient-to-r from-green-400 to-green-600"
                                                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                                                />
                                            </div>

                                            <motion.button
                                                className="w-full bg-[#F3EFDA] text-[#3B132A] font-bold py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Bell className="w-5 h-5" />
                                                Register Now
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* All Upcoming Events */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">All Upcoming Events</h2>
                            <div className="space-y-6">
                                {upcomingEvents.map((event, index) => (
                                    <motion.div
                                        key={event.id}
                                        className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl overflow-hidden hover:bg-[#F3EFDA]/10 transition-all"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.05 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="md:flex">
                                            <div className={`${event.image} md:w-64 h-48 md:h-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-[#F3EFDA]/20`}>
                                                <Video className="w-16 h-16 text-[#F3EFDA]/30" />
                                            </div>
                                            <div className="p-6 flex-1">
                                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                                    <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs font-semibold">
                                                        {event.type}
                                                    </span>
                                                    <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs font-semibold">
                                                        {event.level}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                                <p className="text-sm text-[#F3EFDA]/70 mb-4 line-clamp-2">{event.description}</p>
                                                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4 text-[#F3EFDA]/60" />
                                                        <span>{event.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-[#F3EFDA]/60" />
                                                        <span>{event.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <User className="w-4 h-4 text-[#F3EFDA]/60" />
                                                        <span>{event.speaker}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Users className="w-4 h-4 text-[#F3EFDA]/60" />
                                                        <span>{event.attendees} registered</span>
                                                    </div>
                                                </div>
                                                <motion.button
                                                    className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold px-6 py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all flex items-center gap-2"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Register
                                                    <ExternalLink className="w-4 h-4" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Past Webinars Tab */}
                {activeTab === 'past' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold">Recorded Webinars</h2>
                            <p className="text-[#F3EFDA]/70">Watch on-demand anytime</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pastWebinars.map((webinar, index) => (
                                <motion.div
                                    key={webinar.id}
                                    className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl overflow-hidden hover:bg-[#F3EFDA]/10 transition-all cursor-pointer"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className={`${webinar.thumbnail} h-48 flex items-center justify-center border-b border-[#F3EFDA]/20 relative`}>
                                        <motion.div
                                            className="bg-[#F3EFDA]/20 backdrop-blur-sm border border-[#F3EFDA]/30 rounded-full p-4"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Play className="w-8 h-8" />
                                        </motion.div>
                                        <div className="absolute bottom-2 right-2 bg-[#3B132A]/80 backdrop-blur-sm rounded px-2 py-1 text-xs">
                                            {webinar.duration}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold mb-2">{webinar.title}</h3>
                                        <p className="text-sm text-[#F3EFDA]/70 mb-3">{webinar.speaker}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {webinar.topics.map((topic, idx) => (
                                                <span key={idx} className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded px-2 py-1 text-xs">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                {webinar.views.toLocaleString()} views
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Award className="w-4 h-4 text-yellow-400" />
                                                {webinar.rating}/5
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <motion.div
                    className="mt-16 text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Calendar className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Never Miss an Event</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Subscribe to our event calendar and get notified about upcoming workshops, webinars,
                        and live demos from education experts.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Bell className="w-5 h-5" />
                            Subscribe to Updates
                        </motion.button>
                        <motion.button
                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#F3EFDA] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/30 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="w-5 h-5" />
                            Download Calendar
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default EventsWebinars