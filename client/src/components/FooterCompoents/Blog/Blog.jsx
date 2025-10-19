import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BookOpen, TrendingUp, Lightbulb, Zap, Users, Calendar, Clock, ChevronRight, Search, Tag, Star, MessageCircle, Heart, Share2, Award, Target, Brain } from 'lucide-react'

const Blog = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const blogPosts = [
        {
            id: 1,
            title: "10 Proven Strategies to Ace Any Quiz Competition",
            excerpt: "Master the art of competitive quizzing with these expert-backed techniques that top performers use to dominate tournaments.",
            author: "Sarah Chen",
            authorRole: "Quiz Champion",
            date: "Oct 18, 2025",
            readTime: "8 min read",
            category: "strategies",
            tags: ["Competition", "Tips", "Advanced"],
            image: "bg-gradient-to-br from-blue-500/30 to-purple-500/30",
            likes: 342,
            comments: 28,
            featured: true
        },
        {
            id: 2,
            title: "How AI is Revolutionizing Personalized Learning",
            excerpt: "Explore how BattleIQ's AI algorithms create custom learning paths that adapt to your unique strengths and weaknesses.",
            author: "Dr. Michael Roberts",
            authorRole: "EdTech Researcher",
            date: "Oct 16, 2025",
            readTime: "6 min read",
            category: "ai-learning",
            tags: ["AI", "Technology", "Innovation"],
            image: "bg-gradient-to-br from-green-500/30 to-teal-500/30",
            likes: 289,
            comments: 45,
            featured: true
        },
        {
            id: 3,
            title: "Meet Alex Kumar: From Beginner to Top 10 Global Rank",
            excerpt: "An inspiring journey of dedication, practice, and strategic learning that took one user to the top of our leaderboards.",
            author: "Emma Martinez",
            authorRole: "Community Manager",
            date: "Oct 14, 2025",
            readTime: "10 min read",
            category: "interviews",
            tags: ["Success Story", "Interview", "Inspiration"],
            image: "bg-gradient-to-br from-yellow-500/30 to-orange-500/30",
            likes: 567,
            comments: 89,
            featured: true
        },
        {
            id: 4,
            title: "New Feature Alert: Team Battle Leagues Launch",
            excerpt: "Introducing seasonal leagues where teams compete for exclusive rewards and glory. Sign up your team today!",
            author: "BattleIQ Team",
            authorRole: "Product Updates",
            date: "Oct 12, 2025",
            readTime: "4 min read",
            category: "updates",
            tags: ["Features", "Teams", "Announcement"],
            image: "bg-gradient-to-br from-pink-500/30 to-rose-500/30",
            likes: 428,
            comments: 62,
            featured: false
        },
        {
            id: 5,
            title: "The Science Behind Spaced Repetition in Quiz Learning",
            excerpt: "Discover why reviewing material at specific intervals is the most effective way to retain knowledge long-term.",
            author: "Dr. Lisa Wang",
            authorRole: "Learning Scientist",
            date: "Oct 10, 2025",
            readTime: "7 min read",
            category: "learning-tips",
            tags: ["Science", "Memory", "Study Tips"],
            image: "bg-gradient-to-br from-indigo-500/30 to-blue-500/30",
            likes: 234,
            comments: 31,
            featured: false
        },
        {
            id: 6,
            title: "5 Time Management Hacks for Timed Quiz Success",
            excerpt: "Learn how to maximize your score under pressure with these proven time management techniques.",
            author: "Mark Thompson",
            authorRole: "Speed Quiz Expert",
            date: "Oct 8, 2025",
            readTime: "5 min read",
            category: "strategies",
            tags: ["Time Management", "Speed", "Tips"],
            image: "bg-gradient-to-br from-red-500/30 to-orange-500/30",
            likes: 312,
            comments: 24,
            featured: false
        },
        {
            id: 7,
            title: "Building Effective Study Groups on BattleIQ",
            excerpt: "Transform your learning experience by creating and managing high-performing study teams.",
            author: "Jennifer Lee",
            authorRole: "Educator",
            date: "Oct 6, 2025",
            readTime: "6 min read",
            category: "learning-tips",
            tags: ["Teams", "Collaboration", "Study Groups"],
            image: "bg-gradient-to-br from-purple-500/30 to-pink-500/30",
            likes: 189,
            comments: 18,
            featured: false
        },
        {
            id: 8,
            title: "What's New: AI Quiz Generator 2.0 Features",
            excerpt: "Our biggest update yet brings smarter question generation, difficulty customization, and more control over your quizzes.",
            author: "BattleIQ Team",
            authorRole: "Product Updates",
            date: "Oct 4, 2025",
            readTime: "5 min read",
            category: "updates",
            tags: ["AI", "Features", "Update"],
            image: "bg-gradient-to-br from-cyan-500/30 to-blue-500/30",
            likes: 445,
            comments: 71,
            featured: false
        }
    ]

    const categories = [
        { id: 'all', name: 'All Posts', icon: BookOpen, count: blogPosts.length },
        { id: 'strategies', name: 'Quiz Strategies', icon: Target, count: blogPosts.filter(p => p.category === 'strategies').length },
        { id: 'ai-learning', name: 'AI & Learning', icon: Brain, count: blogPosts.filter(p => p.category === 'ai-learning').length },
        { id: 'learning-tips', name: 'Learning Tips', icon: Lightbulb, count: blogPosts.filter(p => p.category === 'learning-tips').length },
        { id: 'interviews', name: 'Interviews', icon: Users, count: blogPosts.filter(p => p.category === 'interviews').length },
        { id: 'updates', name: 'Platform Updates', icon: Zap, count: blogPosts.filter(p => p.category === 'updates').length }
    ]

    const popularTags = [
        "AI", "Study Tips", "Competition", "Features", "Success Stories",
        "Time Management", "Teams", "Innovation", "Strategies"
    ]

    const trendingPosts = blogPosts
        .sort((a, b) => b.likes - a.likes)
        .slice(0, 3)

    const filteredPosts = selectedCategory === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory)

    const featuredPosts = blogPosts.filter(post => post.featured)

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
                        <BookOpen className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Insights & Updates</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        BattleIQ Blog
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Expert strategies, learning tips, platform updates, and inspiring success stories
                        from the BattleIQ community.
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    className="max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search articles..."
                            className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl pl-12 pr-4 py-4 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                        />
                    </div>
                </motion.div>

                {/* Categories */}
                <div className="mb-12 overflow-x-auto pb-2">
                    <div className="flex gap-3 min-w-max">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${selectedCategory === category.id
                                        ? 'bg-[#F3EFDA] text-[#3B132A]'
                                        : 'bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/20'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <category.icon className="w-4 h-4" />
                                <span>{category.name}</span>
                                <span className="text-xs opacity-70">({category.count})</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Featured Posts */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <Star className="w-8 h-8 text-yellow-400" />
                        Featured Articles
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredPosts.slice(0, 2).map((post, index) => (
                            <motion.article
                                key={post.id}
                                className="relative bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border-2 border-[#F3EFDA]/30 rounded-3xl overflow-hidden cursor-pointer group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={`${post.image} h-64 flex items-center justify-center border-b border-[#F3EFDA]/20`}>
                                    <BookOpen className="w-24 h-24 text-[#F3EFDA]/30 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs font-semibold">
                                            {categories.find(c => c.id === post.category)?.name}
                                        </span>
                                        <div className="flex items-center gap-2 text-sm text-[#F3EFDA]/70">
                                            <Calendar className="w-4 h-4" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-[#F3EFDA]/70">
                                            <Clock className="w-4 h-4" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#F3EFDA]/90 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#F3EFDA]/70 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-[#F3EFDA]/10">
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-full bg-[#F3EFDA]/20 flex items-center justify-center font-bold">
                                                {post.author.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm">{post.author}</p>
                                                <p className="text-xs text-[#F3EFDA]/60">{post.authorRole}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm">
                                            <span className="flex items-center gap-1">
                                                <Heart className="w-4 h-4" />
                                                {post.likes}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageCircle className="w-4 h-4" />
                                                {post.comments}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Blog Posts */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold mb-6">
                            {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
                        </h2>
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl overflow-hidden hover:bg-[#F3EFDA]/10 transition-all cursor-pointer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                whileHover={{ x: 5 }}
                            >
                                <div className="md:flex">
                                    <div className={`${post.image} md:w-64 h-48 md:h-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-[#F3EFDA]/20`}>
                                        <BookOpen className="w-16 h-16 text-[#F3EFDA]/30" />
                                    </div>
                                    <div className="p-6 flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs font-semibold">
                                                {categories.find(c => c.id === post.category)?.name}
                                            </span>
                                            <div className="flex items-center gap-4 text-xs text-[#F3EFDA]/60">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 hover:text-[#F3EFDA]/90 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-[#F3EFDA]/70 mb-4 line-clamp-2">{post.excerpt}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag, idx) => (
                                                <span key={idx} className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded px-2 py-1 text-xs">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-[#F3EFDA]/20 flex items-center justify-center text-xs font-bold">
                                                    {post.author.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold">{post.author}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm">
                                                <span className="flex items-center gap-1 text-[#F3EFDA]/70">
                                                    <Heart className="w-4 h-4" />
                                                    {post.likes}
                                                </span>
                                                <span className="flex items-center gap-1 text-[#F3EFDA]/70">
                                                    <MessageCircle className="w-4 h-4" />
                                                    {post.comments}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Trending Posts */}
                        <motion.div
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="w-5 h-5 text-orange-400" />
                                <h3 className="font-bold text-lg">Trending Posts</h3>
                            </div>
                            <div className="space-y-4">
                                {trendingPosts.map((post, index) => (
                                    <div key={post.id} className="group cursor-pointer">
                                        <div className="flex items-start gap-3">
                                            <span className="text-3xl font-bold text-[#F3EFDA]/20 group-hover:text-[#F3EFDA]/40 transition-colors">
                                                {index + 1}
                                            </span>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-sm mb-2 group-hover:text-[#F3EFDA]/90 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <div className="flex items-center gap-3 text-xs text-[#F3EFDA]/60">
                                                    <span className="flex items-center gap-1">
                                                        <Heart className="w-3 h-3" />
                                                        {post.likes}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {index < trendingPosts.length - 1 && (
                                            <div className="mt-4 border-b border-[#F3EFDA]/10" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Popular Tags */}
                        <motion.div
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <Tag className="w-5 h-5" />
                                <h3 className="font-bold text-lg">Popular Tags</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {popularTags.map((tag, index) => (
                                    <motion.button
                                        key={index}
                                        className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-3 py-2 text-sm hover:bg-[#F3EFDA]/20 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        #{tag}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Newsletter */}
                        <motion.div
                            className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 border border-purple-400/30 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <Award className="w-12 h-12 text-purple-400 mb-4" />
                            <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                            <p className="text-sm text-[#F3EFDA]/80 mb-4">
                                Get the latest articles, tips, and updates delivered to your inbox weekly.
                            </p>
                            <input
                                type="email"
                                placeholder="Your email..."
                                className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-4 py-3 text-sm mb-3 focus:outline-none focus:border-[#F3EFDA]/40"
                            />
                            <motion.button
                                className="w-full bg-[#F3EFDA] text-[#3B132A] font-bold py-3 rounded-lg hover:bg-[#F3EFDA]/90 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
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
                    <Lightbulb className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Have a Story to Share?</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        We're always looking for guest contributors! Share your quiz strategies, learning tips,
                        or success stories with our community.
                    </p>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Share2 className="w-5 h-5" />
                        Submit Guest Post
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default Blog