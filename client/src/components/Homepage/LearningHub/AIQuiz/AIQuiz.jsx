import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Zap, BookOpen, Settings, Download, Share2, Brain, Target, FileText, Sliders, CheckCircle, Clock, BarChart3, Wand2, Copy, Upload, Play } from 'lucide-react';

const AIQuiz = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [topic, setTopic] = useState('')
    const [difficulty, setDifficulty] = useState('medium')
    const [questionCount, setQuestionCount] = useState(10)
    const [questionType, setQuestionType] = useState('multiple-choice')
    const [isGenerating, setIsGenerating] = useState(false)
    const [generatedQuiz, setGeneratedQuiz] = useState(null)

    const handleGenerate = () => {
        setIsGenerating(true)
        setTimeout(() => {
            setGeneratedQuiz({
                title: topic || 'Sample Quiz',
                questions: questionCount,
                difficulty: difficulty,
                type: questionType,
                estimatedTime: Math.ceil(questionCount * 1.5)
            })
            setIsGenerating(false)
        }, 2000)
    }

    const features = [
        {
            icon: Brain,
            title: "AI-Powered Generation",
            description: "Advanced AI creates relevant, contextual questions instantly",
            color: "from-purple-400/20 to-purple-600/20"
        },
        {
            icon: Target,
            title: "Custom Difficulty",
            description: "Adjust complexity from beginner to expert level",
            color: "from-blue-400/20 to-blue-600/20"
        },
        {
            icon: Sliders,
            title: "Flexible Options",
            description: "Multiple-choice, true/false, or short answer formats",
            color: "from-green-400/20 to-green-600/20"
        },
        {
            icon: BarChart3,
            title: "Performance Tracking",
            description: "Integrate with analytics to track learning progress",
            color: "from-orange-400/20 to-orange-600/20"
        }
    ]

    const templates = [
        { icon: "📚", title: "Study Material", desc: "Upload notes or textbooks" },
        { icon: "🎓", title: "Course Content", desc: "Generate from syllabus" },
        { icon: "📰", title: "Article/Blog", desc: "Create quiz from article" },
        { icon: "🎬", title: "Video Content", desc: "Quiz from video transcript" }
    ]

    const quickTopics = [
        "World History", "Mathematics", "Science", "Literature",
        "Geography", "Technology", "Arts", "Business"
    ]

    const recentQuizzes = [
        { title: "World War II History", questions: 15, difficulty: "Hard", created: "2 hours ago" },
        { title: "Python Basics", questions: 20, difficulty: "Medium", created: "5 hours ago" },
        { title: "Biology: Cell Structure", questions: 12, difficulty: "Easy", created: "1 day ago" }
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
                        <Sparkles className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Powered by Advanced AI</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        AI Quiz Generator
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Create custom quizzes instantly with AI. Perfect for educators, students, and learners.
                        Just enter a topic and let our AI do the rest!
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 overflow-hidden`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(243, 239, 218, 0.4)" }}
                        >
                            <feature.icon className="w-10 h-10 text-[#F3EFDA] mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-[#F3EFDA]/70 text-sm">{feature.description}</p>
                            <motion.div
                                className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#F3EFDA]/5 rounded-full blur-2xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Main Generator Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Left Column - Generator Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-8"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Wand2 className="w-6 h-6 text-[#F3EFDA]" />
                                <h2 className="text-2xl font-bold">Create Your Quiz</h2>
                            </div>

                            {/* Topic Input */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-3">Enter Topic or Subject</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                        placeholder="e.g., Renaissance Art, Quantum Physics, World War II..."
                                        className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl px-4 py-4 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                                    />
                                    <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                                </div>
                            </div>

                            {/* Quick Topic Suggestions */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-3">Quick Topics</label>
                                <div className="flex flex-wrap gap-2">
                                    {quickTopics.map((quickTopic, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => setTopic(quickTopic)}
                                            className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-4 py-2 text-sm hover:bg-[#F3EFDA]/20 transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {quickTopic}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Upload Option */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-3">Or Upload Content</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {templates.map((template, index) => (
                                        <motion.button
                                            key={index}
                                            className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-4 text-center hover:bg-[#F3EFDA]/20 transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="text-3xl mb-2 block">{template.icon}</span>
                                            <p className="text-xs font-semibold mb-1">{template.title}</p>
                                            <p className="text-[10px] text-[#F3EFDA]/60">{template.desc}</p>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Settings Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                                {/* Difficulty */}
                                <div>
                                    <label className="block text-sm font-semibold mb-3">Difficulty Level</label>
                                    <div className="space-y-2">
                                        {['easy', 'medium', 'hard'].map((level) => (
                                            <motion.button
                                                key={level}
                                                onClick={() => setDifficulty(level)}
                                                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${difficulty === level
                                                    ? 'bg-[#F3EFDA] text-[#3B132A]'
                                                    : 'bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/20'
                                                    }`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {level.charAt(0).toUpperCase() + level.slice(1)}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                {/* Question Count */}
                                <div>
                                    <label className="block text-sm font-semibold mb-3">Number of Questions</label>
                                    <input
                                        type="range"
                                        min="5"
                                        max="50"
                                        step="5"
                                        value={questionCount}
                                        onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                                        className="w-full mb-3"
                                    />
                                    <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-4 py-3 text-center">
                                        <span className="text-2xl font-bold">{questionCount}</span>
                                        <p className="text-xs text-[#F3EFDA]/60 mt-1">questions</p>
                                    </div>
                                </div>

                                {/* Question Type */}
                                <div>
                                    <label className="block text-sm font-semibold mb-3">Question Type</label>
                                    <select
                                        value={questionType}
                                        onChange={(e) => setQuestionType(e.target.value)}
                                        className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-4 py-3 text-[#F3EFDA] focus:outline-none focus:border-[#F3EFDA]/40 mb-3"
                                    >
                                        <option value="multiple-choice">Multiple Choice</option>
                                        <option value="true-false">True/False</option>
                                        <option value="short-answer">Short Answer</option>
                                        <option value="mixed">Mixed Types</option>
                                    </select>
                                    <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-4 py-3 text-center">
                                        <Clock className="w-5 h-5 mx-auto mb-1 text-[#F3EFDA]/60" />
                                        <p className="text-xs text-[#F3EFDA]/60">~{Math.ceil(questionCount * 1.5)} min</p>
                                    </div>
                                </div>
                            </div>

                            {/* Generate Button */}
                            <motion.button
                                onClick={handleGenerate}
                                disabled={!topic || isGenerating}
                                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${!topic || isGenerating
                                    ? 'bg-[#F3EFDA]/20 text-[#F3EFDA]/40 cursor-not-allowed'
                                    : 'bg-[#F3EFDA] text-[#3B132A] hover:bg-[#F3EFDA]/90'
                                    }`}
                                whileHover={!topic || isGenerating ? {} : { scale: 1.02 }}
                                whileTap={!topic || isGenerating ? {} : { scale: 0.98 }}
                            >
                                {isGenerating ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Sparkles className="w-6 h-6" />
                                        </motion.div>
                                        Generating Your Quiz...
                                    </>
                                ) : (
                                    <>
                                        <Zap className="w-6 h-6" />
                                        Generate Quiz with AI
                                    </>
                                )}
                            </motion.button>

                            {/* Generated Quiz Preview */}
                            {generatedQuiz && (
                                <motion.div
                                    className="mt-6 bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30 rounded-2xl p-6"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <CheckCircle className="w-6 h-6 text-green-400" />
                                        <h3 className="text-xl font-bold">Quiz Generated Successfully!</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="bg-[#F3EFDA]/10 rounded-lg p-3">
                                            <p className="text-[#F3EFDA]/60 text-xs mb-1">Title</p>
                                            <p className="font-semibold">{generatedQuiz.title}</p>
                                        </div>
                                        <div className="bg-[#F3EFDA]/10 rounded-lg p-3">
                                            <p className="text-[#F3EFDA]/60 text-xs mb-1">Questions</p>
                                            <p className="font-semibold">{generatedQuiz.questions}</p>
                                        </div>
                                        <div className="bg-[#F3EFDA]/10 rounded-lg p-3">
                                            <p className="text-[#F3EFDA]/60 text-xs mb-1">Difficulty</p>
                                            <p className="font-semibold capitalize">{generatedQuiz.difficulty}</p>
                                        </div>
                                        <div className="bg-[#F3EFDA]/10 rounded-lg p-3">
                                            <p className="text-[#F3EFDA]/60 text-xs mb-1">Est. Time</p>
                                            <p className="font-semibold">{generatedQuiz.estimatedTime} min</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <motion.button
                                            className="flex-1 bg-[#F3EFDA] text-[#3B132A] font-semibold py-3 rounded-lg hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Download className="w-4 h-4" />
                                            Export
                                        </motion.button>
                                        <motion.button
                                            className="flex-1 bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-lg hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Share2 className="w-4 h-4" />
                                            Share
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>

                    {/* Right Column - Recent & Stats */}
                    <div className="space-y-6">
                        {/* Stats Card */}
                        <motion.div
                            className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="font-bold text-lg mb-4">Your Stats</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[#F3EFDA]/70 text-sm">Quizzes Created</span>
                                    <span className="font-bold text-2xl">47</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[#F3EFDA]/70 text-sm">Total Questions</span>
                                    <span className="font-bold text-2xl">892</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[#F3EFDA]/70 text-sm">Avg. Completion</span>
                                    <span className="font-bold text-2xl">87%</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Recent Quizzes */}
                        <motion.div
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className="font-bold text-lg mb-4">Recent Quizzes</h3>
                            <div className="space-y-3">
                                {recentQuizzes.map((quiz, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-[#F3EFDA]/5 border border-[#F3EFDA]/10 rounded-xl p-4 hover:bg-[#F3EFDA]/10 transition-all cursor-pointer"
                                        whileHover={{ x: 5 }}
                                    >
                                        <h4 className="font-semibold mb-2 text-sm">{quiz.title}</h4>
                                        <div className="flex items-center justify-between text-xs text-[#F3EFDA]/60">
                                            <span>{quiz.questions} questions</span>
                                            <span className="bg-[#F3EFDA]/10 px-2 py-1 rounded">{quiz.difficulty}</span>
                                        </div>
                                        <p className="text-xs text-[#F3EFDA]/40 mt-2">{quiz.created}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tips */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-5 h-5 text-blue-400" />
                                <h3 className="font-bold">Pro Tips</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-[#F3EFDA]/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Be specific with topics for better questions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Upload study materials for accurate content</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Mix question types for comprehensive testing</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <Brain className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Supercharge Your Learning</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Our AI analyzes your topic and creates perfectly tailored questions that help you master any subject.
                        Export, share, and track progress all in one place.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {/* Documentation Button */}
                        <motion.a
                            href="/docs/AIQuizDocumentation.md" // path to your doc file
                            target="_blank"
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FileText className="w-5 h-5" />
                            View Documentation
                        </motion.a>

                        {/* Watch Tutorial Button */}
                        <motion.button
                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#3B132A] font-bold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                // open AI tutorial video in a new tab
                                window.open("/videos/AIQuizTutorial.mp4", "_blank");
                            }}
                        >
                            <Play className="w-5 h-5" />
                            Watch Tutorial
                        </motion.button>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default AIQuiz