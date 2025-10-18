import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Sparkles, Target, TrendingUp, Zap, BookOpen, Lightbulb, Award, Cpu, Route, CheckCircle, ArrowRight, Star, Gauge } from 'lucide-react';

const SkillBuilder = () => {
    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, 50]);

    const [activeSkill, setActiveSkill] = useState(0);

    const features = [
        {
            icon: Cpu,
            title: "AI-Powered Recommendations",
            description: "Get personalized suggestions based on your performance data and learning patterns"
        },
        {
            icon: Route,
            title: "Custom Learning Paths",
            description: "Follow structured paths designed specifically to strengthen your weak areas"
        },
        {
            icon: TrendingUp,
            title: "Progress Monitoring",
            description: "Track your improvement with detailed analytics and milestone celebrations"
        },
        {
            icon: Sparkles,
            title: "Instant Quiz Generation",
            description: "AI creates practice quizzes tailored to your needs on-demand"
        }
    ];

    const stats = [
        { label: "Skills Improved", value: "15K+", icon: Target },
        { label: "Learning Paths", value: "500+", icon: Route },
        { label: "AI Suggestions", value: "100K+", icon: Brain },
        { label: "Success Rate", value: "89%", icon: Award }
    ];

    const learningPaths = [
        {
            title: "Mathematics Mastery",
            level: "Intermediate",
            progress: 65,
            topics: 8,
            duration: "4 weeks",
            color: "#4CAF50",
            icon: "📐"
        },
        {
            title: "Science Explorer",
            level: "Beginner",
            progress: 40,
            topics: 12,
            duration: "6 weeks",
            color: "#2196F3",
            icon: "🔬"
        },
        {
            title: "Language Arts",
            level: "Advanced",
            progress: 85,
            topics: 10,
            duration: "5 weeks",
            color: "#9C27B0",
            icon: "📚"
        }
    ];

    const aiSuggestions = [
        {
            skill: "Algebraic Equations",
            confidence: 68,
            recommendation: "Practice factoring and solving quadratic equations",
            estimatedTime: "2 hours",
            priority: "High",
            quizzes: 5
        },
        {
            skill: "Grammar & Punctuation",
            confidence: 75,
            recommendation: "Focus on comma usage and sentence structure",
            estimatedTime: "1.5 hours",
            priority: "Medium",
            quizzes: 4
        },
        {
            skill: "World History",
            confidence: 82,
            recommendation: "Review major historical events and timelines",
            estimatedTime: "1 hour",
            priority: "Low",
            quizzes: 3
        }
    ];

    const milestones = [
        { title: "Complete First Path", achieved: true, icon: CheckCircle },
        { title: "50% Accuracy Boost", achieved: true, icon: TrendingUp },
        { title: "7-Day Streak", achieved: true, icon: Zap },
        { title: "Master 5 Topics", achieved: false, icon: Star }
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
                            <Brain className="w-16 h-16 md:w-20 md:h-20 text-[#F3EFDA]" />
                            {/* AI sparkles effect */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        top: `${20 + i * 20}%`,
                                        right: `${-10 + i * 10}%`
                                    }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        rotate: [0, 180, 360],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Sparkles className="w-4 h-4 text-[#FFD700]" />
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
                        Skill Builder
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#F3EFDA]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Get AI-powered suggestions to improve your skills. Receive personalized guidance, follow custom learning paths, and master any topic with intelligent recommendations.
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
                        <Sparkles className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">Get AI Recommendations</span>
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

                {/* AI Suggestions Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Your Personalized AI Suggestions
                        </h2>
                        <p className="text-[#F3EFDA]/70 text-lg">Smart recommendations based on your performance</p>
                    </div>

                    <div className="space-y-4">
                        {aiSuggestions.map((suggestion, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 relative overflow-hidden group"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    {/* Left side - Skill info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-[#F3EFDA] font-bold text-xl">{suggestion.skill}</h3>
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${suggestion.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                                                    suggestion.priority === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                                                        'bg-green-500/20 text-green-400'
                                                }`}>
                                                {suggestion.priority} Priority
                                            </span>
                                        </div>

                                        {/* Confidence meter */}
                                        <div className="mb-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[#F3EFDA]/70 text-sm">Confidence Level</span>
                                                <span className="text-[#F3EFDA] font-semibold">{suggestion.confidence}%</span>
                                            </div>
                                            <div className="h-2 bg-[#F3EFDA]/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${suggestion.confidence}%` }}
                                                    transition={{ delay: 1 + index * 0.1, duration: 1 }}
                                                    className="h-full bg-gradient-to-r from-[#FF5252] via-[#FF9800] to-[#4CAF50] rounded-full"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-[#F3EFDA]/80 mb-2">
                                            <Lightbulb className="w-4 h-4 inline mr-2" />
                                            {suggestion.recommendation}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-[#F3EFDA]/60">
                                            <span>⏱️ {suggestion.estimatedTime}</span>
                                            <span>📝 {suggestion.quizzes} practice quizzes</span>
                                        </div>
                                    </div>

                                    {/* Right side - Action button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-[#F3EFDA] text-[#3B132A] px-6 py-3 rounded-xl font-semibold hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2 whitespace-nowrap"
                                    >
                                        Start Learning
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Learning Paths */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="max-w-6xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Your Custom Learning Paths
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {learningPaths.map((path, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                onHoverStart={() => setActiveSkill(index)}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="relative z-10">
                                    <div className="text-4xl mb-4">{path.icon}</div>
                                    <h3 className="text-2xl font-bold text-[#F3EFDA] mb-2">{path.title}</h3>
                                    <span className="inline-block px-3 py-1 bg-[#F3EFDA]/10 text-[#F3EFDA]/80 rounded-full text-sm mb-4">
                                        {path.level}
                                    </span>

                                    {/* Progress bar */}
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[#F3EFDA]/70 text-sm">Progress</span>
                                            <span className="text-[#F3EFDA] font-semibold">{path.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-[#F3EFDA]/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: activeSkill === index ? `${path.progress}%` : `${path.progress}%` }}
                                                transition={{ duration: 1 }}
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: path.color }}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-sm text-[#F3EFDA]/70">
                                        <div className="flex items-center justify-between">
                                            <span>📚 Topics</span>
                                            <span className="text-[#F3EFDA]">{path.topics}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>⏰ Duration</span>
                                            <span className="text-[#F3EFDA]">{path.duration}</span>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full mt-4 bg-[#F3EFDA]/10 hover:bg-[#F3EFDA]/20 text-[#F3EFDA] py-3 rounded-xl font-semibold transition-all"
                                    >
                                        Continue Path
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Milestones */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Your Achievement Milestones
                    </h2>

                    <div className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-3xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.3 + index * 0.1, type: "spring" }}
                                    className="text-center"
                                >
                                    <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center ${milestone.achieved ? 'bg-[#4CAF50]/20' : 'bg-[#F3EFDA]/10'
                                        }`}>
                                        <milestone.icon className={`w-8 h-8 ${milestone.achieved ? 'text-[#4CAF50]' : 'text-[#F3EFDA]/40'
                                            }`} />
                                    </div>
                                    <p className={`text-sm font-medium ${milestone.achieved ? 'text-[#F3EFDA]' : 'text-[#F3EFDA]/40'
                                        }`}>
                                        {milestone.title}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Intelligent Learning Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.5 + index * 0.1 }}
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
                    transition={{ delay: 1.6 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        How Skill Builder Works
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: "1", title: "AI Analyzes Your Performance", desc: "Our intelligent system reviews your quiz results and identifies patterns" },
                            { step: "2", title: "Get Personalized Suggestions", desc: "Receive custom recommendations for topics and skills to focus on" },
                            { step: "3", title: "Follow Adaptive Paths", desc: "Work through structured learning paths that adjust to your progress" },
                            { step: "4", title: "Track Your Improvement", desc: "Monitor your growth with detailed analytics and celebrate milestones" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.7 + index * 0.1 }}
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
                    transition={{ delay: 1.8 }}
                    className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3EFDA]/10 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative z-10">
                        <Sparkles className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Ready to Build Your Skills?
                        </h2>
                        <p className="text-[#F3EFDA]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Let AI guide your learning journey. Get personalized recommendations, follow custom paths, and watch your skills grow with intelligent guidance every step of the way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F3EFDA] text-[#3B132A] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Brain className="w-6 h-6" />
                                Start Building Skills
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <BookOpen className="w-6 h-6" />
                                Browse Learning Paths
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SkillBuilder;