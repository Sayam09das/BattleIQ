import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe, Trophy, Zap, Users, Medal, Clock, Target, Crown, Flag, TrendingUp, Play, Award, Timer } from 'lucide-react'

const GlobalTournaments = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [activeTab, setActiveTab] = useState('live')
    const [liveCount, setLiveCount] = useState(47823)

    // Simulate live player count
    useEffect(() => {
        const interval = setInterval(() => {
            setLiveCount(prev => prev + Math.floor(Math.random() * 10))
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const liveTournaments = [
        {
            id: 1,
            title: "World Knowledge Championship",
            category: "General Knowledge",
            prize: "$10,000",
            participants: 28472,
            timeLeft: "2h 34m",
            difficulty: "Hard",
            flag: "🌍",
            status: "Live Now",
            entries: "Open",
            regions: ["NA", "EU", "ASIA", "SA"]
        },
        {
            id: 2,
            title: "Speed Quiz Masters",
            category: "Mixed Topics",
            prize: "$5,000",
            participants: 15839,
            timeLeft: "45m",
            difficulty: "Medium",
            flag: "⚡",
            status: "Live Now",
            entries: "Filling Fast",
            regions: ["EU", "ASIA"]
        },
        {
            id: 3,
            title: "Science Olympiad Global",
            category: "Science",
            prize: "$7,500",
            participants: 12394,
            timeLeft: "1h 15m",
            difficulty: "Expert",
            flag: "🔬",
            status: "Live Now",
            entries: "Open",
            regions: ["NA", "EU", "OCEANIA"]
        }
    ]

    const upcomingTournaments = [
        {
            title: "History Legends Battle",
            category: "History",
            prize: "$15,000",
            startsIn: "6 hours",
            expectedPlayers: "50K+",
            flag: "🏛️"
        },
        {
            title: "Math Genius Challenge",
            category: "Mathematics",
            prize: "$8,000",
            startsIn: "12 hours",
            expectedPlayers: "30K+",
            flag: "🧮"
        },
        {
            title: "Pop Culture Showdown",
            category: "Entertainment",
            prize: "$6,000",
            startsIn: "1 day",
            expectedPlayers: "40K+",
            flag: "🎬"
        }
    ]

    const topPlayers = [
        { rank: 1, name: "QuizMaster_JP", country: "🇯🇵", score: 98500, wins: 234, avatar: "bg-yellow-400" },
        { rank: 2, name: "BrainStorm_US", country: "🇺🇸", score: 97200, wins: 198, avatar: "bg-gray-300" },
        { rank: 3, name: "Genius_DE", country: "🇩🇪", score: 95800, wins: 187, avatar: "bg-orange-400" },
        { rank: 4, name: "SmartKid_BR", country: "🇧🇷", score: 94300, wins: 176, avatar: "bg-blue-400" },
        { rank: 5, name: "ThinkFast_IN", country: "🇮🇳", score: 93100, wins: 165, avatar: "bg-green-400" }
    ]

    const stats = [
        { icon: Users, value: liveCount.toLocaleString(), label: "Players Online" },
        { icon: Globe, value: "127", label: "Countries" },
        { icon: Trophy, value: "1.2M+", label: "Total Prizes" },
        { icon: Zap, value: "24/7", label: "Active Events" }
    ]

    const achievements = [
        { icon: "🏆", title: "Tournament Victor", desc: "Win your first global tournament" },
        { icon: "🌟", title: "Speed Demon", desc: "Finish in top 3 for speed category" },
        { icon: "👑", title: "World Champion", desc: "Reach #1 on global leaderboard" },
        { icon: "🔥", title: "Streak Master", desc: "Win 5 tournaments in a row" }
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
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Globe className="w-4 h-4 text-[#F3EFDA]" />
                        </motion.div>
                        <span className="text-sm font-medium">Compete Globally</span>
                        <motion.span
                            className="w-2 h-2 bg-green-400 rounded-full"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Global Tournaments
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Challenge the world's best minds in real-time quiz battles. Compete for glory,
                        massive prizes, and claim your spot on the global leaderboard!
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(243, 239, 218, 0.4)" }}
                        >
                            <stat.icon className="w-8 h-8 text-[#F3EFDA] mx-auto mb-3" />
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-[#F3EFDA]/70 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    {['live', 'upcoming', 'leaderboard'].map((tab) => (
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
                            {tab === 'live' && '🔴 Live Tournaments'}
                            {tab === 'upcoming' && '📅 Upcoming'}
                            {tab === 'leaderboard' && '🏆 Leaderboard'}
                        </motion.button>
                    ))}
                </div>

                {/* Live Tournaments */}
                {activeTab === 'live' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {liveTournaments.map((tournament, index) => (
                                <motion.div
                                    key={tournament.id}
                                    className="relative bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-6 overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    {/* Status Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <motion.div
                                            className="flex items-center gap-2 bg-red-500/20 border border-red-500/40 rounded-full px-3 py-1"
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                                            <span className="text-xs font-semibold">{tournament.status}</span>
                                        </motion.div>
                                        <span className="text-3xl">{tournament.flag}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">{tournament.title}</h3>
                                    <p className="text-[#F3EFDA]/60 text-sm mb-4">{tournament.category}</p>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#F3EFDA]/70 text-sm flex items-center gap-2">
                                                <Trophy className="w-4 h-4" />
                                                Prize Pool
                                            </span>
                                            <span className="font-bold text-lg text-[#F3EFDA]">{tournament.prize}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#F3EFDA]/70 text-sm flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                Participants
                                            </span>
                                            <span className="font-semibold">{tournament.participants.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#F3EFDA]/70 text-sm flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                Time Left
                                            </span>
                                            <span className="font-semibold text-orange-300">{tournament.timeLeft}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#F3EFDA]/70 text-sm">Difficulty</span>
                                            <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs font-medium">
                                                {tournament.difficulty}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-xs text-[#F3EFDA]/60 mb-2">Active Regions</div>
                                        <div className="flex gap-2 flex-wrap">
                                            {tournament.regions.map((region, i) => (
                                                <span key={i} className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-3 py-1 text-xs">
                                                    {region}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.button
                                        className="w-full bg-[#F3EFDA] text-[#3B132A] font-bold py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Play className="w-5 h-5" />
                                        Join Tournament
                                    </motion.button>

                                    {/* Animated glow */}
                                    <motion.div
                                        className="absolute -right-8 -top-8 w-32 h-32 bg-[#F3EFDA]/10 rounded-full blur-3xl"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Upcoming Tournaments */}
                {activeTab === 'upcoming' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcomingTournaments.map((tournament, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 hover:bg-[#F3EFDA]/10 transition-all"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <span className="text-4xl mb-4 block">{tournament.flag}</span>
                                    <h3 className="text-xl font-bold mb-2">{tournament.title}</h3>
                                    <p className="text-[#F3EFDA]/60 text-sm mb-4">{tournament.category}</p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-[#F3EFDA]/70">Starts In</span>
                                            <span className="font-semibold">{tournament.startsIn}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-[#F3EFDA]/70">Prize Pool</span>
                                            <span className="font-bold text-[#F3EFDA]">{tournament.prize}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-[#F3EFDA]/70">Expected</span>
                                            <span className="font-semibold">{tournament.expectedPlayers}</span>
                                        </div>
                                    </div>
                                    <motion.button
                                        className="w-full bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#F3EFDA] font-semibold py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Set Reminder
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Leaderboard */}
                {activeTab === 'leaderboard' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Crown className="w-6 h-6 text-yellow-400" />
                                <h2 className="text-2xl font-bold">Top Global Players</h2>
                            </div>
                            <div className="space-y-4">
                                {topPlayers.map((player, index) => (
                                    <motion.div
                                        key={index}
                                        className={`flex items-center gap-4 p-4 rounded-2xl ${player.rank <= 3
                                                ? 'bg-gradient-to-r from-[#F3EFDA]/20 to-[#F3EFDA]/10 border-2 border-[#F3EFDA]/30'
                                                : 'bg-[#F3EFDA]/5 border border-[#F3EFDA]/10'
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg ${player.rank === 1 ? 'bg-yellow-400 text-[#3B132A]' :
                                                player.rank === 2 ? 'bg-gray-300 text-[#3B132A]' :
                                                    player.rank === 3 ? 'bg-orange-400 text-[#3B132A]' :
                                                        'bg-[#F3EFDA]/20 text-[#F3EFDA]'
                                            }`}>
                                            #{player.rank}
                                        </div>
                                        <div className={`w-10 h-10 rounded-full ${player.avatar}`} />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-bold">{player.name}</h4>
                                                <span className="text-lg">{player.country}</span>
                                            </div>
                                            <p className="text-[#F3EFDA]/60 text-sm">{player.wins} tournament wins</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-lg">{player.score.toLocaleString()}</div>
                                            <div className="text-[#F3EFDA]/60 text-xs">total points</div>
                                        </div>
                                        {player.rank <= 3 && (
                                            <Medal className={`w-6 h-6 ${player.rank === 1 ? 'text-yellow-400' :
                                                    player.rank === 2 ? 'text-gray-300' :
                                                        'text-orange-400'
                                                }`} />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="w-6 h-6 text-[#F3EFDA]" />
                        <h2 className="text-3xl font-bold">Tournament Achievements</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 text-center hover:bg-[#F3EFDA]/10 transition-all"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-5xl mb-4 block">{achievement.icon}</span>
                                <h4 className="font-bold mb-2">{achievement.title}</h4>
                                <p className="text-[#F3EFDA]/70 text-sm">{achievement.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Globe className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Ready to Compete?</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Join millions of players worldwide in epic quiz battles. Test your knowledge,
                        climb the ranks, and become a global champion!
                    </p>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Zap className="w-5 h-5" />
                        Join Live Tournament
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default GlobalTournaments