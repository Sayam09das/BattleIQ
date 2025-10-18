import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Medal, Crown, Star, TrendingUp, Zap, Target, Award, Users, Globe, Filter, ChevronRight, Flame, Sparkles, ArrowUp } from 'lucide-react';

const Leaderboards = () => {
    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, 50]);

    const [activeTimeframe, setActiveTimeframe] = useState('allTime');
    const [activeCategory, setActiveCategory] = useState('global');

    const Clock = () => {
        const [time, setTime] = React.useState(new Date());

        React.useEffect(() => {
            const timer = setInterval(() => setTime(new Date()), 1000);
            return () => clearInterval(timer);
        }, []);

        return <span>{time.toLocaleTimeString()}</span>;
    };

    const features = [
        {
            icon: Trophy,
            title: "Multiple Timeframes",
            description: "View daily, weekly, monthly, and all-time rankings"
        },
        {
            icon: Filter,
            title: "Smart Filters",
            description: "Filter by topic, region, skill level, and more"
        },
        {
            icon: Users,
            title: "Player Profiles",
            description: "Click any player to view detailed stats and achievements"
        },
        {
            icon: Award,
            title: "Special Recognition",
            description: "Rising stars, top scorers, and monthly champions highlighted"
        }
    ];

    const stats = [
        { label: "Active Players", value: "500K+", icon: Users },
        { label: "Total Points", value: "50M+", icon: Target },
        { label: "Countries", value: "120+", icon: Globe },
        { label: "Daily Battles", value: "10K+", icon: Zap }
    ];

    const topPlayers = [
        {
            rank: 1,
            name: "QuizMaster Pro",
            avatar: "🧠",
            points: 245680,
            badges: 156,
            accuracy: 96,
            streak: 89,
            country: "🇺🇸 USA",
            level: "Grandmaster",
            change: 0
        },
        {
            rank: 2,
            name: "KnowledgeKing",
            avatar: "👑",
            points: 238920,
            badges: 142,
            accuracy: 94,
            streak: 76,
            country: "🇬🇧 UK",
            level: "Grandmaster",
            change: 1
        },
        {
            rank: 3,
            name: "BrainStorm",
            avatar: "⚡",
            points: 232450,
            badges: 138,
            accuracy: 95,
            streak: 82,
            country: "🇨🇦 Canada",
            level: "Master",
            change: -1
        },
        {
            rank: 4,
            name: "ThinkFast",
            avatar: "🎯",
            points: 228370,
            badges: 134,
            accuracy: 93,
            streak: 68,
            country: "🇦🇺 Australia",
            level: "Master",
            change: 2
        },
        {
            rank: 5,
            name: "QuizNinja",
            avatar: "🥷",
            points: 224890,
            badges: 129,
            accuracy: 92,
            streak: 71,
            country: "🇯🇵 Japan",
            level: "Master",
            change: 0
        },
        {
            rank: 6,
            name: "SmartGenius",
            avatar: "🌟",
            points: 219560,
            badges: 125,
            accuracy: 91,
            streak: 64,
            country: "🇩🇪 Germany",
            level: "Expert",
            change: 3
        },
        {
            rank: 7,
            name: "MindBender",
            avatar: "🧩",
            points: 216780,
            badges: 121,
            accuracy: 90,
            streak: 59,
            country: "🇫🇷 France",
            level: "Expert",
            change: -2
        },
        {
            rank: 8,
            name: "QuickThink",
            avatar: "💡",
            points: 213940,
            badges: 118,
            accuracy: 89,
            streak: 56,
            country: "🇮🇳 India",
            level: "Expert",
            change: 1
        }
    ];

    const risingStars = [
        {
            name: "NewbieChamp",
            avatar: "🌱",
            growth: "+342%",
            points: 45670,
            joined: "2 months ago"
        },
        {
            name: "FastLearner",
            avatar: "🚀",
            growth: "+298%",
            points: 38920,
            joined: "1 month ago"
        },
        {
            name: "QuizHunter",
            avatar: "🎪",
            growth: "+275%",
            points: 42150,
            joined: "3 weeks ago"
        }
    ];

    const topScorers = [
        {
            category: "Science",
            player: "LabCoat Hero",
            avatar: "🔬",
            points: 89450
        },
        {
            category: "Mathematics",
            player: "Number Wizard",
            avatar: "🔢",
            points: 92380
        },
        {
            category: "History",
            player: "Time Traveler",
            avatar: "⏳",
            points: 87920
        },
        {
            category: "Technology",
            player: "Code Master",
            avatar: "💻",
            points: 95670
        }
    ];

    const timeframes = [
        { label: "Today", value: "daily" },
        { label: "This Week", value: "weekly" },
        { label: "This Month", value: "monthly" },
        { label: "All Time", value: "allTime" }
    ];

    const categories = [
        { label: "Global", value: "global" },
        { label: "By Region", value: "region" },
        { label: "By Topic", value: "topic" },
        { label: "By Level", value: "level" }
    ];

    return (
        <div className="min-h-screen bg-[#3B132A] relative overflow-hidden">
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

                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20"
                        style={{ left: `${15 + i * 12}%`, top: `${20 + i * 8}%` }}
                        animate={{ y: [-20, 20, -20], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
                {/* Hero Section */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-block mb-6 relative"
                    >
                        <div className="bg-[#F3EFDA]/10 backdrop-blur-xl border border-[#F3EFDA]/30 rounded-full p-6 inline-block relative">
                            <Trophy className="w-16 h-16 md:w-20 md:h-20 text-[#F3EFDA]" />
                            {/* Orbiting medals */}
                            {['🥇', '🥈', '🥉'].map((medal, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-3xl"
                                    style={{
                                        top: `${50}%`,
                                        left: `${50}%`,
                                    }}
                                    animate={{
                                        rotate: [i * 120, i * 120 + 360],
                                        x: [0, Math.cos(i * (2 * Math.PI / 3)) * 60, 0],
                                        y: [0, Math.sin(i * (2 * Math.PI / 3)) * 60, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    {medal}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-[#F3EFDA] mb-6"
                    >
                        Leaderboards
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#F3EFDA]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Compete with the best globally! Track top performers, climb the ranks, and see how you stack up against quiz champions worldwide.
                    </motion.p>

                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#F3EFDA] text-[#3B132A] px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-3 relative overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <Target className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">View My Rank</span>
                    </motion.button>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24 max-w-6xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 text-center relative overflow-hidden group"
                        >
                            <motion.div
                                className="absolute inset-0 bg-[#F3EFDA]/5"
                                initial={{ y: "100%" }}
                                whileHover={{ y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <stat.icon className="w-10 h-10 text-[#F3EFDA] mx-auto mb-3 relative z-10" />
                            <p className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-2 relative z-10">{stat.value}</p>
                            <p className="text-[#F3EFDA]/70 text-sm md:text-base relative z-10">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="max-w-6xl mx-auto mb-12"
                >
                    <div className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Timeframe Filter */}
                            <div className="flex-1">
                                <h3 className="text-[#F3EFDA] font-semibold mb-3 flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Timeframe
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {timeframes.map((time) => (
                                        <motion.button
                                            key={time.value}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveTimeframe(time.value)}
                                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTimeframe === time.value
                                                    ? 'bg-[#F3EFDA] text-[#3B132A]'
                                                    : 'bg-[#F3EFDA]/10 text-[#F3EFDA] hover:bg-[#F3EFDA]/20'
                                                }`}
                                        >
                                            {time.label}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="flex-1">
                                <h3 className="text-[#F3EFDA] font-semibold mb-3 flex items-center gap-2">
                                    <Filter className="w-4 h-4" />
                                    Category
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((cat) => (
                                        <motion.button
                                            key={cat.value}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveCategory(cat.value)}
                                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeCategory === cat.value
                                                    ? 'bg-[#F3EFDA] text-[#3B132A]'
                                                    : 'bg-[#F3EFDA]/10 text-[#F3EFDA] hover:bg-[#F3EFDA]/20'
                                                }`}
                                        >
                                            {cat.label}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Top 3 Podium */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        🏆 Top Champions 🏆
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 items-end">
                        {/* 2nd Place */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                            className="order-2 md:order-1"
                        >
                            <div className="bg-gradient-to-br from-[#C0C0C0]/20 to-[#C0C0C0]/5 backdrop-blur-xl border-2 border-[#C0C0C0]/50 rounded-2xl p-6 text-center relative">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C0C0C0] text-[#3B132A] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                    2
                                </div>
                                <div className="text-6xl mb-3 mt-4">{topPlayers[1].avatar}</div>
                                <h3 className="text-xl font-bold text-[#F3EFDA] mb-1">{topPlayers[1].name}</h3>
                                <p className="text-[#F3EFDA]/70 text-sm mb-3">{topPlayers[1].country}</p>
                                <div className="bg-[#F3EFDA]/10 rounded-xl p-3 mb-3">
                                    <p className="text-2xl font-bold text-[#F3EFDA]">{topPlayers[1].points.toLocaleString()}</p>
                                    <p className="text-xs text-[#F3EFDA]/70">points</p>
                                </div>
                                <div className="flex justify-center gap-4 text-sm">
                                    <div>
                                        <p className="text-[#F3EFDA]/70">Accuracy</p>
                                        <p className="font-bold text-[#F3EFDA]">{topPlayers[1].accuracy}%</p>
                                    </div>
                                    <div>
                                        <p className="text-[#F3EFDA]/70">Streak</p>
                                        <p className="font-bold text-[#F3EFDA]">{topPlayers[1].streak}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 1st Place */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.1, type: "spring" }}
                            className="order-1 md:order-2 md:-mt-8"
                        >
                            <div className="bg-gradient-to-br from-[#FFD700]/30 to-[#FFD700]/10 backdrop-blur-xl border-2 border-[#FFD700]/60 rounded-2xl p-6 text-center relative shadow-2xl shadow-[#FFD700]/30">
                                <motion.div
                                    className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                                    animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Crown className="w-12 h-12 text-[#FFD700]" />
                                </motion.div>
                                <div className="text-7xl mb-3 mt-6">{topPlayers[0].avatar}</div>
                                <h3 className="text-2xl font-bold text-[#F3EFDA] mb-1 flex items-center justify-center gap-2">
                                    {topPlayers[0].name}
                                    <Sparkles className="w-5 h-5 text-[#FFD700]" />
                                </h3>
                                <p className="text-[#F3EFDA]/70 text-sm mb-3">{topPlayers[0].country}</p>
                                <div className="bg-[#FFD700]/20 rounded-xl p-4 mb-4">
                                    <p className="text-3xl font-bold text-[#FFD700]">{topPlayers[0].points.toLocaleString()}</p>
                                    <p className="text-xs text-[#F3EFDA]/70">points</p>
                                </div>
                                <div className="flex justify-center gap-6 text-sm">
                                    <div>
                                        <p className="text-[#F3EFDA]/70">Accuracy</p>
                                        <p className="font-bold text-[#F3EFDA]">{topPlayers[0].accuracy}%</p>
                                    </div>
                                    <div>
                                        <p className="text-[#F3EFDA]/70">Streak</p>
                                        <p className="font-bold text-[#F3EFDA]">{topPlayers[0].streak}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3rd Place */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, type: "spring" }}
                            className="order-3"
                        >
                            <div className="bg-gradient-to-br from-[#CD7F32]/20 to-[#CD7F32]/5 backdrop-blur-xl border-2 border-[#CD7F32]/50 rounded-2xl p-6 text-center relative">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#CD7F32] text-[#3B132A] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                    3
                                </div>
                                <div className="text-6xl mb-3 mt-4">{topPlayers[2].avatar}</div>
                                <h3 className="text-xl font-bold text-[#F3EFDA] mb-1">{topPlayers[2].name}</h3>
                                <p className="text-[#F3EFDA]/70 text-sm mb-3">{topPlayers[2].country}</p>
                                <div className="bg-[#F3EFDA]/10 rounded-xl p-3 mb-3">
                                    <p className="text-2xl font-bold text-[#F3EFDA]">{topPlayers[2].points.toLocaleString()}</p>
                                    <p className="text-xs text-[#F3EFDA]/70">points</p>
                                </div>
                                <div className="flex justify-center gap-4 text-sm">
                                    <div>
                                        <p className="text-[#F3EFDA]/70">Accuracy</p>
                                        <p className="font-bold text-[#F3EFDA]">{topPlayers[2].accuracy}%</p>
                                    </div>
                                    <div>
                                        <p className="text-[#F3EFDA]/70">Streak</p>
                                        <p className="font-bold text-[#F3EFDA]">{topPlayers[2].streak}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Full Leaderboard */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="max-w-6xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Global Rankings
                    </h2>

                    <div className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#F3EFDA]/10">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-[#F3EFDA] font-semibold">Rank</th>
                                        <th className="px-6 py-4 text-left text-[#F3EFDA] font-semibold">Player</th>
                                        <th className="px-6 py-4 text-center text-[#F3EFDA] font-semibold">Points</th>
                                        <th className="px-6 py-4 text-center text-[#F3EFDA] font-semibold">Accuracy</th>
                                        <th className="px-6 py-4 text-center text-[#F3EFDA] font-semibold">Streak</th>
                                        <th className="px-6 py-4 text-center text-[#F3EFDA] font-semibold">Level</th>
                                        <th className="px-6 py-4 text-center text-[#F3EFDA] font-semibold">Change</th>
                                        <th className="px-6 py-4 text-center text-[#F3EFDA] font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topPlayers.map((player, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 1.4 + index * 0.05 }}
                                            className="border-t border-[#F3EFDA]/10 hover:bg-[#F3EFDA]/5 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className={`font-bold text-2xl ${player.rank === 1 ? 'text-[#FFD700]' :
                                                            player.rank === 2 ? 'text-[#C0C0C0]' :
                                                                player.rank === 3 ? 'text-[#CD7F32]' :
                                                                    'text-[#F3EFDA]'
                                                        }`}>
                                                        {player.rank}
                                                    </span>
                                                    {player.rank <= 3 && (
                                                        <Medal className={`w-5 h-5 ${player.rank === 1 ? 'text-[#FFD700]' :
                                                                player.rank === 2 ? 'text-[#C0C0C0]' :
                                                                    'text-[#CD7F32]'
                                                            }`} />
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-full bg-[#F3EFDA]/10 flex items-center justify-center text-2xl">
                                                        {player.avatar}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-[#F3EFDA]">{player.name}</p>
                                                        <p className="text-sm text-[#F3EFDA]/60">{player.country}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <p className="font-bold text-[#F3EFDA] text-lg">{player.points.toLocaleString()}</p>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                                                    {player.accuracy}%
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="flex items-center justify-center gap-1 text-[#F3EFDA]">
                                                    <Flame className="w-4 h-4 text-orange-500" />
                                                    <span className="font-semibold">{player.streak}</span>
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${player.level === 'Grandmaster' ? 'bg-purple-500/20 text-purple-400' :
                                                        player.level === 'Master' ? 'bg-blue-500/20 text-blue-400' :
                                                            'bg-orange-500/20 text-orange-400'
                                                    }`}>
                                                    {player.level}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {player.change > 0 ? (
                                                    <span className="flex items-center justify-center gap-1 text-green-400">
                                                        <ArrowUp className="w-4 h-4" />
                                                        <span className="font-semibold">{player.change}</span>
                                                    </span>
                                                ) : player.change < 0 ? (
                                                    <span className="flex items-center justify-center gap-1 text-red-400">
                                                        <ArrowUp className="w-4 h-4 rotate-180" />
                                                        <span className="font-semibold">{Math.abs(player.change)}</span>
                                                    </span>
                                                ) : (
                                                    <span className="text-[#F3EFDA]/50">-</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="text-[#F3EFDA] hover:text-[#F3EFDA]/80 inline-flex items-center gap-1 text-sm font-semibold"
                                                >
                                                    View Profile
                                                    <ChevronRight className="w-4 h-4" />
                                                </motion.button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>

                {/* Rising Stars */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="max-w-6xl mx-auto mb-16 md:mb-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4 flex items-center justify-center gap-3">
                            <TrendingUp className="w-10 h-10 text-[#4CAF50]" />
                            Rising Stars
                        </h2>
                        <p className="text-[#F3EFDA]/70 text-lg">Fastest growing players this month</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {risingStars.map((star, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-br from-[#4CAF50]/20 to-[#4CAF50]/5 backdrop-blur-xl border border-[#4CAF50]/30 rounded-2xl p-6 text-center relative overflow-hidden"
                            >
                                <motion.div
                                    className="absolute top-0 right-0 w-20 h-20 bg-[#4CAF50]/10 rounded-full blur-2xl"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <div className="relative z-10">
                                    <div className="text-5xl mb-3">{star.avatar}</div>
                                    <h3 className="text-xl font-bold text-[#F3EFDA] mb-2">{star.name}</h3>
                                    <div className="bg-[#4CAF50]/20 rounded-xl p-3 mb-3">
                                        <p className="text-3xl font-bold text-[#4CAF50]">{star.growth}</p>
                                        <p className="text-xs text-[#F3EFDA]/70">growth rate</p>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between text-[#F3EFDA]/70">
                                            <span>Points</span>
                                            <span className="font-semibold text-[#F3EFDA]">{star.points.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-[#F3EFDA]/70">
                                            <span>Joined</span>
                                            <span className="font-semibold text-[#F3EFDA]">{star.joined}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Top Scorers by Category */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    className="max-w-6xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Top Scorers by Category
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {topScorers.map((scorer, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.8 + index * 0.1 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-xl bg-[#F3EFDA]/10 flex items-center justify-center text-3xl">
                                            {scorer.avatar}
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#F3EFDA]/60 mb-1">{scorer.category}</p>
                                            <h3 className="text-xl font-bold text-[#F3EFDA] mb-1">{scorer.player}</h3>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-[#FFD700] fill-current" />
                                                <span className="text-[#F3EFDA] font-semibold">{scorer.points.toLocaleString()} pts</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Trophy className="w-10 h-10 text-[#FFD700] opacity-50 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.9 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Leaderboard Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 2 + index * 0.1 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-8 relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="relative z-10">
                                    <div className="bg-[#F3EFDA]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F3EFDA]/20 transition-colors">
                                        <feature.icon className="w-8 h-8 text-[#F3EFDA]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#F3EFDA] mb-3">{feature.title}</h3>
                                    <p className="text-[#F3EFDA]/70 text-lg leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* How It Works */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.1 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        How Rankings Work
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Take Quizzes", desc: "Participate in quizzes and earn points based on accuracy and speed" },
                            { step: "2", title: "Climb the Ranks", desc: "Your total points determine your position on the leaderboard" },
                            { step: "3", title: "Maintain Streaks", desc: "Consistency matters - daily participation boosts your ranking" },
                            { step: "4", title: "Earn Recognition", desc: "Top performers get special badges, titles, and featured spots" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 2.2 + index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 flex items-start gap-6 group"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-[#F3EFDA] text-[#3B132A] w-14 h-14 rounded-xl flex items-center justify-center font-bold text-2xl flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[#F3EFDA]/30 transition-shadow"
                                >
                                    {item.step}
                                </motion.div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#F3EFDA] mb-2">{item.title}</h3>
                                    <p className="text-[#F3EFDA]/70 text-lg">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.3 }}
                    className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3EFDA]/10 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative z-10">
                        <Crown className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Ready to Climb the Ranks?
                        </h2>
                        <p className="text-[#F3EFDA]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Start competing today! Take quizzes, earn points, and see your name rise to the top. Challenge yourself and become a leaderboard champion!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F3EFDA] text-[#3B132A] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Zap className="w-6 h-6" />
                                Start Competing
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Users className="w-6 h-6" />
                                View Full Rankings
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Leaderboards;