import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, MessageSquare, Trophy, Globe, Star, TrendingUp, Award, Flame, Target, Shield, Heart, Zap, Crown, UserPlus, Search, Filter, Calendar, MapPin } from 'lucide-react'

const Community = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [activeTab, setActiveTab] = useState('overview')

    const stats = [
        { icon: Users, value: "3M+", label: "Community Members" },
        { icon: MessageSquare, value: "50K+", label: "Daily Discussions" },
        { icon: Trophy, value: "15K+", label: "Active Tournaments" },
        { icon: Globe, value: "156", label: "Countries" }
    ]

    const topPlayers = [
        {
            rank: 1,
            name: "QuizMaster_JP",
            country: "🇯🇵",
            avatar: "bg-yellow-400",
            points: 15420,
            achievements: 89,
            winRate: 94
        },
        {
            rank: 2,
            name: "BrainStorm_US",
            country: "🇺🇸",
            avatar: "bg-gray-300",
            points: 14890,
            achievements: 82,
            winRate: 92
        },
        {
            rank: 3,
            name: "Genius_DE",
            country: "🇩🇪",
            avatar: "bg-orange-400",
            points: 14320,
            achievements: 78,
            winRate: 91
        },
        {
            rank: 4,
            name: "SmartKid_BR",
            country: "🇧🇷",
            avatar: "bg-blue-400",
            points: 13780,
            achievements: 75,
            winRate: 89
        },
        {
            rank: 5,
            name: "Scholar_IN",
            country: "🇮🇳",
            avatar: "bg-green-400",
            points: 13240,
            achievements: 71,
            winRate: 88
        }
    ]

    const forumTopics = [
        {
            id: 1,
            title: "Best strategies for speed tournaments?",
            author: "SpeedDemon42",
            category: "Strategies",
            replies: 156,
            views: 2341,
            lastActive: "5 min ago",
            isHot: true
        },
        {
            id: 2,
            title: "Looking for study group members - History",
            author: "HistoryBuff92",
            category: "Study Groups",
            replies: 34,
            views: 567,
            lastActive: "12 min ago",
            isHot: false
        },
        {
            id: 3,
            title: "How to improve quiz creation skills?",
            author: "CreativeTeacher",
            category: "Quiz Creation",
            replies: 89,
            views: 1234,
            lastActive: "25 min ago",
            isHot: true
        },
        {
            id: 4,
            title: "Regional tournament - Asia Pacific signups",
            author: "TournamentOrg",
            category: "Tournaments",
            replies: 267,
            views: 4523,
            lastActive: "1 hour ago",
            isHot: true
        }
    ]

    const groups = [
        {
            name: "Math Wizards",
            icon: "🧮",
            members: 12847,
            category: "Subject",
            description: "Master mathematics through collaborative problem-solving",
            activity: "Very Active"
        },
        {
            name: "Science Squad",
            icon: "🔬",
            members: 9234,
            category: "Subject",
            description: "Explore the wonders of science together",
            activity: "Very Active"
        },
        {
            name: "History Buffs",
            icon: "📜",
            members: 7892,
            category: "Subject",
            description: "Journey through time with fellow history enthusiasts",
            activity: "Active"
        },
        {
            name: "Teacher Network",
            icon: "👨‍🏫",
            members: 15623,
            category: "Educators",
            description: "Educators sharing resources and best practices",
            activity: "Very Active"
        },
        {
            name: "Student Alliance",
            icon: "🎓",
            members: 23456,
            category: "Students",
            description: "Students supporting students in their learning journey",
            activity: "Very Active"
        },
        {
            name: "Quiz Creators",
            icon: "✍️",
            members: 5678,
            category: "Creators",
            description: "Design engaging quizzes and share tips",
            activity: "Active"
        }
    ]

    const tournaments = [
        {
            name: "Global Championship 2025",
            region: "Worldwide",
            icon: "🌍",
            participants: 45000,
            prize: "$50,000",
            startDate: "Nov 15, 2025",
            status: "Registration Open"
        },
        {
            name: "European Quiz League",
            region: "Europe",
            icon: "🇪🇺",
            participants: 18000,
            prize: "$15,000",
            startDate: "Nov 1, 2025",
            status: "Ongoing"
        },
        {
            name: "Asian Knowledge Cup",
            region: "Asia",
            icon: "🏆",
            participants: 23000,
            prize: "$20,000",
            startDate: "Oct 28, 2025",
            status: "Ongoing"
        }
    ]

    const topCreators = [
        {
            name: "Dr. Sarah Chen",
            avatar: "bg-purple-400",
            quizzes: 342,
            followers: 15234,
            rating: 4.9,
            specialty: "Science & Technology"
        },
        {
            name: "Prof. Michael Roberts",
            avatar: "bg-blue-400",
            quizzes: 287,
            followers: 12890,
            rating: 4.8,
            specialty: "History & Culture"
        },
        {
            name: "Emily Thompson",
            avatar: "bg-pink-400",
            quizzes: 234,
            followers: 10567,
            rating: 4.9,
            specialty: "Languages & Literature"
        }
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
                        <Users className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Connect & Compete</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Community Hub
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Join millions of learners, educators, and quiz enthusiasts from around the world.
                        Compete, collaborate, and grow together in the BattleIQ community.
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
                    {['overview', 'forums', 'groups', 'tournaments', 'leaderboard'].map((tab) => (
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
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </motion.button>
                    ))}
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="space-y-12">
                        {/* Featured Tournaments */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Active Tournaments</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {tournaments.map((tournament, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <div className="text-5xl mb-4">{tournament.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{tournament.name}</h3>
                                        <p className="text-sm text-[#F3EFDA]/70 mb-4">{tournament.region}</p>
                                        <div className="space-y-2 text-sm mb-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[#F3EFDA]/70">Prize Pool</span>
                                                <span className="font-bold">{tournament.prize}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[#F3EFDA]/70">Participants</span>
                                                <span className="font-bold">{tournament.participants.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[#F3EFDA]/70">Starts</span>
                                                <span className="font-bold">{tournament.startDate}</span>
                                            </div>
                                        </div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tournament.status === 'Ongoing'
                                                ? 'bg-green-400/20 border border-green-400/40 text-green-400'
                                                : 'bg-blue-400/20 border border-blue-400/40 text-blue-400'
                                            }`}>
                                            {tournament.status}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Popular Groups */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Popular Groups</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {groups.slice(0, 6).map((group, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 hover:bg-[#F3EFDA]/10 transition-all"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.05 }}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <div className="text-5xl mb-4">{group.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{group.name}</h3>
                                        <p className="text-sm text-[#F3EFDA]/70 mb-4">{group.description}</p>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                {group.members.toLocaleString()} members
                                            </span>
                                            <span className={`px-2 py-1 rounded text-xs ${group.activity === 'Very Active'
                                                    ? 'bg-green-400/20 text-green-400'
                                                    : 'bg-yellow-400/20 text-yellow-400'
                                                }`}>
                                                {group.activity}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Forums Tab */}
                {activeTab === 'forums' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold">Discussion Forums</h2>
                            <motion.button
                                className="bg-[#F3EFDA] text-[#3B132A] font-bold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                New Topic
                            </motion.button>
                        </div>
                        <div className="space-y-4">
                            {forumTopics.map((topic, index) => (
                                <motion.div
                                    key={topic.id}
                                    className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 hover:bg-[#F3EFDA]/10 transition-all cursor-pointer"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                {topic.isHot && (
                                                    <Flame className="w-5 h-5 text-orange-400" />
                                                )}
                                                <h3 className="text-xl font-bold">{topic.title}</h3>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-[#F3EFDA]/70 mb-3">
                                                <span>by {topic.author}</span>
                                                <span>•</span>
                                                <span className="bg-[#F3EFDA]/10 px-2 py-1 rounded">{topic.category}</span>
                                                <span>•</span>
                                                <span>{topic.lastActive}</span>
                                            </div>
                                            <div className="flex items-center gap-6 text-sm">
                                                <span className="flex items-center gap-1">
                                                    <MessageSquare className="w-4 h-4" />
                                                    {topic.replies} replies
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Users className="w-4 h-4" />
                                                    {topic.views} views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Groups Tab */}
                {activeTab === 'groups' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold">All Groups</h2>
                            <motion.button
                                className="bg-[#F3EFDA] text-[#3B132A] font-bold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <UserPlus className="w-5 h-5" />
                                Create Group
                            </motion.button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {groups.map((group, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="text-5xl">{group.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-bold">{group.name}</h3>
                                                <span className="bg-[#F3EFDA]/20 px-2 py-1 rounded text-xs">{group.category}</span>
                                            </div>
                                            <p className="text-sm text-[#F3EFDA]/70 mb-4">{group.description}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm flex items-center gap-1">
                                                    <Users className="w-4 h-4" />
                                                    {group.members.toLocaleString()}
                                                </span>
                                                <motion.button
                                                    className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 px-4 py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all text-sm font-semibold"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Join Group
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tournaments Tab */}
                {activeTab === 'tournaments' && (
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Regional Tournaments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tournaments.map((tournament, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-8"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className="text-6xl mb-6 text-center">{tournament.icon}</div>
                                    <h3 className="text-2xl font-bold mb-3 text-center">{tournament.name}</h3>
                                    <p className="text-center text-[#F3EFDA]/70 mb-6">{tournament.region}</p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center justify-between p-3 bg-[#F3EFDA]/10 rounded-lg">
                                            <span className="text-sm text-[#F3EFDA]/70">Prize Pool</span>
                                            <span className="font-bold text-lg">{tournament.prize}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-[#F3EFDA]/10 rounded-lg">
                                            <span className="text-sm text-[#F3EFDA]/70">Participants</span>
                                            <span className="font-bold">{tournament.participants.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-[#F3EFDA]/10 rounded-lg">
                                            <span className="text-sm text-[#F3EFDA]/70 flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                Starts
                                            </span>
                                            <span className="font-bold">{tournament.startDate}</span>
                                        </div>
                                    </div>
                                    <motion.button
                                        className="w-full bg-[#F3EFDA] text-[#3B132A] font-bold py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {tournament.status === 'Ongoing' ? 'View Details' : 'Register Now'}
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Leaderboard Tab */}
                {activeTab === 'leaderboard' && (
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Top Players & Creators</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Top Players */}
                            <div className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Trophy className="w-6 h-6 text-yellow-400" />
                                    <h3 className="text-2xl font-bold">Top Players</h3>
                                </div>
                                <div className="space-y-4">
                                    {topPlayers.map((player, index) => (
                                        <motion.div
                                            key={index}
                                            className={`flex items-center gap-4 p-4 rounded-xl ${index < 3
                                                    ? 'bg-gradient-to-r from-[#F3EFDA]/20 to-[#F3EFDA]/10 border-2 border-[#F3EFDA]/30'
                                                    : 'bg-[#F3EFDA]/5'
                                                }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <div className={`flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg ${index === 0 ? 'bg-yellow-400 text-[#3B132A]' :
                                                    index === 1 ? 'bg-gray-300 text-[#3B132A]' :
                                                        index === 2 ? 'bg-orange-400 text-[#3B132A]' :
                                                            'bg-[#F3EFDA]/20 text-[#F3EFDA]'
                                                }`}>
                                                #{player.rank}
                                            </div>
                                            <div className={`w-12 h-12 rounded-full ${player.avatar} flex items-center justify-center text-xl font-bold`}>
                                                {player.name.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-bold">{player.name}</h4>
                                                    <span className="text-lg">{player.country}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-xs text-[#F3EFDA]/70">
                                                    <span>{player.achievements} achievements</span>
                                                    <span>•</span>
                                                    <span>{player.winRate}% win rate</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-lg">{player.points.toLocaleString()}</div>
                                                <div className="text-xs text-[#F3EFDA]/60">points</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Top Creators */}
                            <div className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Award className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-2xl font-bold">Top Creators</h3>
                                </div>
                                <div className="space-y-6">
                                    {topCreators.map((creator, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-[#F3EFDA]/5 rounded-xl p-6"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.03 }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className={`w-16 h-16 rounded-full ${creator.avatar} flex items-center justify-center text-2xl font-bold`}>
                                                    {creator.name.charAt(0)}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-lg mb-1">{creator.name}</h4>
                                                    <p className="text-sm text-[#F3EFDA]/70">{creator.specialty}</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 text-center">
                                                <div>
                                                    <div className="font-bold text-xl">{creator.quizzes}</div>
                                                    <div className="text-xs text-[#F3EFDA]/60">Quizzes</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-xl">{creator.followers.toLocaleString()}</div>
                                                    <div className="text-xs text-[#F3EFDA]/60">Followers</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-xl flex items-center justify-center gap-1">
                                                        <Star className="w-4 h-4 text-yellow-400" />
                                                        {creator.rating}
                                                    </div>
                                                    <div className="text-xs text-[#F3EFDA]/60">Rating</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
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
                    <Heart className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Join the Community</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Connect with millions of learners, compete in global tournaments, and share your
                        journey with a supportive community of quiz enthusiasts.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <UserPlus className="w-5 h-5" />
                            Create Your Profile
                        </motion.button>
                        <motion.button
                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#F3EFDA] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/30 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageSquare className="w-5 h-5" />
                            Explore Forums
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Community