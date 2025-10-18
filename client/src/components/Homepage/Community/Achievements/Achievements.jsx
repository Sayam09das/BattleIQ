import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Trophy, Star, Zap, Lock, Share2, Target, Flame, Crown, Medal, TrendingUp, Clock, CheckCircle, Eye, EyeOff, Download } from 'lucide-react'

const Achievements = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [selectedCategory, setSelectedCategory] = useState('all')
    const [showSecret, setShowSecret] = useState(false)
    const [selectedBadge, setSelectedBadge] = useState(null)

    const achievements = [
        {
            id: 1,
            name: "First Steps",
            description: "Complete your first quiz",
            icon: "🎯",
            tier: "Bronze",
            progress: 100,
            unlocked: true,
            category: "beginner",
            rarity: "Common",
            unlockedDate: "Oct 1, 2025",
            points: 10
        },
        {
            id: 2,
            name: "Quick Learner",
            description: "Score 90% or higher in 10 quizzes",
            icon: "⚡",
            tier: "Silver",
            progress: 100,
            unlocked: true,
            category: "performance",
            rarity: "Uncommon",
            unlockedDate: "Oct 5, 2025",
            points: 25
        },
        {
            id: 3,
            name: "Perfect Score",
            description: "Achieve 100% in any quiz",
            icon: "💯",
            tier: "Gold",
            progress: 100,
            unlocked: true,
            category: "performance",
            rarity: "Rare",
            unlockedDate: "Oct 8, 2025",
            points: 50
        },
        {
            id: 4,
            name: "Week Warrior",
            description: "Maintain a 7-day streak",
            icon: "🔥",
            tier: "Silver",
            progress: 100,
            unlocked: true,
            category: "streak",
            rarity: "Uncommon",
            unlockedDate: "Oct 10, 2025",
            points: 30
        },
        {
            id: 5,
            name: "Century Club",
            description: "Complete 100 quizzes",
            icon: "📚",
            tier: "Gold",
            progress: 75,
            unlocked: false,
            category: "milestone",
            rarity: "Rare",
            points: 75
        },
        {
            id: 6,
            name: "Speed Demon",
            description: "Finish a quiz in under 2 minutes with 90%+ score",
            icon: "🚀",
            tier: "Platinum",
            progress: 100,
            unlocked: true,
            category: "performance",
            rarity: "Epic",
            unlockedDate: "Oct 12, 2025",
            points: 100
        },
        {
            id: 7,
            name: "Tournament Victor",
            description: "Win your first tournament",
            icon: "🏆",
            tier: "Gold",
            progress: 100,
            unlocked: true,
            category: "competitive",
            rarity: "Rare",
            unlockedDate: "Oct 14, 2025",
            points: 60
        },
        {
            id: 8,
            name: "Knowledge Master",
            description: "Reach level 50",
            icon: "🎓",
            tier: "Platinum",
            progress: 84,
            unlocked: false,
            category: "milestone",
            rarity: "Epic",
            points: 150
        },
        {
            id: 9,
            name: "Social Butterfly",
            description: "Add 20 friends",
            icon: "🦋",
            tier: "Silver",
            progress: 60,
            unlocked: false,
            category: "social",
            rarity: "Uncommon",
            points: 20
        },
        {
            id: 10,
            name: "Team Player",
            description: "Win 10 team battles",
            icon: "👥",
            tier: "Gold",
            progress: 40,
            unlocked: false,
            category: "social",
            rarity: "Rare",
            points: 50
        },
        {
            id: 11,
            name: "Unstoppable",
            description: "Maintain a 30-day streak",
            icon: "💪",
            tier: "Platinum",
            progress: 33,
            unlocked: false,
            category: "streak",
            rarity: "Epic",
            points: 200
        },
        {
            id: 12,
            name: "Legend",
            description: "Reach top 10 on global leaderboard",
            icon: "👑",
            tier: "Platinum",
            progress: 0,
            unlocked: false,
            category: "competitive",
            rarity: "Legendary",
            points: 500
        }
    ]

    const secretAchievements = [
        {
            id: 13,
            name: "Night Owl",
            description: "Complete a quiz between 2-4 AM",
            icon: "🦉",
            tier: "Gold",
            unlocked: true,
            category: "secret",
            rarity: "Hidden",
            unlockedDate: "Oct 11, 2025",
            points: 40
        },
        {
            id: 14,
            name: "Lucky Seven",
            description: "Score exactly 77% on 7 different quizzes",
            icon: "🍀",
            tier: "Platinum",
            unlocked: false,
            category: "secret",
            rarity: "Hidden",
            points: 77
        },
        {
            id: 15,
            name: "???",
            description: "This achievement is still hidden...",
            icon: "❓",
            tier: "Platinum",
            unlocked: false,
            category: "secret",
            rarity: "Hidden",
            points: 100
        }
    ]

    const categories = [
        { id: 'all', name: 'All', icon: '🎯', count: achievements.length },
        { id: 'beginner', name: 'Beginner', icon: '🌱', count: achievements.filter(a => a.category === 'beginner').length },
        { id: 'performance', name: 'Performance', icon: '⚡', count: achievements.filter(a => a.category === 'performance').length },
        { id: 'streak', name: 'Streaks', icon: '🔥', count: achievements.filter(a => a.category === 'streak').length },
        { id: 'milestone', name: 'Milestones', icon: '🎖️', count: achievements.filter(a => a.category === 'milestone').length },
        { id: 'competitive', name: 'Competitive', icon: '🏆', count: achievements.filter(a => a.category === 'competitive').length },
        { id: 'social', name: 'Social', icon: '👋', count: achievements.filter(a => a.category === 'social').length }
    ]

    const stats = [
        { icon: Award, value: "12/27", label: "Unlocked" },
        { icon: Star, value: "625", label: "Total Points" },
        { icon: TrendingUp, value: "44%", label: "Completion" },
        { icon: Crown, value: "3", label: "Platinum Badges" }
    ]

    const getTierColor = (tier) => {
        switch (tier) {
            case 'Bronze': return 'from-orange-600/30 to-orange-800/30 border-orange-600/50'
            case 'Silver': return 'from-gray-400/30 to-gray-600/30 border-gray-400/50'
            case 'Gold': return 'from-yellow-400/30 to-yellow-600/30 border-yellow-400/50'
            case 'Platinum': return 'from-cyan-400/30 to-purple-600/30 border-cyan-400/50'
            default: return 'from-[#F3EFDA]/10 to-[#F3EFDA]/5 border-[#F3EFDA]/20'
        }
    }

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'Common': return 'text-gray-400'
            case 'Uncommon': return 'text-green-400'
            case 'Rare': return 'text-blue-400'
            case 'Epic': return 'text-purple-400'
            case 'Legendary': return 'text-yellow-400'
            case 'Hidden': return 'text-pink-400'
            default: return 'text-[#F3EFDA]'
        }
    }

    const filteredAchievements = selectedCategory === 'all'
        ? achievements
        : achievements.filter(a => a.category === selectedCategory)

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
                        <Trophy className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Track Your Progress</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Achievements
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Unlock badges, earn rewards, and showcase your accomplishments.
                        From bronze to platinum, every achievement tells your story!
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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

                {/* Categories */}
                <div className="mb-8 overflow-x-auto pb-2">
                    <div className="flex gap-3 min-w-max">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-5 py-3 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${selectedCategory === category.id
                                        ? 'bg-[#F3EFDA] text-[#3B132A]'
                                        : 'bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/20'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>{category.icon}</span>
                                <span>{category.name}</span>
                                <span className="text-xs opacity-70">({category.count})</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {filteredAchievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            className={`relative bg-gradient-to-br ${getTierColor(achievement.tier)} backdrop-blur-sm border-2 rounded-2xl p-6 overflow-hidden cursor-pointer ${!achievement.unlocked && 'opacity-60'
                                }`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: achievement.unlocked ? 1 : 0.6, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedBadge(achievement)}
                        >
                            {/* Badge Icon */}
                            <div className="text-center mb-4">
                                <motion.div
                                    className="text-7xl mb-3 inline-block"
                                    animate={achievement.unlocked ? {
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0]
                                    } : {}}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {achievement.unlocked ? achievement.icon : '🔒'}
                                </motion.div>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <h3 className="font-bold text-lg">{achievement.name}</h3>
                                    {achievement.unlocked && (
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                    )}
                                </div>
                                <p className={`text-xs font-semibold mb-2 ${getRarityColor(achievement.rarity)}`}>
                                    {achievement.rarity} • {achievement.tier}
                                </p>
                                <p className="text-sm text-[#F3EFDA]/70 mb-3">{achievement.description}</p>
                            </div>

                            {/* Progress Bar */}
                            {!achievement.unlocked && (
                                <div className="mb-4">
                                    <div className="flex items-center justify-between text-xs mb-2">
                                        <span className="text-[#F3EFDA]/70">Progress</span>
                                        <span className="font-bold">{achievement.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-[#F3EFDA]/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-[#F3EFDA] to-[#F3EFDA]/70"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${achievement.progress}%` }}
                                            transition={{ duration: 1, delay: index * 0.05 }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Badge Info */}
                            <div className="flex items-center justify-between pt-3 border-t border-[#F3EFDA]/10">
                                <div className="flex items-center gap-1 text-xs text-[#F3EFDA]/70">
                                    <Star className="w-3 h-3" />
                                    <span>{achievement.points} pts</span>
                                </div>
                                {achievement.unlocked && achievement.unlockedDate && (
                                    <span className="text-xs text-[#F3EFDA]/50">{achievement.unlockedDate}</span>
                                )}
                            </div>

                            {/* Shine Effect for Unlocked */}
                            {achievement.unlocked && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    animate={{ x: [-200, 200] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                                />
                            )}

                            {/* Glow Effect */}
                            <motion.div
                                className="absolute -right-8 -top-8 w-32 h-32 bg-[#F3EFDA]/5 rounded-full blur-3xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Secret Achievements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <Lock className="w-6 h-6 text-pink-400" />
                            <h2 className="text-3xl font-bold">Secret Achievements</h2>
                        </div>
                        <motion.button
                            onClick={() => setShowSecret(!showSecret)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl hover:bg-[#F3EFDA]/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {showSecret ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                            <span className="text-sm">{showSecret ? 'Hide' : 'Reveal'}</span>
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {secretAchievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.id}
                                className={`relative bg-gradient-to-br from-pink-400/20 to-purple-600/20 backdrop-blur-sm border-2 border-pink-400/40 rounded-2xl p-6 overflow-hidden ${!showSecret && !achievement.unlocked && 'blur-sm'
                                    }`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-center">
                                    <span className="text-6xl mb-3 block">{achievement.unlocked || showSecret ? achievement.icon : '❓'}</span>
                                    <h3 className="font-bold text-lg mb-2">{showSecret || achievement.unlocked ? achievement.name : '???'}</h3>
                                    <p className="text-xs font-semibold text-pink-400 mb-2">{achievement.rarity}</p>
                                    <p className="text-sm text-[#F3EFDA]/70">
                                        {showSecret || achievement.unlocked ? achievement.description : 'Complete secret requirements to unlock'}
                                    </p>
                                    {achievement.unlocked && (
                                        <div className="mt-3 pt-3 border-t border-[#F3EFDA]/10 flex items-center justify-between">
                                            <span className="text-xs text-[#F3EFDA]/70 flex items-center gap-1">
                                                <Star className="w-3 h-3" />
                                                {achievement.points} pts
                                            </span>
                                            <span className="text-xs text-[#F3EFDA]/50">{achievement.unlockedDate}</span>
                                        </div>
                                    )}
                                </div>

                                {achievement.unlocked && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent"
                                        animate={{ x: [-200, 200] }}
                                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                                    />
                                )}
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
                    <Award className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Keep Pushing Forward!</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Every quiz completed, every streak maintained, and every challenge conquered brings you
                        closer to legendary status. Unlock them all and show the world what you've achieved!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Target className="w-5 h-5" />
                            View All Challenges
                        </motion.button>
                        <motion.button
                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#F3EFDA] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/30 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Share2 className="w-5 h-5" />
                            Share Achievements
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Badge Detail Modal */}
            {selectedBadge && (
                <motion.div
                    className="fixed inset-0 bg-[#3B132A]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedBadge(null)}
                >
                    <motion.div
                        className={`bg-gradient-to-br ${getTierColor(selectedBadge.tier)} backdrop-blur-sm border-2 rounded-3xl p-8 max-w-md w-full`}
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center">
                            <motion.div
                                className="text-8xl mb-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {selectedBadge.unlocked ? selectedBadge.icon : '🔒'}
                            </motion.div>
                            <h2 className="text-3xl font-bold mb-2">{selectedBadge.name}</h2>
                            <p className={`text-sm font-semibold mb-4 ${getRarityColor(selectedBadge.rarity)}`}>
                                {selectedBadge.rarity} • {selectedBadge.tier} Tier
                            </p>
                            <p className="text-[#F3EFDA]/80 mb-6">{selectedBadge.description}</p>

                            {selectedBadge.unlocked ? (
                                <>
                                    <div className="bg-[#F3EFDA]/10 rounded-xl p-4 mb-6">
                                        <div className="grid grid-cols-2 gap-4 text-center">
                                            <div>
                                                <Star className="w-6 h-6 mx-auto mb-2 text-[#F3EFDA]/70" />
                                                <p className="text-2xl font-bold">{selectedBadge.points}</p>
                                                <p className="text-xs text-[#F3EFDA]/60">Points Earned</p>
                                            </div>
                                            <div>
                                                <Clock className="w-6 h-6 mx-auto mb-2 text-[#F3EFDA]/70" />
                                                <p className="text-sm font-semibold">{selectedBadge.unlockedDate}</p>
                                                <p className="text-xs text-[#F3EFDA]/60">Unlocked</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <motion.button
                                            className="bg-[#F3EFDA] text-[#3B132A] font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Share2 className="w-4 h-4" />
                                            Share
                                        </motion.button>
                                        <motion.button
                                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Download className="w-4 h-4" />
                                            Save
                                        </motion.button>
                                    </div>
                                </>
                            ) : (
                                <div className="bg-[#F3EFDA]/10 rounded-xl p-4 mb-6">
                                    <p className="text-sm text-[#F3EFDA]/70 mb-3">Progress to unlock</p>
                                    <div className="h-3 bg-[#F3EFDA]/10 rounded-full overflow-hidden mb-2">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#F3EFDA] to-[#F3EFDA]/70"
                                            style={{ width: `${selectedBadge.progress}%` }}
                                        />
                                    </div>
                                    <p className="text-lg font-bold">{selectedBadge.progress}% Complete</p>
                                </div>
                            )}

                            <motion.button
                                onClick={() => setSelectedBadge(null)}
                                className="w-full bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Close
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default Achievements