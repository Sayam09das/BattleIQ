import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, UserPlus, Shield, Trophy, Swords, MessageCircle, Crown, Star, TrendingUp, Target, Award, Zap, Search, Plus, Send, Settings, UserCheck, Clock, Flame, ChevronRight, Mail, X, Check } from 'lucide-react'

const FriendsTeams = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [activeTab, setActiveTab] = useState('myteams')
    const [showCreateTeam, setShowCreateTeam] = useState(false)
    const [showTeamChat, setShowTeamChat] = useState(null)

    const myTeams = [
        {
            id: 1,
            name: "Brain Champions",
            logo: "🧠",
            role: "Owner",
            members: 12,
            maxMembers: 15,
            rank: 8,
            wins: 156,
            losses: 42,
            avgScore: 92,
            winRate: 79,
            type: "Public",
            status: "Active",
            color: "from-purple-400/20 to-purple-600/20",
            borderColor: "border-purple-400/40",
            lastActive: "2 hours ago",
            currentStreak: 5
        },
        {
            id: 2,
            name: "Quiz Masters Elite",
            logo: "👑",
            role: "Captain",
            members: 10,
            maxMembers: 10,
            rank: 12,
            wins: 98,
            losses: 28,
            avgScore: 89,
            winRate: 78,
            type: "Private",
            status: "In Battle",
            color: "from-yellow-400/20 to-yellow-600/20",
            borderColor: "border-yellow-400/40",
            lastActive: "Active now",
            currentStreak: 3
        },
        {
            id: 3,
            name: "Study Squad",
            logo: "📚",
            role: "Member",
            members: 7,
            maxMembers: 12,
            rank: 34,
            wins: 45,
            losses: 18,
            avgScore: 85,
            winRate: 71,
            type: "Private",
            status: "Active",
            color: "from-blue-400/20 to-blue-600/20",
            borderColor: "border-blue-400/40",
            lastActive: "1 day ago",
            currentStreak: 2
        }
    ]

    const onlineFriends = [
        {
            id: 1,
            name: "Alex_QuizPro",
            avatar: "bg-blue-400",
            level: 45,
            status: "online",
            activity: "In Tournament",
            winRate: 87,
            totalWins: 234
        },
        {
            id: 2,
            name: "Sarah_Genius",
            avatar: "bg-pink-400",
            level: 42,
            status: "online",
            activity: "Playing Quiz",
            winRate: 82,
            totalWins: 198
        },
        {
            id: 3,
            name: "Mike_Scholar",
            avatar: "bg-green-400",
            level: 48,
            status: "away",
            activity: "Away",
            winRate: 91,
            totalWins: 312
        },
        {
            id: 4,
            name: "Emma_Brain",
            avatar: "bg-purple-400",
            level: 39,
            status: "online",
            activity: "In Lobby",
            winRate: 78,
            totalWins: 167
        }
    ]

    const allFriends = [
        ...onlineFriends,
        {
            id: 5,
            name: "Tom_Wizard",
            avatar: "bg-orange-400",
            level: 36,
            status: "offline",
            activity: "Last seen 3h ago",
            winRate: 75,
            totalWins: 145
        },
        {
            id: 6,
            name: "Lisa_Smart",
            avatar: "bg-red-400",
            level: 41,
            status: "offline",
            activity: "Last seen 1d ago",
            winRate: 84,
            totalWins: 189
        }
    ]

    const teamBattles = [
        {
            id: 1,
            challenger: "Speed Demons",
            challengerLogo: "⚡",
            defender: "Brain Champions",
            defenderLogo: "🧠",
            status: "Pending",
            prize: "1000 pts",
            timeLeft: "3h 24m",
            category: "Science"
        },
        {
            id: 2,
            challenger: "Brain Champions",
            challengerLogo: "🧠",
            defender: "Knowledge Knights",
            defenderLogo: "⚔️",
            status: "Accepted",
            prize: "1500 pts",
            timeLeft: "45m",
            category: "Mixed"
        }
    ]

    const topTeams = [
        { rank: 1, name: "Global Minds", logo: "🌍", members: 15, points: 15420, wins: 287 },
        { rank: 2, name: "Quiz Titans", logo: "⚡", members: 15, points: 14890, wins: 256 },
        { rank: 3, name: "Brain Trust", logo: "🧠", members: 14, points: 14320, wins: 234 },
        { rank: 4, name: "Elite Scholars", logo: "🎓", members: 15, points: 13780, wins: 219 },
        { rank: 5, name: "Knowledge Kings", logo: "👑", members: 13, points: 13240, wins: 201 }
    ]

    const friendRequests = [
        { id: 1, name: "Jenny_Learner", avatar: "bg-cyan-400", level: 28, mutualFriends: 3 },
        { id: 2, name: "David_Quiz", avatar: "bg-indigo-400", level: 34, mutualFriends: 5 }
    ]

    const stats = [
        { icon: Users, value: "48", label: "Total Friends" },
        { icon: Shield, value: "3", label: "Your Teams" },
        { icon: Trophy, value: "299", label: "Team Wins" },
        { icon: Star, value: "#8", label: "Best Team Rank" }
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
                        <span className="text-sm font-medium">Better Together</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Friends & Teams
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Unite with friends, build unstoppable teams, and dominate tournaments together.
                        Collaborate, compete, and celebrate victories as one!
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

                {/* Tabs */}
                <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                    {[
                        { id: 'myteams', icon: Shield, label: 'My Teams' },
                        { id: 'friends', icon: Users, label: 'Friends' },
                        { id: 'battles', icon: Swords, label: 'Team Battles' },
                        { id: 'discover', icon: Search, label: 'Discover' }
                    ].map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === tab.id
                                    ? 'bg-[#F3EFDA] text-[#3B132A]'
                                    : 'bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/20'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </motion.button>
                    ))}
                </div>

                {/* My Teams Tab */}
                {activeTab === 'myteams' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Your Teams ({myTeams.length})</h2>
                            <motion.button
                                onClick={() => setShowCreateTeam(true)}
                                className="bg-[#F3EFDA] text-[#3B132A] font-bold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Plus className="w-5 h-5" />
                                Create Team
                            </motion.button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {myTeams.map((team, index) => (
                                <motion.div
                                    key={team.id}
                                    className={`relative bg-gradient-to-br ${team.color} backdrop-blur-sm border-2 ${team.borderColor} rounded-3xl p-6 overflow-hidden`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {/* Team Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="text-6xl">{team.logo}</div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-2xl font-bold">{team.name}</h3>
                                                    {team.role === 'Owner' && (
                                                        <Crown className="w-5 h-5 text-yellow-400" />
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-3 text-sm">
                                                    <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 font-medium">
                                                        {team.role}
                                                    </span>
                                                    <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 font-medium">
                                                        {team.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <motion.button
                                            className="p-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                                            whileHover={{ rotate: 90 }}
                                        >
                                            <Settings className="w-5 h-5" />
                                        </motion.button>
                                    </div>

                                    {/* Status Badge */}
                                    {team.status === 'In Battle' ? (
                                        <motion.div
                                            className="inline-flex items-center gap-2 bg-orange-400/20 border border-orange-400/40 rounded-full px-4 py-2 mb-4"
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Flame className="w-4 h-4 text-orange-400" />
                                            <span className="text-sm font-semibold">In Battle Now!</span>
                                        </motion.div>
                                    ) : (
                                        <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/40 rounded-full px-4 py-2 mb-4">
                                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                                            <span className="text-sm font-semibold">{team.status}</span>
                                        </div>
                                    )}

                                    {/* Team Stats Grid */}
                                    <div className="grid grid-cols-4 gap-3 mb-6">
                                        <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-3 text-center">
                                            <Users className="w-4 h-4 mx-auto mb-1 text-[#F3EFDA]/70" />
                                            <p className="text-xl font-bold">{team.members}/{team.maxMembers}</p>
                                            <p className="text-[10px] text-[#F3EFDA]/60">Members</p>
                                        </div>
                                        <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-3 text-center">
                                            <Trophy className="w-4 h-4 mx-auto mb-1 text-[#F3EFDA]/70" />
                                            <p className="text-xl font-bold">#{team.rank}</p>
                                            <p className="text-[10px] text-[#F3EFDA]/60">Rank</p>
                                        </div>
                                        <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-3 text-center">
                                            <Target className="w-4 h-4 mx-auto mb-1 text-[#F3EFDA]/70" />
                                            <p className="text-xl font-bold">{team.avgScore}%</p>
                                            <p className="text-[10px] text-[#F3EFDA]/60">Avg</p>
                                        </div>
                                        <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-3 text-center">
                                            <Flame className="w-4 h-4 mx-auto mb-1 text-[#F3EFDA]/70" />
                                            <p className="text-xl font-bold">{team.currentStreak}</p>
                                            <p className="text-[10px] text-[#F3EFDA]/60">Streak</p>
                                        </div>
                                    </div>

                                    {/* Win/Loss Record */}
                                    <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-4 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-[#F3EFDA]/70">Win Rate</span>
                                            <span className="font-bold">{team.winRate}%</span>
                                        </div>
                                        <div className="h-2 bg-[#F3EFDA]/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-green-400 to-green-600"
                                                style={{ width: `${team.winRate}%` }}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between mt-2 text-xs">
                                            <span className="text-green-400">{team.wins}W</span>
                                            <span className="text-red-400">{team.losses}L</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <motion.button
                                            onClick={() => setShowTeamChat(team.id)}
                                            className="bg-[#F3EFDA] text-[#3B132A] font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                            <span className="text-sm">Chat</span>
                                        </motion.button>
                                        <motion.button
                                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Users className="w-4 h-4" />
                                            <span className="text-sm">Roster</span>
                                        </motion.button>
                                        <motion.button
                                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Swords className="w-4 h-4" />
                                            <span className="text-sm">Battle</span>
                                        </motion.button>
                                    </div>

                                    {/* Last Active */}
                                    <div className="mt-4 pt-4 border-t border-[#F3EFDA]/10 flex items-center justify-between text-xs text-[#F3EFDA]/60">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {team.lastActive}
                                        </span>
                                    </div>

                                    {/* Decorative glow */}
                                    <motion.div
                                        className="absolute -right-12 -top-12 w-40 h-40 bg-[#F3EFDA]/5 rounded-full blur-3xl"
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Friends Tab */}
                {activeTab === 'friends' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">Your Friends ({allFriends.length})</h2>
                                <motion.button
                                    className="bg-[#F3EFDA] text-[#3B132A] font-semibold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <UserPlus className="w-4 h-4" />
                                    Add Friend
                                </motion.button>
                            </div>

                            {/* Search Bar */}
                            <div className="relative mb-6">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                                <input
                                    type="text"
                                    placeholder="Search friends..."
                                    className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl pl-12 pr-4 py-4 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                                />
                            </div>

                            {/* Online Friends Section */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                                    Online Now ({onlineFriends.length})
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {onlineFriends.map((friend, index) => (
                                        <motion.div
                                            key={friend.id}
                                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-5 hover:bg-[#F3EFDA]/10 transition-all"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.03 }}
                                        >
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="relative">
                                                    <div className={`w-16 h-16 rounded-full ${friend.avatar}`} />
                                                    <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-[#3B132A] ${friend.status === 'online' ? 'bg-green-400' :
                                                            friend.status === 'away' ? 'bg-yellow-400' :
                                                                'bg-gray-400'
                                                        }`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold text-lg mb-1 truncate">{friend.name}</h4>
                                                    <p className="text-sm text-[#F3EFDA]/70 mb-2">{friend.activity}</p>
                                                    <div className="flex items-center gap-3 text-sm">
                                                        <span className="flex items-center gap-1">
                                                            <Star className="w-4 h-4 text-yellow-400" />
                                                            Lvl {friend.level}
                                                        </span>
                                                        <span className="text-[#F3EFDA]/60">•</span>
                                                        <span>{friend.winRate}% WR</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <motion.button
                                                    className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2 text-sm"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <MessageCircle className="w-4 h-4" />
                                                    Message
                                                </motion.button>
                                                <motion.button
                                                    className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2 text-sm"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Swords className="w-4 h-4" />
                                                    Challenge
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* All Friends */}
                            <div>
                                <h3 className="text-lg font-bold mb-4">All Friends</h3>
                                <div className="space-y-3">
                                    {allFriends.map((friend, index) => (
                                        <motion.div
                                            key={friend.id}
                                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-xl p-4 hover:bg-[#F3EFDA]/10 transition-all flex items-center gap-4"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <div className="relative">
                                                <div className={`w-12 h-12 rounded-full ${friend.avatar}`} />
                                                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#3B132A] ${friend.status === 'online' ? 'bg-green-400' :
                                                        friend.status === 'away' ? 'bg-yellow-400' :
                                                            'bg-gray-400'
                                                    }`} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">{friend.name}</h4>
                                                <p className="text-sm text-[#F3EFDA]/60">{friend.activity}</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right text-sm">
                                                    <p className="font-semibold">Level {friend.level}</p>
                                                    <p className="text-[#F3EFDA]/60">{friend.totalWins} wins</p>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-[#F3EFDA]/40" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Friend Requests */}
                            {friendRequests.length > 0 && (
                                <motion.div
                                    className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 rounded-2xl p-6"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <Mail className="w-5 h-5 text-blue-400" />
                                        <h3 className="font-bold text-lg">Friend Requests ({friendRequests.length})</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {friendRequests.map((request) => (
                                            <div key={request.id} className="bg-[#F3EFDA]/10 p-4 rounded-xl">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className={`w-12 h-12 rounded-full ${request.avatar}`} />
                                                    <div className="flex-1">
                                                        <p className="font-semibold">{request.name}</p>
                                                        <p className="text-xs text-[#F3EFDA]/60">Level {request.level} • {request.mutualFriends} mutual</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <motion.button
                                                        className="bg-green-400/20 border border-green-400/40 text-green-400 font-semibold py-2 rounded-lg hover:bg-green-400/30 transition-all flex items-center justify-center gap-1 text-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Check className="w-4 h-4" />
                                                        Accept
                                                    </motion.button>
                                                    <motion.button
                                                        className="bg-red-400/20 border border-red-400/40 text-red-400 font-semibold py-2 rounded-lg hover:bg-red-400/30 transition-all flex items-center justify-center gap-1 text-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <X className="w-4 h-4" />
                                                        Decline
                                                    </motion.button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Suggested Friends */}
                            <motion.div
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h3 className="font-bold text-lg mb-4">Suggested Friends</h3>
                                <div className="space-y-3">
                                    {[
                                        { name: "Chris_Learner", avatar: "bg-teal-400", mutual: 8 },
                                        { name: "Nina_Quiz", avatar: "bg-rose-400", mutual: 6 }
                                    ].map((suggestion, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-full ${suggestion.avatar}`} />
                                            <div className="flex-1">
                                                <p className="font-semibold text-sm">{suggestion.name}</p>
                                                <p className="text-xs text-[#F3EFDA]/60">{suggestion.mutual} mutual friends</p>
                                            </div>
                                            <motion.button
                                                className="p-2 bg-[#F3EFDA]/20 hover:bg-[#F3EFDA]/30 rounded-lg transition-all"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <UserPlus className="w-4 h-4" />
                                            </motion.button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Team Battles Tab */}
                {activeTab === 'battles' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">Active Battles</h2>
                                <motion.button
                                    className="bg-[#F3EFDA] text-[#3B132A] font-semibold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Swords className="w-4 h-4" />
                                    Challenge Team
                                </motion.button>
                            </div>

                            {teamBattles.map((battle, index) => (
                                <motion.div
                                    key={battle.id}
                                    className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-6">
                                            <div className="text-center">
                                                <div className="text-5xl mb-2">{battle.challengerLogo}</div>
                                                <p className="font-bold text-sm">{battle.challenger}</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <Swords className="w-8 h-8 text-[#F3EFDA]/60 mb-2" />
                                                <span className="text-xs font-semibold text-[#F3EFDA]/60">VS</span>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-5xl mb-2">{battle.defenderLogo}</div>
                                                <p className="font-bold text-sm">{battle.defender}</p>
                                            </div>
                                        </div>
                                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${battle.status === 'Pending'
                                                ? 'bg-yellow-400/20 border border-yellow-400/40 text-yellow-400'
                                                : 'bg-green-400/20 border border-green-400/40 text-green-400'
                                            }`}>
                                            {battle.status}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="bg-[#F3EFDA]/10 rounded-xl p-4 text-center">
                                            <Trophy className="w-5 h-5 mx-auto mb-2 text-[#F3EFDA]/70" />
                                            <p className="font-bold">{battle.prize}</p>
                                            <p className="text-xs text-[#F3EFDA]/60">Prize Pool</p>
                                        </div>
                                        <div className="bg-[#F3EFDA]/10 rounded-xl p-4 text-center">
                                            <Clock className="w-5 h-5 mx-auto mb-2 text-[#F3EFDA]/70" />
                                            <p className="font-bold">{battle.timeLeft}</p>
                                            <p className="text-xs text-[#F3EFDA]/60">Time Left</p>
                                        </div>
                                        <div className="bg-[#F3EFDA]/10 rounded-xl p-4 text-center">
                                            <Target className="w-5 h-5 mx-auto mb-2 text-[#F3EFDA]/70" />
                                            <p className="font-bold">{battle.category}</p>
                                            <p className="text-xs text-[#F3EFDA]/60">Category</p>
                                        </div>
                                    </div>

                                    {battle.status === 'Pending' ? (
                                        <div className="grid grid-cols-2 gap-3">
                                            <motion.button
                                                className="bg-green-400/20 border border-green-400/40 text-green-400 font-semibold py-3 rounded-xl hover:bg-green-400/30 transition-all"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Accept Challenge
                                            </motion.button>
                                            <motion.button
                                                className="bg-red-400/20 border border-red-400/40 text-red-400 font-semibold py-3 rounded-xl hover:bg-red-400/30 transition-all"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Decline
                                            </motion.button>
                                        </div>
                                    ) : (
                                        <motion.button
                                            className="w-full bg-[#F3EFDA] text-[#3B132A] font-bold py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Zap className="w-5 h-5" />
                                            Enter Battle Arena
                                        </motion.button>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Battle Stats Sidebar */}
                        <div className="space-y-6">
                            <motion.div
                                className="bg-gradient-to-br from-orange-400/20 to-orange-600/20 border border-orange-400/30 rounded-2xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <Flame className="w-5 h-5 text-orange-400" />
                                    <h3 className="font-bold text-lg">Recent Victories</h3>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { opponent: "Speed Demons", score: "945 - 820", time: "3h ago" },
                                        { opponent: "Quiz Wizards", score: "890 - 765", time: "1d ago" },
                                        { opponent: "Brain Squad", score: "1020 - 950", time: "2d ago" }
                                    ].map((victory, index) => (
                                        <div key={index} className="bg-[#F3EFDA]/10 p-4 rounded-xl">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="font-semibold text-sm">vs {victory.opponent}</p>
                                                <Trophy className="w-4 h-4 text-yellow-400" />
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-green-400 font-bold">{victory.score}</span>
                                                <span className="text-[#F3EFDA]/60">{victory.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h3 className="font-bold text-lg mb-4">Battle Rules</h3>
                                <ul className="space-y-2 text-sm text-[#F3EFDA]/80">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>Teams must have equal members</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>All team members must participate</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>Winner takes prize pool + rank points</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>Challenges expire after 24 hours</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Discover Tab */}
                {activeTab === 'discover' && (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Top Global Teams</h2>
                            <div className="space-y-4">
                                {topTeams.map((team, index) => (
                                    <motion.div
                                        key={index}
                                        className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${index < 3
                                                ? 'bg-gradient-to-r from-[#F3EFDA]/20 to-[#F3EFDA]/10 border-2 border-[#F3EFDA]/30'
                                                : 'bg-[#F3EFDA]/5 border border-[#F3EFDA]/20'
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className={`flex items-center justify-center w-14 h-14 rounded-xl font-bold text-lg ${index === 0 ? 'bg-yellow-400 text-[#3B132A]' :
                                                index === 1 ? 'bg-gray-300 text-[#3B132A]' :
                                                    index === 2 ? 'bg-orange-400 text-[#3B132A]' :
                                                        'bg-[#F3EFDA]/20 text-[#F3EFDA]'
                                            }`}>
                                            #{team.rank}
                                        </div>
                                        <span className="text-4xl">{team.logo}</span>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-1">{team.name}</h3>
                                            <div className="flex items-center gap-4 text-sm text-[#F3EFDA]/70">
                                                <span className="flex items-center gap-1">
                                                    <Users className="w-4 h-4" />
                                                    {team.members} members
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <Trophy className="w-4 h-4" />
                                                    {team.wins} wins
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold">{team.points.toLocaleString()}</p>
                                            <p className="text-xs text-[#F3EFDA]/60">points</p>
                                        </div>
                                        <motion.button
                                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 px-6 py-2 rounded-xl hover:bg-[#F3EFDA]/30 transition-all font-semibold"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View
                                        </motion.button>
                                    </motion.div>
                                ))}
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
                    <Users className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Achieve Greatness Together</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Build your dream team, coordinate strategies through team chat, and climb to the top of the leaderboards.
                        Every victory is sweeter when shared with your squad!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            onClick={() => setShowCreateTeam(true)}
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Plus className="w-5 h-5" />
                            Create Your Team
                        </motion.button>
                        <motion.button
                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#F3EFDA] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/30 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Search className="w-5 h-5" />
                            Find Teams
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Create Team Modal */}
            {showCreateTeam && (
                <motion.div
                    className="fixed inset-0 bg-[#3B132A]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setShowCreateTeam(false)}
                >
                    <motion.div
                        className="bg-[#3B132A] border-2 border-[#F3EFDA]/30 rounded-3xl p-8 max-w-md w-full"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-6">Create New Team</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Team Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter team name..."
                                    className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl px-4 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Team Type</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="bg-[#F3EFDA] text-[#3B132A] font-semibold py-3 rounded-xl">Public</button>
                                    <button className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-xl">Private</button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Max Members</label>
                                <input
                                    type="number"
                                    defaultValue="10"
                                    min="5"
                                    max="20"
                                    className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl px-4 py-3 text-[#F3EFDA] focus:outline-none focus:border-[#F3EFDA]/40"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-6">
                            <motion.button
                                onClick={() => setShowCreateTeam(false)}
                                className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Cancel
                            </motion.button>
                            <motion.button
                                className="bg-[#F3EFDA] text-[#3B132A] font-bold py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Create Team
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Team Chat Modal */}
            {showTeamChat && (
                <motion.div
                    className="fixed inset-0 bg-[#3B132A]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setShowTeamChat(null)}
                >
                    <motion.div
                        className="bg-[#3B132A] border-2 border-[#F3EFDA]/30 rounded-3xl p-6 max-w-2xl w-full max-h-[80vh] flex flex-col"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F3EFDA]/20">
                            <div className="flex items-center gap-3">
                                <MessageCircle className="w-6 h-6" />
                                <h3 className="font-bold text-xl">Team Chat</h3>
                            </div>
                            <button
                                onClick={() => setShowTeamChat(null)}
                                className="p-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                            {[
                                { user: "Alex_QuizPro", message: "Ready for the tournament tonight?", time: "2:30 PM", isMe: false },
                                { user: "Sarah_Genius", message: "Yes! I've been practicing all week 💪", time: "2:32 PM", isMe: false },
                                { user: "You", message: "Count me in! What's our strategy?", time: "2:35 PM", isMe: true },
                                { user: "Mike_Scholar", message: "Let's focus on science questions, that's our strength", time: "2:36 PM", isMe: false }
                            ].map((msg, index) => (
                                <div key={index} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[70%] ${msg.isMe ? 'bg-[#F3EFDA]/20' : 'bg-[#F3EFDA]/10'} rounded-2xl p-4`}>
                                        <p className="font-semibold text-sm mb-1">{msg.user}</p>
                                        <p className="text-[#F3EFDA]/90 mb-2">{msg.message}</p>
                                        <p className="text-xs text-[#F3EFDA]/50">{msg.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl px-4 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40"
                            />
                            <motion.button
                                className="bg-[#F3EFDA] text-[#3B132A] p-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Send className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default FriendsTeams