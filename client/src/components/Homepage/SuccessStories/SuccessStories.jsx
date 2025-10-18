import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BookOpen, TrendingUp, Award, Users, Star, Heart, MessageCircle, Play, Quote, CheckCircle, Flame, Target, Trophy, Plus, Filter, Calendar, Eye } from 'lucide-react'

const SuccessStories = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedStory, setSelectedStory] = useState(null)

    const stories = [
        {
            id: 1,
            type: "student",
            name: "Sarah Chen",
            title: "From Struggling Student to Quiz Champion",
            avatar: "bg-pink-400",
            location: "Singapore",
            date: "Oct 15, 2025",
            story: "I started using this platform 6 months ago when I was struggling with my history classes. The daily quizzes and competitive tournaments completely changed my approach to learning. Now I'm ranked in the top 100 globally!",
            achievement: "Global Rank #47",
            stats: {
                before: "Average Score: 62%",
                after: "Average Score: 94%",
                improvement: "+32%",
                streak: "180 days"
            },
            likes: 1247,
            comments: 89,
            category: "Academic Success",
            featured: true,
            video: true
        },
        {
            id: 2,
            type: "teacher",
            name: "Dr. Michael Roberts",
            title: "Transforming My Classroom with Gamification",
            avatar: "bg-blue-400",
            location: "United States",
            date: "Oct 12, 2025",
            story: "As a high school teacher for 15 years, I've never seen my students this engaged. Using team battles and tournaments, my class participation went from 60% to 98%. The AI quiz generator saves me hours of prep time.",
            achievement: "Class Average +28%",
            stats: {
                before: "Class Participation: 60%",
                after: "Class Participation: 98%",
                improvement: "+38%",
                students: "150+"
            },
            likes: 892,
            comments: 134,
            category: "Teaching Excellence",
            featured: true,
            video: false
        },
        {
            id: 3,
            type: "team",
            name: "Brain Champions Squad",
            title: "From Last Place to Tournament Winners",
            avatar: "bg-purple-400",
            location: "Global Team",
            date: "Oct 10, 2025",
            story: "Our team of 8 friends started at the bottom of the rankings. Through daily practice, team coordination, and supporting each other, we won our first major tournament after just 3 months!",
            achievement: "Tournament Champions",
            stats: {
                before: "Team Rank: #892",
                after: "Team Rank: #12",
                improvement: "880 ranks",
                wins: "156"
            },
            likes: 2134,
            comments: 267,
            category: "Team Achievement",
            featured: true,
            video: true
        },
        {
            id: 4,
            type: "student",
            name: "Alex Kumar",
            title: "Perfect Score Streak: 50 Quizzes in a Row",
            avatar: "bg-green-400",
            location: "India",
            date: "Oct 8, 2025",
            story: "I never thought I could maintain such consistency. The platform's daily challenges and progress tracking kept me motivated. Achieving 100% on 50 consecutive quizzes taught me discipline and focus.",
            achievement: "50 Perfect Scores",
            stats: {
                before: "Average: 78%",
                after: "Average: 99.2%",
                improvement: "+21.2%",
                perfectScores: "50"
            },
            likes: 1567,
            comments: 203,
            category: "Personal Best",
            featured: false,
            video: false
        },
        {
            id: 5,
            type: "teacher",
            name: "Emily Martinez",
            title: "Engaging Remote Learners During Tough Times",
            avatar: "bg-yellow-400",
            location: "Spain",
            date: "Oct 5, 2025",
            story: "Teaching remotely was challenging until I discovered this platform. The competitive element and instant feedback transformed my virtual classroom. Students who were disengaged are now top performers.",
            achievement: "100% Student Engagement",
            stats: {
                before: "Remote Engagement: 45%",
                after: "Remote Engagement: 100%",
                improvement: "+55%",
                students: "85"
            },
            likes: 756,
            comments: 98,
            category: "Innovation",
            featured: false,
            video: true
        },
        {
            id: 6,
            type: "student",
            name: "Jordan Taylor",
            title: "Certification Achievement Unlocked My Dream Job",
            avatar: "bg-orange-400",
            location: "Canada",
            date: "Oct 1, 2025",
            story: "I earned 12 certifications on this platform while studying for my career change. I added them to my LinkedIn, and they helped me land my dream job in tech. The verified certificates made all the difference!",
            achievement: "12 Certifications",
            stats: {
                before: "Career Transition",
                after: "Dream Job Secured",
                certifications: "12",
                interviews: "5 offers"
            },
            likes: 1823,
            comments: 156,
            category: "Career Success",
            featured: true,
            video: false
        }
    ]

    const categories = [
        { id: 'all', name: 'All Stories', icon: '📚', count: stories.length },
        { id: 'student', name: 'Student Success', icon: '🎓', count: stories.filter(s => s.type === 'student').length },
        { id: 'teacher', name: 'Teacher Stories', icon: '👨‍🏫', count: stories.filter(s => s.type === 'teacher').length },
        { id: 'team', name: 'Team Achievements', icon: '👥', count: stories.filter(s => s.type === 'team').length }
    ]

    const stats = [
        { icon: Users, value: "50K+", label: "Success Stories" },
        { icon: TrendingUp, value: "92%", label: "Improved Scores" },
        { icon: Award, value: "15K+", label: "Certifications" },
        { icon: Trophy, value: "5K+", label: "Tournament Wins" }
    ]

    const impactMetrics = [
        { metric: "Average Score Improvement", value: "+34%", icon: TrendingUp, color: "text-green-400" },
        { metric: "Student Engagement Rate", value: "96%", icon: Heart, color: "text-pink-400" },
        { metric: "Daily Active Learners", value: "127K", icon: Flame, color: "text-orange-400" },
        { metric: "Global Reach", value: "156 Countries", icon: Target, color: "text-blue-400" }
    ]

    const filteredStories = selectedCategory === 'all'
        ? stories
        : stories.filter(s => s.type === selectedCategory)

    const featuredStories = stories.filter(s => s.featured)

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
                        <span className="text-sm font-medium">Real Stories, Real Success</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Success Stories
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Discover how learners, teachers, and teams around the world are achieving amazing results.
                        Get inspired by their journeys and start your own success story today!
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

                {/* Featured Stories */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <Star className="w-8 h-8 text-yellow-400" />
                        Featured Stories
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {featuredStories.slice(0, 2).map((story, index) => (
                            <motion.div
                                key={story.id}
                                className="relative bg-gradient-to-br from-[#F3EFDA]/15 to-[#F3EFDA]/5 backdrop-blur-sm border-2 border-[#F3EFDA]/30 rounded-3xl p-8 overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedStory(story)}
                            >
                                {/* Video Badge */}
                                {story.video && (
                                    <div className="absolute top-6 right-6 bg-red-500/20 border border-red-500/40 rounded-full px-3 py-1 flex items-center gap-1">
                                        <Play className="w-3 h-3 text-red-400" />
                                        <span className="text-xs font-semibold text-red-400">Video</span>
                                    </div>
                                )}

                                {/* Profile */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-20 h-20 rounded-full ${story.avatar} flex items-center justify-center text-3xl font-bold`}>
                                        {story.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                                        <p className="text-sm text-[#F3EFDA]/70 mb-1">{story.location}</p>
                                        <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs font-semibold">
                                            {story.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Story Title */}
                                <h4 className="text-xl font-bold mb-4 flex items-start gap-2">
                                    <Quote className="w-6 h-6 text-[#F3EFDA]/40 flex-shrink-0" />
                                    {story.title}
                                </h4>

                                {/* Story Preview */}
                                <p className="text-[#F3EFDA]/80 mb-6 line-clamp-3">{story.story}</p>

                                {/* Achievement Badge */}
                                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/40 rounded-xl p-4 mb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Trophy className="w-5 h-5 text-yellow-400" />
                                        <span className="font-bold text-yellow-400">Achievement</span>
                                    </div>
                                    <p className="text-lg font-bold">{story.achievement}</p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="bg-[#F3EFDA]/10 rounded-xl p-3">
                                        <p className="text-xs text-[#F3EFDA]/60 mb-1">Before</p>
                                        <p className="font-semibold text-sm">{story.stats.before}</p>
                                    </div>
                                    <div className="bg-[#F3EFDA]/10 rounded-xl p-3">
                                        <p className="text-xs text-[#F3EFDA]/60 mb-1">After</p>
                                        <p className="font-semibold text-sm">{story.stats.after}</p>
                                    </div>
                                </div>

                                {/* Engagement */}
                                <div className="flex items-center justify-between pt-4 border-t border-[#F3EFDA]/10">
                                    <div className="flex items-center gap-4 text-sm">
                                        <button className="flex items-center gap-1 hover:text-pink-400 transition-all">
                                            <Heart className="w-4 h-4" />
                                            {story.likes}
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-blue-400 transition-all">
                                            <MessageCircle className="w-4 h-4" />
                                            {story.comments}
                                        </button>
                                    </div>
                                    <span className="text-xs text-[#F3EFDA]/60">{story.date}</span>
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

                {/* Impact Metrics */}
                <motion.div
                    className="mb-16 bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Platform Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {impactMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <metric.icon className={`w-12 h-12 mx-auto mb-3 ${metric.color}`} />
                                <p className="text-4xl font-bold mb-2">{metric.value}</p>
                                <p className="text-sm text-[#F3EFDA]/70">{metric.metric}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Category Filter */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <Filter className="w-5 h-5" />
                        <h2 className="text-2xl font-bold">Browse Stories</h2>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${selectedCategory === category.id
                                        ? 'bg-[#F3EFDA] text-[#3B132A]'
                                        : 'bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/20'
                                    }`}
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

                {/* All Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredStories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 hover:bg-[#F3EFDA]/10 transition-all cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setSelectedStory(story)}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-full ${story.avatar} flex items-center justify-center text-lg font-bold`}>
                                        {story.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{story.name}</h4>
                                        <p className="text-xs text-[#F3EFDA]/60">{story.location}</p>
                                    </div>
                                </div>
                                {story.video && (
                                    <div className="bg-red-500/20 border border-red-500/40 rounded-full p-2">
                                        <Play className="w-4 h-4 text-red-400" />
                                    </div>
                                )}
                            </div>

                            {/* Story Title */}
                            <h5 className="font-bold mb-3 line-clamp-2">{story.title}</h5>

                            {/* Category */}
                            <span className="inline-block bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs font-semibold mb-3">
                                {story.category}
                            </span>

                            {/* Story Preview */}
                            <p className="text-sm text-[#F3EFDA]/70 mb-4 line-clamp-2">{story.story}</p>

                            {/* Achievement */}
                            <div className="bg-[#F3EFDA]/10 rounded-lg p-3 mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span className="text-xs font-semibold text-green-400">Achievement</span>
                                </div>
                                <p className="font-bold text-sm">{story.achievement}</p>
                            </div>

                            {/* Stats Preview */}
                            <div className="mb-4">
                                <p className="text-xs text-[#F3EFDA]/60 mb-1">Improvement</p>
                                <p className="text-2xl font-bold text-green-400">{story.stats.improvement}</p>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-3 border-t border-[#F3EFDA]/10 text-xs">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1">
                                        <Heart className="w-3 h-3" />
                                        {story.likes}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MessageCircle className="w-3 h-3" />
                                        {story.comments}
                                    </span>
                                </div>
                                <span className="text-[#F3EFDA]/60">{story.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Submit Your Story CTA */}
                <motion.div
                    className="text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Award className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Share Your Success Story</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Have you achieved something amazing on our platform? Inspire others by sharing your journey!
                        Your story could motivate thousands of learners worldwide.
                    </p>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Plus className="w-5 h-5" />
                        Submit Your Story
                    </motion.button>
                </motion.div>
            </div>

            {/* Story Detail Modal */}
            {selectedStory && (
                <motion.div
                    className="fixed inset-0 bg-[#3B132A]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedStory(null)}
                >
                    <motion.div
                        className="bg-[#3B132A] border-2 border-[#F3EFDA]/30 rounded-3xl p-8 max-w-3xl w-full my-8"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedStory(null)}
                            className="absolute top-4 right-4 p-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                        >
                            ✕
                        </button>

                        {/* Video Badge */}
                        {selectedStory.video && (
                            <div className="mb-6 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/40 rounded-2xl p-8 text-center">
                                <Play className="w-16 h-16 text-red-400 mx-auto mb-3" />
                                <p className="font-semibold">Video Story Available</p>
                                <p className="text-sm text-[#F3EFDA]/70">Watch the full interview</p>
                            </div>
                        )}

                        {/* Profile Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`w-24 h-24 rounded-full ${selectedStory.avatar} flex items-center justify-center text-4xl font-bold`}>
                                {selectedStory.name.charAt(0)}
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-2">{selectedStory.name}</h2>
                                <p className="text-[#F3EFDA]/70 mb-2">{selectedStory.location}</p>
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-4 py-1 text-sm font-semibold">
                                        {selectedStory.category}
                                    </span>
                                    <span className="text-sm text-[#F3EFDA]/60 flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {selectedStory.date}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Story Title */}
                        <h3 className="text-2xl font-bold mb-6 flex items-start gap-3">
                            <Quote className="w-8 h-8 text-[#F3EFDA]/40 flex-shrink-0 mt-1" />
                            {selectedStory.title}
                        </h3>

                        {/* Full Story */}
                        <div className="bg-[#F3EFDA]/5 rounded-2xl p-6 mb-6">
                            <p className="text-[#F3EFDA]/90 leading-relaxed">{selectedStory.story}</p>
                        </div>

                        {/* Achievement Highlight */}
                        <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400/40 rounded-2xl p-6 mb-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Trophy className="w-8 h-8 text-yellow-400" />
                                <span className="text-xl font-bold text-yellow-400">Key Achievement</span>
                            </div>
                            <p className="text-2xl font-bold">{selectedStory.achievement}</p>
                        </div>

                        {/* Detailed Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-5">
                                <p className="text-sm text-[#F3EFDA]/60 mb-2">Before</p>
                                <p className="text-xl font-bold mb-1">{selectedStory.stats.before}</p>
                                <p className="text-xs text-[#F3EFDA]/50">Starting Point</p>
                            </div>
                            <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-5">
                                <p className="text-sm text-[#F3EFDA]/60 mb-2">After</p>
                                <p className="text-xl font-bold mb-1">{selectedStory.stats.after}</p>
                                <p className="text-xs text-[#F3EFDA]/50">Current Status</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/40 rounded-xl p-5">
                                <p className="text-sm text-green-400 mb-2">Improvement</p>
                                <p className="text-3xl font-bold text-green-400">{selectedStory.stats.improvement}</p>
                            </div>
                            <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-5">
                                <p className="text-sm text-[#F3EFDA]/60 mb-2">Additional Stat</p>
                                <p className="text-xl font-bold">
                                    {selectedStory.stats.streak || selectedStory.stats.students || selectedStory.stats.wins || selectedStory.stats.certifications}
                                </p>
                                <p className="text-xs text-[#F3EFDA]/50">
                                    {selectedStory.stats.streak ? 'Day Streak' :
                                        selectedStory.stats.students ? 'Students Impacted' :
                                            selectedStory.stats.wins ? 'Team Wins' :
                                                'Certifications Earned'}
                                </p>
                            </div>
                        </div>

                        {/* Engagement Stats */}
                        <div className="flex items-center justify-between pt-6 border-t border-[#F3EFDA]/20 mb-6">
                            <div className="flex items-center gap-6">
                                <motion.button
                                    className="flex items-center gap-2 text-lg hover:text-pink-400 transition-all"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Heart className="w-6 h-6" />
                                    <span className="font-bold">{selectedStory.likes}</span>
                                </motion.button>
                                <button className="flex items-center gap-2 text-lg hover:text-blue-400 transition-all">
                                    <MessageCircle className="w-6 h-6" />
                                    <span className="font-bold">{selectedStory.comments}</span>
                                </button>
                                <button className="flex items-center gap-2 text-lg hover:text-[#F3EFDA] transition-all">
                                    <Eye className="w-6 h-6" />
                                    <span className="font-bold">{Math.floor(Math.random() * 5000) + 2000}</span>
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.button
                                className="bg-[#F3EFDA] text-[#3B132A] font-bold py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Heart className="w-5 h-5" />
                                Like Story
                            </motion.button>
                            <motion.button
                                className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-bold py-4 rounded-xl hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Comment
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default SuccessStories