import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Timer, Zap, Trophy, Target, Clock, TrendingUp, Award, Flame, CheckCircle, Medal } from 'lucide-react';

const TimeTrials = () => {
    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, 50]);

    const features = [
        {
            icon: Clock,
            title: "Countdown Timer",
            description: "Race against time with dynamic countdowns for every question"
        },
        {
            icon: Zap,
            title: "Speed Scoring",
            description: "Earn points based on both accuracy and how fast you answer"
        },
        {
            icon: Trophy,
            title: "Global Leaderboards",
            description: "Compete with players worldwide and climb the rankings"
        },
        {
            icon: Flame,
            title: "Streak Bonuses",
            description: "Get bonus multipliers for consecutive fast correct answers"
        }
    ];

    const stats = [
        { label: "Active Players", value: "25K+", icon: Target },
        { label: "Time Challenges", value: "1000+", icon: Timer },
        { label: "Avg. Speed", value: "8.2s", icon: Zap },
        { label: "Daily Races", value: "50K+", icon: Flame }
    ];

    const rankings = [
        { rank: 1, name: "SpeedMaster", score: "9,845", time: "2m 15s", icon: Medal },
        { rank: 2, name: "QuickThink", score: "9,720", time: "2m 28s", icon: Medal },
        { rank: 3, name: "TimeWizard", score: "9,650", time: "2m 34s", icon: Medal }
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
                            <Timer className="w-16 h-16 md:w-20 md:h-20 text-[#F3EFDA]" />
                            {/* Pulsing ring effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-[#F3EFDA]/50"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-[#F3EFDA] mb-6"
                    >
                        Time Trials
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#F3EFDA]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Beat the clock in high-speed quizzes. Test your knowledge, speed, and accuracy under pressure. Race against time and compete with the best!
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
                        <Zap className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">Start Time Trial</span>
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

                {/* Features Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Why Time Trials?
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

                {/* Leaderboard Preview */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Top Speed Champions
                    </h2>

                    <div className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-3xl p-6 md:p-8">
                        <div className="space-y-4">
                            {rankings.map((player, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.1 + index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className={`bg-[#F3EFDA]/5 border border-[#F3EFDA]/20 rounded-xl p-6 flex items-center justify-between gap-4 ${index === 0 ? 'border-[#FFD700]/50 bg-[#FFD700]/5' :
                                            index === 1 ? 'border-[#C0C0C0]/50 bg-[#C0C0C0]/5' :
                                                'border-[#CD7F32]/50 bg-[#CD7F32]/5'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${index === 0 ? 'bg-[#FFD700] text-[#3B132A]' :
                                                index === 1 ? 'bg-[#C0C0C0] text-[#3B132A]' :
                                                    'bg-[#CD7F32] text-[#3B132A]'
                                            }`}>
                                            {player.rank}
                                        </div>
                                        <div>
                                            <p className="text-[#F3EFDA] font-bold text-lg">{player.name}</p>
                                            <p className="text-[#F3EFDA]/60 text-sm">Time: {player.time}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[#F3EFDA] font-bold text-2xl">{player.score}</p>
                                        <p className="text-[#F3EFDA]/60 text-sm">points</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.4 }}
                            className="mt-6 text-center"
                        >
                            <button className="text-[#F3EFDA] hover:text-[#F3EFDA]/80 font-semibold inline-flex items-center gap-2 transition-colors">
                                View Full Leaderboard
                                <TrendingUp className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* How It Works */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        How It Works
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Choose Your Challenge", desc: "Select a time trial category and difficulty level" },
                            { step: "2", title: "Race Against Time", desc: "Answer questions quickly while the timer counts down" },
                            { step: "3", title: "Earn Speed Bonuses", desc: "Get multipliers for fast consecutive correct answers" },
                            { step: "4", title: "Climb the Rankings", desc: "Beat your personal best and compete on global leaderboards" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.3 + index * 0.1 }}
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
                    transition={{ delay: 1.5 }}
                    className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3EFDA]/10 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative z-10">
                        <Trophy className="w-16 h-16 text-[#F3EFDA] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Ready to Beat the Clock?
                        </h2>
                        <p className="text-[#F3EFDA]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Challenge yourself with high-speed quizzes. Test your reflexes, sharpen your mind, and compete for the top spot!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F3EFDA] text-[#3B132A] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Zap className="w-6 h-6" />
                                Start Racing Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Award className="w-6 h-6" />
                                Practice Mode
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TimeTrials;