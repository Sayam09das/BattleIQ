import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BookOpen, Clock, Award, ChevronRight, TrendingUp, Users, Target, Search } from 'lucide-react'

const QuizList = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const { scrollYProgress } = useScroll()

    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
    const yCircleLeft = useTransform(scrollYProgress, [0, 1], [0, 150])
    const yCircleRight = useTransform(scrollYProgress, [0, 1], [0, -150])

    const quizzes = [
        {
            id: 1,
            title: 'Advanced JavaScript Concepts',
            category: 'Programming',
            difficulty: 'Hard',
            questions: 25,
            duration: '45 min',
            participants: 1240,
            rating: 4.8,
            icon: '💻',
            color: 'from-purple-500/20 to-pink-500/20'
        },
        {
            id: 2,
            title: 'World History: Ancient Civilizations',
            category: 'History',
            difficulty: 'Medium',
            questions: 30,
            duration: '40 min',
            participants: 2100,
            rating: 4.6,
            icon: '🏛️',
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            id: 3,
            title: 'Modern Physics & Quantum Mechanics',
            category: 'Science',
            difficulty: 'Hard',
            questions: 20,
            duration: '50 min',
            participants: 890,
            rating: 4.9,
            icon: '⚛️',
            color: 'from-green-500/20 to-emerald-500/20'
        },
        {
            id: 4,
            title: 'Business Strategy & Management',
            category: 'Business',
            difficulty: 'Medium',
            questions: 28,
            duration: '35 min',
            participants: 1560,
            rating: 4.7,
            icon: '📊',
            color: 'from-orange-500/20 to-red-500/20'
        },
        {
            id: 5,
            title: 'Creative Writing Masterclass',
            category: 'Arts',
            difficulty: 'Easy',
            questions: 15,
            duration: '25 min',
            participants: 3200,
            rating: 4.5,
            icon: '✍️',
            color: 'from-pink-500/20 to-rose-500/20'
        },
        {
            id: 6,
            title: 'Data Structures & Algorithms',
            category: 'Programming',
            difficulty: 'Hard',
            questions: 35,
            duration: '60 min',
            participants: 980,
            rating: 4.9,
            icon: '🧮',
            color: 'from-indigo-500/20 to-purple-500/20'
        }
    ]

    const categories = ['all', 'Programming', 'History', 'Science', 'Business', 'Arts']

    const filteredQuizzes = quizzes.filter(quiz => {
        const matchesCategory = selectedCategory === 'all' || quiz.category === selectedCategory
        const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            quiz.category.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'text-green-400'
            case 'Medium': return 'text-yellow-400'
            case 'Hard': return 'text-red-400'
            default: return 'text-gray-400'
        }
    }

    return (
        <div className="min-h-screen bg-[#3B132A] relative overflow-hidden">
            <motion.div
                className="relative w-full min-h-screen flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 py-12"
                style={{ opacity, scale }}
            >
                {/* Animated Geometric Background */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Large Circle - Top Left */}
                    <motion.div
                        className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                        style={{ y: yCircleLeft }}
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Large Circle - Bottom Right */}
                    <motion.div
                        className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                        style={{ y: yCircleRight }}
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, -5, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />

                    {/* Floating particles */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20"
                            style={{
                                left: `${20 + i * 20}%`,
                                top: `${30 + i * 10}%`
                            }}
                            animate={{
                                y: [-20, 20, -20],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F3EFDA] mb-4">
                            Discover Quizzes
                        </h1>
                        <p className="text-lg sm:text-xl text-[#F3EFDA]/70 max-w-2xl mx-auto">
                            Challenge yourself with our curated collection of interactive quizzes across multiple subjects
                        </p>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
                    >
                        {[
                            { icon: <BookOpen className="w-6 h-6" />, label: 'Total Quizzes', value: '150+' },
                            { icon: <Users className="w-6 h-6" />, label: 'Active Users', value: '50K+' },
                            { icon: <Award className="w-6 h-6" />, label: 'Certificates', value: '25K+' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/10 rounded-2xl p-6 flex items-center gap-4"
                            >
                                <div className="text-[#F3EFDA]/70">{stat.icon}</div>
                                <div>
                                    <p className="text-2xl font-bold text-[#F3EFDA]">{stat.value}</p>
                                    <p className="text-sm text-[#F3EFDA]/60">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-8"
                    >
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/50" />
                                <input
                                    type="text"
                                    placeholder="Search quizzes by title or subject..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl py-4 pl-12 pr-6 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/50 focus:bg-[#F3EFDA]/10 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Category Buttons */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-[#F3EFDA] text-[#3B132A] shadow-lg shadow-[#F3EFDA]/20'
                                            : 'bg-[#F3EFDA]/10 text-[#F3EFDA] hover:bg-[#F3EFDA]/20 border border-[#F3EFDA]/20'
                                        }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quiz Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredQuizzes.length > 0 ? (
                            filteredQuizzes.map((quiz, index) => (
                                <motion.div
                                    key={quiz.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/10 rounded-3xl p-6 hover:border-[#F3EFDA]/30 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${quiz.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                    <div className="relative z-10">
                                        {/* Icon & Category */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-4xl">{quiz.icon}</span>
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F3EFDA]/10 text-[#F3EFDA]/70 border border-[#F3EFDA]/20">
                                                {quiz.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-[#F3EFDA] mb-3 line-clamp-2 group-hover:text-[#F3EFDA]">
                                            {quiz.title}
                                        </h3>

                                        {/* Difficulty */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <Target className="w-4 h-4 text-[#F3EFDA]/60" />
                                            <span className={`text-sm font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                                                {quiz.difficulty}
                                            </span>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center gap-4 text-sm text-[#F3EFDA]/60 mb-6">
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="w-4 h-4" />
                                                <span>{quiz.questions} Qs</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{quiz.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <TrendingUp className="w-4 h-4" />
                                                <span>{quiz.rating} ⭐</span>
                                            </div>
                                        </div>

                                        {/* Participants */}
                                        <div className="flex items-center gap-2 mb-6 text-sm text-[#F3EFDA]/50">
                                            <Users className="w-4 h-4" />
                                            <span>{quiz.participants.toLocaleString()} participants</span>
                                        </div>

                                        {/* Start Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-[#F3EFDA] text-[#3B132A] py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#F3EFDA]/20 transition-all duration-300"
                                        >
                                            Start Quiz
                                            <ChevronRight className="w-5 h-5" />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16">
                                <Search className="w-16 h-16 text-[#F3EFDA]/30 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-[#F3EFDA]/60 mb-2">No quizzes found</h3>
                                <p className="text-[#F3EFDA]/40">Try adjusting your search or category filter</p>
                            </div>
                        )}
                    </motion.div>

                    {/* Load More Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex justify-center mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-[#F3EFDA] text-[#3B132A] rounded-full font-semibold hover:shadow-xl hover:shadow-[#F3EFDA]/20 transition-all duration-300"
                        >
                            Load More Quizzes
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default QuizList