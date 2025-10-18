import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageSquare, Heart, Reply, Flag, Search, TrendingUp, Users, Award, Star, Clock, Eye, Pin, Lock, CheckCircle, Bookmark, Filter, Plus, Send } from 'lucide-react'

const Forums = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [activeTab, setActiveTab] = useState('all')
    const [selectedPost, setSelectedPost] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const categories = [
        { name: "General Knowledge", icon: "🌍", posts: 1247, color: "from-blue-400/20 to-blue-600/20" },
        { name: "Science", icon: "🔬", posts: 892, color: "from-green-400/20 to-green-600/20" },
        { name: "History", icon: "📜", posts: 654, color: "from-yellow-400/20 to-yellow-600/20" },
        { name: "Mathematics", icon: "🧮", posts: 543, color: "from-purple-400/20 to-purple-600/20" },
        { name: "Tips & Tricks", icon: "💡", posts: 1056, color: "from-orange-400/20 to-orange-600/20" },
        { name: "Study Groups", icon: "👥", posts: 432, color: "from-pink-400/20 to-pink-600/20" }
    ]

    const forumPosts = [
        {
            id: 1,
            title: "Best strategies for memorizing historical dates?",
            author: "HistoryBuff92",
            authorRep: 2847,
            category: "History",
            tags: ["Study Tips", "Memory"],
            content: "I'm struggling with remembering dates for the World History quiz. Anyone have effective techniques?",
            likes: 156,
            replies: 42,
            views: 2340,
            timeAgo: "2 hours ago",
            isPinned: false,
            isAnswered: true,
            avatar: "bg-blue-400"
        },
        {
            id: 2,
            title: "🔥 Speed Quiz Tournament - Tips & Team Formation",
            author: "QuizMaster_Pro",
            authorRep: 5621,
            category: "Tips & Tricks",
            tags: ["Tournament", "Speed Quiz", "Strategy"],
            content: "Looking for teammates for the upcoming speed tournament. Let's discuss strategies!",
            likes: 234,
            replies: 67,
            views: 4582,
            timeAgo: "4 hours ago",
            isPinned: true,
            isAnswered: false,
            avatar: "bg-yellow-400"
        },
        {
            id: 3,
            title: "Quantum Physics Quiz - Question Clarification",
            author: "ScienceNerd",
            authorRep: 1923,
            category: "Science",
            tags: ["Physics", "Question Help"],
            content: "Can someone explain the wave-particle duality question from yesterday's quiz?",
            likes: 89,
            replies: 28,
            views: 1456,
            timeAgo: "6 hours ago",
            isPinned: false,
            isAnswered: true,
            avatar: "bg-green-400"
        },
        {
            id: 4,
            title: "Study Group for Advanced Math Certification",
            author: "MathGenius21",
            authorRep: 3456,
            category: "Study Groups",
            tags: ["Math", "Certification", "Study Group"],
            content: "Starting a study group for the Advanced Mathematics certification. 5 spots available!",
            likes: 178,
            replies: 34,
            views: 2103,
            timeAgo: "1 day ago",
            isPinned: false,
            isAnswered: false,
            avatar: "bg-purple-400"
        },
        {
            id: 5,
            title: "How to improve quiz speed without sacrificing accuracy?",
            author: "FastLearner",
            authorRep: 1654,
            category: "Tips & Tricks",
            tags: ["Speed", "Accuracy", "Improvement"],
            content: "I always run out of time on timed quizzes. What techniques do top players use?",
            likes: 312,
            replies: 89,
            views: 5234,
            timeAgo: "1 day ago",
            isPinned: false,
            isAnswered: true,
            avatar: "bg-orange-400"
        }
    ]

    const topContributors = [
        { name: "QuizMaster_Pro", reputation: 5621, posts: 342, badge: "🏆" },
        { name: "BrainStorm_AI", reputation: 4892, posts: 287, badge: "⭐" },
        { name: "StudySmart", reputation: 3456, posts: 234, badge: "💎" },
        { name: "HistoryBuff92", reputation: 2847, posts: 198, badge: "🎓" }
    ]

    const stats = [
        { icon: MessageSquare, value: "12.4K", label: "Total Posts" },
        { icon: Users, value: "3.2K", label: "Active Members" },
        { icon: TrendingUp, value: "894", label: "Today's Posts" },
        { icon: Award, value: "2.1K", label: "Answered" }
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
                        <span className="text-sm font-medium">Community Powered</span>
                        <motion.span
                            className="w-2 h-2 bg-green-400 rounded-full"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Community Forums
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Connect with fellow learners, share knowledge, and get help from our vibrant community.
                        Ask questions, share tips, and grow together!
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

                {/* Search and Create Post */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search discussions..."
                            className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl pl-12 pr-4 py-4 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                        />
                    </div>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Plus className="w-5 h-5" />
                        New Post
                    </motion.button>
                </div>

                {/* Categories */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                className={`relative bg-gradient-to-br ${category.color} backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-4 text-center cursor-pointer overflow-hidden`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-4xl mb-2 block">{category.icon}</span>
                                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                                <p className="text-xs text-[#F3EFDA]/60">{category.posts} posts</p>
                                <motion.div
                                    className="absolute -right-4 -bottom-4 w-16 h-16 bg-[#F3EFDA]/5 rounded-full blur-2xl"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Forum Posts */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex gap-2">
                                {['all', 'trending', 'answered', 'unanswered'].map((tab) => (
                                    <motion.button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === tab
                                                ? 'bg-[#F3EFDA] text-[#3B132A]'
                                                : 'bg-[#F3EFDA]/10 text-[#F3EFDA] hover:bg-[#F3EFDA]/20'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </motion.button>
                                ))}
                            </div>
                            <button className="text-[#F3EFDA]/60 hover:text-[#F3EFDA] transition-all">
                                <Filter className="w-5 h-5" />
                            </button>
                        </div>

                        {forumPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 hover:bg-[#F3EFDA]/10 transition-all cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.01 }}
                                onClick={() => setSelectedPost(post)}
                            >
                                {/* Post Header */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-full ${post.avatar} flex-shrink-0`} />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            {post.isPinned && <Pin className="w-4 h-4 text-yellow-400 flex-shrink-0" />}
                                            <h3 className="font-bold text-lg truncate">{post.title}</h3>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-[#F3EFDA]/70">
                                            <span className="font-medium">{post.author}</span>
                                            <span className="flex items-center gap-1">
                                                <Star className="w-3 h-3 text-yellow-400" />
                                                {post.authorRep}
                                            </span>
                                            <span>•</span>
                                            <span>{post.timeAgo}</span>
                                            {post.isAnswered && (
                                                <>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1 text-green-400">
                                                        <CheckCircle className="w-3 h-3" />
                                                        Answered
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Post Content */}
                                <p className="text-[#F3EFDA]/80 mb-4 line-clamp-2">{post.content}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-lg px-3 py-1 text-xs font-medium">
                                        {post.category}
                                    </span>
                                    {post.tags.map((tag, i) => (
                                        <span key={i} className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-3 py-1 text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Post Stats */}
                                <div className="flex items-center justify-between pt-4 border-t border-[#F3EFDA]/10">
                                    <div className="flex items-center gap-4 text-sm text-[#F3EFDA]/70">
                                        <motion.button
                                            className="flex items-center gap-1 hover:text-[#F3EFDA] transition-all"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Heart className="w-4 h-4" />
                                            {post.likes}
                                        </motion.button>
                                        <button className="flex items-center gap-1 hover:text-[#F3EFDA] transition-all">
                                            <Reply className="w-4 h-4" />
                                            {post.replies}
                                        </button>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {post.views}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <motion.button
                                            className="p-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Bookmark className="w-4 h-4" />
                                        </motion.button>
                                        <motion.button
                                            className="p-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all text-[#F3EFDA]/50"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Flag className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Top Contributors */}
                        <motion.div
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-5 h-5 text-yellow-400" />
                                <h3 className="font-bold text-lg">Top Contributors</h3>
                            </div>
                            <div className="space-y-4">
                                {topContributors.map((contributor, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center justify-between hover:bg-[#F3EFDA]/5 p-2 rounded-lg transition-all cursor-pointer"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{contributor.badge}</span>
                                            <div>
                                                <p className="font-semibold text-sm">{contributor.name}</p>
                                                <p className="text-xs text-[#F3EFDA]/60">{contributor.posts} posts</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold">{contributor.reputation}</p>
                                            <p className="text-xs text-[#F3EFDA]/60">reputation</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Community Guidelines */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold text-lg">Community Guidelines</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-[#F3EFDA]/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Be respectful and constructive</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Search before posting duplicates</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Mark helpful answers as solutions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Report inappropriate content</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Trending Topics */}
                        <motion.div
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp className="w-5 h-5 text-orange-400" />
                                <h3 className="font-bold text-lg">Trending Topics</h3>
                            </div>
                            <div className="space-y-2">
                                {['Speed Tournament Tips', 'AI Quiz Generation', 'Study Techniques', 'Global Leaderboard'].map((topic, index) => (
                                    <motion.button
                                        key={index}
                                        className="w-full text-left px-3 py-2 bg-[#F3EFDA]/5 hover:bg-[#F3EFDA]/10 rounded-lg transition-all text-sm"
                                        whileHover={{ x: 5 }}
                                    >
                                        #{topic}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-16 text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <MessageSquare className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Join the Conversation</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Share your knowledge, ask questions, and learn from thousands of fellow quiz enthusiasts.
                        Build your reputation and become a valued community member!
                    </p>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Send className="w-5 h-5" />
                        Create Your First Post
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default Forums