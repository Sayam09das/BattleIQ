import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Trophy, Clock, Zap, Users, Gift, Star, Flame } from 'lucide-react'

const SeasonalBattles = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [activeEvent, setActiveEvent] = useState(null)

    const currentEvents = [
        {
            id: 1,
            title: "Winter Wonderland Quiz",
            season: "Winter Special",
            description: "Test your knowledge in this frosty challenge filled with winter trivia!",
            timeLeft: "2 days 14 hours",
            participants: "12,847",
            reward: "Exclusive Snowflake Badge",
            difficulty: "Medium",
            icon: "❄️",
            gradient: "from-blue-400/20 to-cyan-400/20"
        },
        {
            id: 2,
            title: "Holiday Spirit Showdown",
            season: "Festive Event",
            description: "Celebrate the season with questions about global holiday traditions!",
            timeLeft: "5 days 8 hours",
            participants: "18,392",
            reward: "Golden Star Trophy",
            difficulty: "Hard",
            icon: "🎄",
            gradient: "from-red-400/20 to-green-400/20"
        },
        {
            id: 3,
            title: "New Year Brain Blast",
            season: "Limited Edition",
            description: "Ring in the new year with explosive trivia challenges!",
            timeLeft: "12 hours",
            participants: "9,234",
            reward: "Fireworks Avatar Frame",
            difficulty: "Easy",
            icon: "🎆",
            gradient: "from-purple-400/20 to-pink-400/20"
        }
    ]

    const features = [
        { icon: Calendar, title: "Seasonal Themes", desc: "Unique quizzes for every season" },
        { icon: Clock, title: "Limited Time", desc: "Available only for event duration" },
        { icon: Trophy, title: "Exclusive Rewards", desc: "Special badges & achievements" },
        { icon: Users, title: "Community Events", desc: "Compete with players worldwide" }
    ]

    const upcomingEvents = [
        { name: "Valentine's Day Love Quest", date: "Feb 14, 2025", icon: "💝" },
        { name: "Spring Bloom Challenge", date: "Mar 20, 2025", icon: "🌸" },
        { name: "Easter Egg Hunt Quiz", date: "Apr 20, 2025", icon: "🥚" },
        { name: "Summer Solstice Battle", date: "Jun 21, 2025", icon: "☀️" }
    ]

    return (
        <div className="min-h-screen bg-[#3B132A] text-[#F3EFDA] overflow-hidden relative">
            {/* Animated Geometric Background */}
            <div className="absolute inset-0">
                {/* Large Circle - Top Left */}
                <motion.div
                    className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleLeft }}
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Large Circle - Bottom Right */}
                <motion.div
                    className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleRight }}
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20"
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${30 + i * 10}%`
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
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
                        <Flame className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Limited Time Events</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Seasonal Battles
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Join exclusive quiz events that celebrate the seasons! Compete for limited-time rewards,
                        special badges, and glory on the leaderboards before time runs out.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 hover:bg-[#F3EFDA]/10 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(243, 239, 218, 0.4)" }}
                        >
                            <feature.icon className="w-10 h-10 text-[#F3EFDA] mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-[#F3EFDA]/70 text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Active Events */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Zap className="w-6 h-6 text-[#F3EFDA]" />
                        <h2 className="text-3xl font-bold">Active Events</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {currentEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                className="relative bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-6 overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ scale: 1.03 }}
                                onClick={() => setActiveEvent(event.id)}
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-50`} />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <span className="text-5xl">{event.icon}</span>
                                        <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs font-medium">
                                            {event.difficulty}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-[#F3EFDA]/60 text-sm mb-1">{event.season}</p>
                                    <p className="text-[#F3EFDA]/80 text-sm mb-4">{event.description}</p>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-[#F3EFDA]/90">Ends in: <strong>{event.timeLeft}</strong></span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Users className="w-4 h-4" />
                                            <span className="text-[#F3EFDA]/90">{event.participants} participants</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Gift className="w-4 h-4" />
                                            <span className="text-[#F3EFDA]/90">{event.reward}</span>
                                        </div>
                                    </div>

                                    <motion.button
                                        className="w-full bg-[#F3EFDA] text-[#3B132A] font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Join Battle
                                    </motion.button>
                                </div>

                                {/* Animated corner accent */}
                                <motion.div
                                    className="absolute -right-4 -top-4 w-24 h-24 bg-[#F3EFDA]/10 rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Events */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Star className="w-6 h-6 text-[#F3EFDA]" />
                        <h2 className="text-3xl font-bold">Coming Soon</h2>
                    </div>

                    <div className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {upcomingEvents.map((event, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-[#F3EFDA]/5 rounded-xl border border-[#F3EFDA]/10 hover:bg-[#F3EFDA]/10 transition-all"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-4xl">{event.icon}</span>
                                    <div className="flex-1">
                                        <h4 className="font-semibold mb-1">{event.name}</h4>
                                        <p className="text-[#F3EFDA]/60 text-sm">{event.date}</p>
                                    </div>
                                    <Calendar className="w-5 h-5 text-[#F3EFDA]/40" />
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="mt-8 text-center"
                            animate={{
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <p className="text-[#F3EFDA]/70 text-sm">
                                🔔 Enable notifications to never miss a seasonal event!
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="mt-16 text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Trophy className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Don't Miss Out!</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Seasonal battles offer exclusive rewards that you can't get anywhere else.
                        Join now and climb the leaderboards before time runs out!
                    </p>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Zap className="w-5 h-5" />
                        View All Active Battles
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default SeasonalBattles