import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Search, Filter, Star, TrendingUp, Users, Calendar, Award, Bookmark, CheckCircle, Clock, Zap, Tag, Globe } from 'lucide-react';

const QuizLibrary = () => {
    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, 50]);

    const [activeCategory, setActiveCategory] = useState(0);

    const features = [
        {
            icon: Tag,
            title: "Organized Categories",
            description: "Browse thousands of quizzes sorted by subject, topic, and theme"
        },
        {
            icon: Filter,
            title: "Smart Filters",
            description: "Find the perfect quiz with filters for difficulty, type, and duration"
        },
        {
            icon: Bookmark,
            title: "Save Favorites",
            description: "Bookmark your favorite quizzes for quick access anytime"
        },
        {
            icon: Calendar,
            title: "Fresh Content",
            description: "Regular updates with new quizzes added daily across all topics"
        }
    ];

    const stats = [
        { label: "Total Quizzes", value: "50K+", icon: BookOpen },
        { label: "Categories", value: "100+", icon: Tag },
        { label: "Daily Players", value: "200K+", icon: Users },
        { label: "Avg Rating", value: "4.8★", icon: Star }
    ];

    const categories = [
        {
            name: "Science",
            icon: "🔬",
            quizCount: 5420,
            color: "#2196F3",
            popular: true
        },
        {
            name: "Mathematics",
            icon: "📐",
            quizCount: 4850,
            color: "#4CAF50",
            popular: true
        },
        {
            name: "History",
            icon: "📜",
            quizCount: 3920,
            color: "#FF9800",
            popular: false
        },
        {
            name: "Technology",
            icon: "💻",
            quizCount: 6200,
            color: "#9C27B0",
            popular: true
        },
        {
            name: "Languages",
            icon: "🗣️",
            quizCount: 4100,
            color: "#E91E63",
            popular: false
        },
        {
            name: "Geography",
            icon: "🌍",
            quizCount: 2890,
            color: "#00BCD4",
            popular: false
        }
    ];

    const popularQuizzes = [
        {
            title: "World Capitals Challenge",
            category: "Geography",
            difficulty: "Medium",
            questions: 25,
            rating: 4.9,
            plays: "125K",
            duration: "15 min",
            icon: "🌍"
        },
        {
            title: "Python Programming Basics",
            category: "Technology",
            difficulty: "Beginner",
            questions: 30,
            rating: 4.8,
            plays: "98K",
            duration: "20 min",
            icon: "💻"
        },
        {
            title: "Ancient Civilizations",
            category: "History",
            difficulty: "Hard",
            questions: 40,
            rating: 4.7,
            plays: "87K",
            duration: "25 min",
            icon: "📜"
        },
        {
            title: "Biology Essentials",
            category: "Science",
            difficulty: "Medium",
            questions: 35,
            rating: 4.9,
            plays: "112K",
            duration: "18 min",
            icon: "🔬"
        }
    ];

    const filterOptions = [
        { label: "All Levels", value: "all" },
        { label: "Beginner", value: "beginner" },
        { label: "Intermediate", value: "intermediate" },
        { label: "Advanced", value: "advanced" },
        { label: "Expert", value: "expert" }
    ];

    const quizTypes = [
        { name: "Multiple Choice", count: "35K+", icon: "☑️" },
        { name: "True/False", count: "12K+", icon: "✓✗" },
        { name: "Fill in the Blank", count: "8K+", icon: "📝" },
        { name: "Mixed Format", count: "15K+", icon: "🎯" }
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
                            <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-[#F3EFDA]" />
                            {/* Floating book pages effect */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-8 h-10 bg-[#F3EFDA]/20 rounded"
                                    style={{
                                        top: `${30 + i * 5}%`,
                                        right: `${-20 - i * 10}%`
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 10, 0],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-[#F3EFDA] mb-6"
                    >
                        Quiz Library
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#F3EFDA]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Thousands of ready-made quizzes at your fingertips. Browse, search, and take quizzes instantly across 100+ categories. No setup required—just pick and play!
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
                                placeholder="Search for quizzes, topics, or categories..."
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
                        <Globe className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">Explore Library</span>
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

                {/* Categories Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="max-w-6xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Browse by Category
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                onHoverStart={() => setActiveCategory(index)}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
                            >
                                {category.popular && (
                                    <div className="absolute top-3 right-3 bg-[#FFD700]/20 text-[#FFD700] text-xs font-semibold px-3 py-1 rounded-full">
                                        Popular
                                    </div>
                                )}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="relative z-10 text-center">
                                    <div className="text-5xl mb-4">{category.icon}</div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#F3EFDA] mb-2">{category.name}</h3>
                                    <p className="text-[#F3EFDA]/70 text-sm mb-3">{category.quizCount.toLocaleString()} quizzes</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-[#F3EFDA]/10 hover:bg-[#F3EFDA]/20 text-[#F3EFDA] py-2 rounded-lg font-semibold transition-all text-sm"
                                    >
                                        Explore →
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Popular Quizzes */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="max-w-6xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-4">
                        Trending Quizzes
                    </h2>
                    <p className="text-[#F3EFDA]/70 text-lg text-center mb-12">
                        Most popular quizzes this week
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {popularQuizzes.map((quiz, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.2 + index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="text-4xl">{quiz.icon}</div>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#F3EFDA] mb-1">{quiz.title}</h3>
                                                <p className="text-[#F3EFDA]/60 text-sm">{quiz.category}</p>
                                            </div>
                                        </div>
                                        <Bookmark className="w-5 h-5 text-[#F3EFDA]/50 hover:text-[#F3EFDA] cursor-pointer transition-colors" />
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${quiz.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                                quiz.difficulty === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                                                    'bg-red-500/20 text-red-400'
                                            }`}>
                                            {quiz.difficulty}
                                        </span>
                                        <div className="flex items-center gap-1 text-[#FFD700]">
                                            <Star className="w-4 h-4 fill-current" />
                                            <span className="text-[#F3EFDA] text-sm font-semibold">{quiz.rating}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3 mb-4 text-sm text-[#F3EFDA]/70">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4" />
                                            <span>{quiz.questions} Qs</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{quiz.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span>{quiz.plays}</span>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-[#F3EFDA] text-[#3B132A] py-3 rounded-xl font-semibold hover:bg-[#F3EFDA]/90 transition-all"
                                    >
                                        Start Quiz
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Quiz Types */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Quiz Formats Available
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {quizTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 text-center"
                            >
                                <div className="text-4xl mb-3">{type.icon}</div>
                                <h3 className="text-[#F3EFDA] font-semibold mb-2 text-sm">{type.name}</h3>
                                <p className="text-[#F3EFDA]/70 text-xl font-bold">{type.count}</p>
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
                        Library Features
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
                        How to Use Quiz Library
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Browse or Search", desc: "Explore categories or search for specific topics and subjects" },
                            { step: "2", title: "Filter Your Choices", desc: "Use filters to find quizzes by difficulty, type, and duration" },
                            { step: "3", title: "Save Your Favorites", desc: "Bookmark quizzes you love for quick access later" },
                            { step: "4", title: "Take & Track", desc: "Start quizzing instantly and monitor your scores over time" }
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
                        <BookOpen className="w-16 h-16 text-[#F3EFDA] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Ready to Start Learning?
                        </h2>
                        <p className="text-[#F3EFDA]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Dive into our vast collection of quizzes. Find the perfect quiz for any topic, save your favorites, and track your progress as you learn!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F3EFDA] text-[#3B132A] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Zap className="w-6 h-6" />
                                Browse Quizzes
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <TrendingUp className="w-6 h-6" />
                                View Popular
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default QuizLibrary;