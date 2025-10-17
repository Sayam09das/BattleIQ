import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Trophy, Target, Zap, Calendar, TrendingUp, Award, Clock, CheckCircle } from 'lucide-react';

const Dailyquiz = () => {
    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, 50]);

    const features = [
        {
            icon: Clock,
            title: "Quick & Daily",
            description: "Complete quizzes in just a few minutes every day"
        },
        {
            icon: Zap,
            title: "Instant Feedback",
            description: "Get immediate results and learn from your mistakes"
        },
        {
            icon: Trophy,
            title: "Track Progress",
            description: "Monitor your improvement with detailed statistics"
        },
        {
            icon: Target,
            title: "Build Streaks",
            description: "Stay motivated with daily streak tracking"
        }
    ];

    const stats = [
        { label: "Active Users", value: "10K+", icon: Brain },
        { label: "Questions", value: "500+", icon: Target },
        { label: "Categories", value: "20+", icon: Award },
        { label: "Avg. Streak", value: "12 days", icon: Zap }
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
                        className="inline-block mb-6"
                    >
                        <div className="bg-[#F3EFDA]/10 backdrop-blur-xl border border-[#F3EFDA]/30 rounded-full p-6 inline-block">
                            <Brain className="w-16 h-16 md:w-20 md:h-20 text-[#F3EFDA]" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-[#F3EFDA] mb-6"
                    >
                        Daily Quiz
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#F3EFDA]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Test yourself every day and build a consistent learning habit. Challenge your knowledge, track your progress, and compete with peers through engaging daily quizzes.
                    </motion.p>

                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#F3EFDA] text-[#3B132A] px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-3"
                    >
                        <Calendar className="w-6 h-6" />
                        Start Today's Quiz
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
                            className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 text-center"
                        >
                            <stat.icon className="w-10 h-10 text-[#F3EFDA] mx-auto mb-3" />
                            <p className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-2">{stat.value}</p>
                            <p className="text-[#F3EFDA]/70 text-sm md:text-base">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Why Daily Quiz?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-8 relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="relative z-10">
                                    <div className="bg-[#F3EFDA]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
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
                    transition={{ delay: 1 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        How It Works
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Log In Daily", desc: "Access your personalized quiz every day" },
                            { step: "2", title: "Answer Questions", desc: "Complete quick quizzes in your chosen category" },
                            { step: "3", title: "Get Instant Results", desc: "See your score and correct answers immediately" },
                            { step: "4", title: "Track Your Progress", desc: "Monitor streaks, scores, and improvement over time" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.1 + index * 0.1 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 flex items-start gap-6"
                            >
                                <div className="bg-[#F3EFDA] text-[#3B132A] w-14 h-14 rounded-xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                                    {item.step}
                                </div>
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
                    transition={{ delay: 1.3 }}
                    className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
                >
                    <Trophy className="w-16 h-16 text-[#F3EFDA] mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-[#F3EFDA]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of learners who are building their knowledge one quiz at a time. Start your streak today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#F3EFDA] text-[#3B132A] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center justify-center gap-3"
                        >
                            <CheckCircle className="w-6 h-6" />
                            Get Started Free
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center justify-center gap-3"
                        >
                            <TrendingUp className="w-6 h-6" />
                            View Leaderboard
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dailyquiz;