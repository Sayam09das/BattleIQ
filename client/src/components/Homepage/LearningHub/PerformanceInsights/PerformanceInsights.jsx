import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, TrendingUp, Target, Brain, PieChart, LineChart, Award, Lightbulb, Users, Zap, CheckCircle, AlertCircle } from 'lucide-react';

const PerformanceInsights = () => {
    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, 50]);

    const features = [
        {
            icon: LineChart,
            title: "Progress Tracking",
            description: "Visual charts showing your scores and accuracy trends over time"
        },
        {
            icon: PieChart,
            title: "Topic Breakdown",
            description: "Detailed analysis by subject, difficulty level, and skill area"
        },
        {
            icon: Users,
            title: "Benchmark Comparison",
            description: "Compare your performance with class averages and global standards"
        },
        {
            icon: Lightbulb,
            title: "Smart Recommendations",
            description: "AI-powered suggestions for areas to focus on for improvement"
        }
    ];

    const stats = [
        { label: "Data Points Analyzed", value: "1M+", icon: BarChart3 },
        { label: "Active Learners", value: "35K+", icon: Brain },
        { label: "Insights Generated", value: "500K+", icon: Lightbulb },
        { label: "Avg Improvement", value: "45%", icon: TrendingUp }
    ];

    const insights = [
        {
            category: "Mathematics",
            score: 85,
            trend: "up",
            change: "+12%",
            color: "#4CAF50"
        },
        {
            category: "Science",
            score: 78,
            trend: "up",
            change: "+8%",
            color: "#2196F3"
        },
        {
            category: "History",
            score: 72,
            trend: "down",
            change: "-3%",
            color: "#FF9800"
        },
        {
            category: "Language",
            score: 90,
            trend: "up",
            change: "+15%",
            color: "#9C27B0"
        }
    ];

    const analytics = [
        {
            title: "Overall Accuracy",
            value: "82%",
            description: "Your average across all quizzes",
            icon: Target,
            color: "#4CAF50"
        },
        {
            title: "Streak Record",
            value: "21 Days",
            description: "Longest consecutive learning period",
            icon: Zap,
            color: "#FF9800"
        },
        {
            title: "Questions Answered",
            value: "1,247",
            description: "Total questions completed",
            icon: CheckCircle,
            color: "#2196F3"
        },
        {
            title: "Improvement Rate",
            value: "+38%",
            description: "Progress since starting",
            icon: TrendingUp,
            color: "#9C27B0"
        }
    ];

    const recommendations = [
        {
            area: "Algebra Fundamentals",
            priority: "High",
            improvement: "23% potential gain",
            icon: AlertCircle,
            color: "#FF5252"
        },
        {
            area: "Essay Writing Skills",
            priority: "Medium",
            improvement: "15% potential gain",
            icon: Lightbulb,
            color: "#FF9800"
        },
        {
            area: "Historical Dates",
            priority: "Low",
            improvement: "8% potential gain",
            icon: Target,
            color: "#4CAF50"
        }
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
                            <BarChart3 className="w-16 h-16 md:w-20 md:h-20 text-[#F3EFDA]" />
                            {/* Animated bars effect */}
                            <motion.div
                                className="absolute top-8 right-2"
                                animate={{ scaleY: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-1 h-4 bg-[#F3EFDA]/50 rounded" />
                            </motion.div>
                            <motion.div
                                className="absolute top-6 right-5"
                                animate={{ scaleY: [0.8, 1, 0.8] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            >
                                <div className="w-1 h-6 bg-[#F3EFDA]/50 rounded" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-[#F3EFDA] mb-6"
                    >
                        Performance Insights
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#F3EFDA]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Analyze your results with detailed analytics. Identify strengths, discover areas for improvement, and track your learning journey with data-driven insights.
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
                        <TrendingUp className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">View Your Dashboard</span>
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

                {/* Analytics Overview */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="max-w-6xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Your Analytics Overview
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {analytics.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="relative z-10">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${item.color}20` }}
                                    >
                                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                                    </div>
                                    <h3 className="text-[#F3EFDA]/70 text-sm mb-2">{item.title}</h3>
                                    <p className="text-3xl font-bold text-[#F3EFDA] mb-2">{item.value}</p>
                                    <p className="text-[#F3EFDA]/60 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Performance by Category */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Performance by Category
                    </h2>

                    <div className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-3xl p-6 md:p-8">
                        <div className="space-y-6">
                            {insights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.1 + index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-[#F3EFDA] font-semibold text-lg">{item.category}</h3>
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 1.2 + index * 0.1 }}
                                                className={`text-sm font-medium px-3 py-1 rounded-full ${item.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                                    }`}
                                            >
                                                {item.change}
                                            </motion.span>
                                        </div>
                                        <span className="text-[#F3EFDA] font-bold text-xl">{item.score}%</span>
                                    </div>

                                    <div className="relative h-3 bg-[#F3EFDA]/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.score}%` }}
                                            transition={{ delay: 1.3 + index * 0.1, duration: 1, ease: "easeOut" }}
                                            className="absolute inset-y-0 left-0 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Smart Recommendations */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-4">
                        Personalized Recommendations
                    </h2>
                    <p className="text-[#F3EFDA]/70 text-lg text-center mb-12">
                        Focus on these areas to maximize your improvement
                    </p>

                    <div className="space-y-4">
                        {recommendations.map((rec, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.3 + index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 flex items-center justify-between gap-4 group"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${rec.color}20` }}
                                    >
                                        <rec.icon className="w-6 h-6" style={{ color: rec.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[#F3EFDA] font-bold text-lg mb-1">{rec.area}</h3>
                                        <p className="text-[#F3EFDA]/60 text-sm">{rec.improvement}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span
                                        className="px-4 py-2 rounded-full text-sm font-semibold"
                                        style={{
                                            backgroundColor: `${rec.color}20`,
                                            color: rec.color
                                        }}
                                    >
                                        {rec.priority} Priority
                                    </span>
                                    <button className="text-[#F3EFDA] hover:text-[#F3EFDA]/80 font-semibold transition-colors">
                                        Start →
                                    </button>
                                </div>
                            </motion.div>
                        ))}
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
                        Powerful Analytics Features
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

                {/* How It Helps */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        How Insights Help You
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Track Your Progress", desc: "Monitor your scores and accuracy trends with visual charts over time" },
                            { step: "2", title: "Identify Patterns", desc: "Discover which topics and skills need more attention through detailed breakdowns" },
                            { step: "3", title: "Compare & Compete", desc: "See how you stack up against class averages and global benchmarks" },
                            { step: "4", title: "Get Smart Suggestions", desc: "Receive AI-powered recommendations for focused improvement" }
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
                        <Brain className="w-16 h-16 text-[#F3EFDA] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Ready to Unlock Your Potential?
                        </h2>
                        <p className="text-[#F3EFDA]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Start analyzing your performance today. Get detailed insights, discover improvement opportunities, and accelerate your learning journey with data-driven decisions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F3EFDA] text-[#3B132A] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <BarChart3 className="w-6 h-6" />
                                View Your Insights
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Award className="w-6 h-6" />
                                Explore Features
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PerformanceInsights;