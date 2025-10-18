import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Video, BookOpen, FileText, Play, CheckCircle, TrendingUp, Target, Lightbulb, Award, Users, Clock, Star, Download, Bookmark, Search, Filter, Zap, Brain, ArrowRight } from 'lucide-react';

const Tutorials = () => {
    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, 50]);

    const [activeLevel, setActiveLevel] = useState('all');

    const features = [
        {
            icon: Video,
            title: "Video Lessons",
            description: "High-quality video tutorials with visual explanations and examples"
        },
        {
            icon: FileText,
            title: "Interactive PDFs",
            description: "Downloadable guides and worksheets to learn at your own pace"
        },
        {
            icon: Target,
            title: "Practice Exercises",
            description: "Hands-on activities to reinforce your learning immediately"
        },
        {
            icon: CheckCircle,
            title: "Knowledge Tests",
            description: "End-of-lesson quizzes to validate your understanding"
        }
    ];

    const stats = [
        { label: "Video Tutorials", value: "2,500+", icon: Video },
        { label: "Topics Covered", value: "150+", icon: BookOpen },
        { label: "Active Learners", value: "100K+", icon: Users },
        { label: "Avg Completion", value: "87%", icon: TrendingUp }
    ];

    const learningPath = [
        {
            step: 1,
            title: "Learn",
            description: "Watch video lessons and study materials",
            icon: BookOpen,
            color: "#4CAF50"
        },
        {
            step: 2,
            title: "Practice",
            description: "Complete interactive exercises and examples",
            icon: Lightbulb,
            color: "#FF9800"
        },
        {
            step: 3,
            title: "Test",
            description: "Take quizzes to validate your knowledge",
            icon: CheckCircle,
            color: "#2196F3"
        }
    ];

    const tutorials = [
        {
            title: "Python Programming Fundamentals",
            category: "Technology",
            level: "Beginner",
            duration: "3.5 hours",
            lessons: 24,
            students: "45K",
            rating: 4.9,
            thumbnail: "💻",
            hasVideo: true,
            hasPDF: true,
            hasQuiz: true
        },
        {
            title: "Advanced Mathematics",
            category: "Mathematics",
            level: "Advanced",
            duration: "5 hours",
            lessons: 32,
            students: "28K",
            rating: 4.8,
            thumbnail: "📐",
            hasVideo: true,
            hasPDF: true,
            hasQuiz: true
        },
        {
            title: "World History Overview",
            category: "History",
            level: "Intermediate",
            duration: "4 hours",
            lessons: 28,
            students: "38K",
            rating: 4.7,
            thumbnail: "📜",
            hasVideo: true,
            hasPDF: true,
            hasQuiz: true
        },
        {
            title: "Biology Basics",
            category: "Science",
            level: "Beginner",
            duration: "2.5 hours",
            lessons: 18,
            students: "52K",
            rating: 4.9,
            thumbnail: "🔬",
            hasVideo: true,
            hasPDF: true,
            hasQuiz: true
        },
        {
            title: "English Grammar Mastery",
            category: "Language",
            level: "Intermediate",
            duration: "3 hours",
            lessons: 20,
            students: "41K",
            rating: 4.8,
            thumbnail: "📝",
            hasVideo: true,
            hasPDF: true,
            hasQuiz: true
        },
        {
            title: "Data Structures & Algorithms",
            category: "Technology",
            level: "Advanced",
            duration: "6 hours",
            lessons: 40,
            students: "35K",
            rating: 4.9,
            thumbnail: "⚙️",
            hasVideo: true,
            hasPDF: true,
            hasQuiz: true
        }
    ];

    const categories = [
        { name: "All Levels", value: "all" },
        { name: "Beginner", value: "beginner" },
        { name: "Intermediate", value: "intermediate" },
        { name: "Advanced", value: "advanced" }
    ];

    const popularTopics = [
        { name: "Programming", icon: "💻", count: 450 },
        { name: "Mathematics", icon: "📐", count: 380 },
        { name: "Science", icon: "🔬", count: 420 },
        { name: "Languages", icon: "🗣️", count: 290 },
        { name: "History", icon: "📜", count: 310 },
        { name: "Business", icon: "💼", count: 250 }
    ];

    const filteredTutorials = activeLevel === 'all'
        ? tutorials
        : tutorials.filter(t => t.level.toLowerCase() === activeLevel);

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
                            <Video className="w-16 h-16 md:w-20 md:h-20 text-[#F3EFDA]" />
                            {/* Play button animation */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-8 h-8 rounded-full bg-[#F3EFDA]/20 flex items-center justify-center">
                                    <Play className="w-4 h-4 text-[#F3EFDA] ml-0.5" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-[#F3EFDA] mb-6"
                    >
                        Tutorials
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#F3EFDA]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Master any topic with step-by-step guides. Learn through interactive videos, practice with exercises, and test your knowledge—all in one place.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-2xl mx-auto mb-6"
                    >
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#F3EFDA]/50" />
                            <input
                                type="text"
                                placeholder="Search tutorials, topics, or skills..."
                                className="w-full bg-[#F3EFDA]/5 backdrop-blur-xl border-2 border-[#F3EFDA]/20 rounded-full py-5 pl-16 pr-6 text-[#F3EFDA] placeholder-[#F3EFDA]/50 focus:border-[#F3EFDA]/50 focus:outline-none transition-colors text-lg"
                            />
                        </div>
                    </motion.div>

                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#F3EFDA] text-[#3B132A] px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-3 relative overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <Play className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">Start Learning</span>
                    </motion.button>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24 max-w-6xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
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

                {/* Learning Path Flow */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-4">
                        Our Learning Approach
                    </h2>
                    <p className="text-[#F3EFDA]/70 text-lg text-center mb-12">
                        Master concepts through our proven 3-step method
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {learningPath.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                                className="relative"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-8 text-center relative overflow-hidden group"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="relative z-10">
                                        <div
                                            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-2xl text-[#3B132A]"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            {step.step}
                                        </div>
                                        <step.icon className="w-10 h-10 text-[#F3EFDA] mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-[#F3EFDA] mb-3">{step.title}</h3>
                                        <p className="text-[#F3EFDA]/70">{step.description}</p>
                                    </div>
                                </motion.div>

                                {/* Arrow between steps */}
                                {index < learningPath.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                                        <ArrowRight className="w-6 h-6 text-[#F3EFDA]/30" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Filter Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="max-w-6xl mx-auto mb-12"
                >
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA]">
                            Popular Tutorials
                        </h2>

                        {/* Level Filter */}
                        <div className="flex gap-2">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.value}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveLevel(category.value)}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeLevel === category.value
                                            ? 'bg-[#F3EFDA] text-[#3B132A]'
                                            : 'bg-[#F3EFDA]/10 text-[#F3EFDA] hover:bg-[#F3EFDA]/20'
                                        }`}
                                >
                                    {category.name}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Tutorial Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTutorials.map((tutorial, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl overflow-hidden group"
                            >
                                {/* Thumbnail */}
                                <div className="relative h-40 bg-gradient-to-br from-[#F3EFDA]/20 to-[#F3EFDA]/5 flex items-center justify-center">
                                    <span className="text-6xl">{tutorial.thumbnail}</span>
                                    <div className="absolute top-3 right-3">
                                        <Bookmark className="w-5 h-5 text-[#F3EFDA]/50 hover:text-[#F3EFDA] cursor-pointer transition-colors" />
                                    </div>
                                    <motion.div
                                        className="absolute inset-0 bg-[#3B132A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-[#F3EFDA] flex items-center justify-center">
                                            <Play className="w-8 h-8 text-[#3B132A] ml-1" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-[#F3EFDA]/60">{tutorial.category}</span>
                                        <div className="flex items-center gap-1 text-[#FFD700]">
                                            <Star className="w-4 h-4 fill-current" />
                                            <span className="text-[#F3EFDA] text-sm font-semibold">{tutorial.rating}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#F3EFDA] mb-3 group-hover:text-[#F3EFDA]/90 transition-colors">
                                        {tutorial.title}
                                    </h3>

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                                tutorial.level === 'Intermediate' ? 'bg-orange-500/20 text-orange-400' :
                                                    'bg-red-500/20 text-red-400'
                                            }`}>
                                            {tutorial.level}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-[#F3EFDA]/70">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{tutorial.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BookOpen className="w-4 h-4" />
                                            <span>{tutorial.lessons} lessons</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span>{tutorial.students}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#F3EFDA]">
                                            {tutorial.hasVideo && <Video className="w-4 h-4" />}
                                            {tutorial.hasPDF && <FileText className="w-4 h-4" />}
                                            {tutorial.hasQuiz && <Target className="w-4 h-4" />}
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-[#F3EFDA] text-[#3B132A] py-3 rounded-xl font-semibold hover:bg-[#F3EFDA]/90 transition-all"
                                    >
                                        Start Tutorial
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Popular Topics */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Browse by Topic
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {popularTopics.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 text-center cursor-pointer group"
                            >
                                <div className="text-4xl mb-3">{topic.icon}</div>
                                <h3 className="text-lg font-bold text-[#F3EFDA] mb-2">{topic.name}</h3>
                                <p className="text-[#F3EFDA]/70 text-sm">{topic.count} tutorials</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Tutorial Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.6 + index * 0.1 }}
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
                    transition={{ delay: 1.7 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        How Tutorials Work
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Choose Your Topic", desc: "Browse tutorials by subject, skill level, or search for specific topics" },
                            { step: "2", title: "Learn with Videos & Materials", desc: "Watch video lessons and download PDFs for comprehensive understanding" },
                            { step: "3", title: "Practice Your Skills", desc: "Complete interactive exercises to reinforce what you've learned" },
                            { step: "4", title: "Test Your Knowledge", desc: "Take quizzes at the end of each tutorial to validate mastery" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.8 + index * 0.1 }}
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
                    transition={{ delay: 1.9 }}
                    className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3EFDA]/10 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative z-10">
                        <Brain className="w-16 h-16 text-[#F3EFDA] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Ready to Master New Skills?
                        </h2>
                        <p className="text-[#F3EFDA]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Start your learning journey today with thousands of step-by-step tutorials. Learn, practice, and test your knowledge—all structured for your success!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F3EFDA] text-[#3B132A] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Play className="w-6 h-6" />
                                Browse Tutorials
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Download className="w-6 h-6" />
                                Download Materials
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Tutorials;