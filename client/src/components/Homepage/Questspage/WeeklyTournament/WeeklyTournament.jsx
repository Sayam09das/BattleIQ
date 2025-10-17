import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Crown, Star, Award, Medal, Users, Calendar, Bell, TrendingUp, Sparkles, Zap, Target, Gift } from 'lucide-react';

const WeeklyTournament = () => {
    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, 50]);

    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 14,
        minutes: 25,
        seconds: 18
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => ({
                ...prev,
                seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
                minutes: prev.seconds === 0 ? (prev.minutes > 0 ? prev.minutes - 1 : 59) : prev.minutes
            }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const features = [
        {
            icon: Calendar,
            title: "Weekly Challenges",
            description: "New competitive tournaments every week with fresh questions"
        },
        {
            icon: Trophy,
            title: "Point Rankings",
            description: "Accumulate points and climb the leaderboard throughout the week"
        },
        {
            icon: Users,
            title: "Global Competition",
            description: "Compete with thousands of players from around the world"
        },
        {
            icon: Gift,
            title: "Exclusive Rewards",
            description: "Win badges, achievements, and special prizes for top performers"
        }
    ];

    const stats = [
        { label: "Participants", value: "50K+", icon: Users },
        { label: "Weekly Prize Pool", value: "$5,000", icon: Gift },
        { label: "Total Tournaments", value: "156", icon: Calendar },
        { label: "Champions", value: "780+", icon: Crown }
    ];

    const leaderboard = [
        { rank: 1, name: "QuizMaster Pro", points: "12,450", badge: "🥇", streak: "15 wins" },
        { rank: 2, name: "BrainStorm", points: "11,890", badge: "🥈", streak: "12 wins" },
        { rank: 3, name: "ThinkFast", points: "11,250", badge: "🥉", streak: "8 wins" },
        { rank: 4, name: "KnowledgeKing", points: "10,780", badge: "⭐", streak: "6 wins" },
        { rank: 5, name: "QuizNinja", points: "10,450", badge: "⭐", streak: "5 wins" }
    ];

    const rewards = [
        { place: "1st Place", reward: "$500 + Golden Crown Badge", icon: Crown, color: "#FFD700" },
        { place: "2nd Place", reward: "$300 + Silver Star Badge", icon: Star, color: "#C0C0C0" },
        { place: "3rd Place", reward: "$200 + Bronze Medal Badge", icon: Medal, color: "#CD7F32" },
        { place: "Top 10", reward: "Exclusive Achievement Badge", icon: Award, color: "#F3EFDA" }
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

                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20"
                        style={{ left: `${10 + i * 10}%`, top: `${15 + i * 8}%` }}
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
                            <Trophy className="w-16 h-16 md:w-20 md:h-20 text-[#F3EFDA]" />
                            {/* Sparkle effects */}
                            <motion.div
                                className="absolute -top-2 -right-2"
                                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Sparkles className="w-6 h-6 text-[#FFD700]" />
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-2 -left-2"
                                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            >
                                <Sparkles className="w-6 h-6 text-[#FFD700]" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-[#F3EFDA] mb-6"
                    >
                        Weekly Tournament
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#F3EFDA]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Compete for leaderboard glory every week. Challenge players worldwide, earn exclusive rewards, and claim your place among the champions!
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
                        <Crown className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">Join This Week's Tournament</span>
                    </motion.button>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24 max-w-6xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
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

                {/* Current Leaderboard */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Current Week's Standings
                        </h2>
                        <p className="text-[#F3EFDA]/70 text-lg">See where you rank among the competition</p>
                    </div>

                    <div className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-3xl p-6 md:p-8">
                        <div className="space-y-3">
                            {leaderboard.map((player, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.1 + index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className={`bg-[#F3EFDA]/5 border rounded-xl p-4 md:p-6 flex items-center justify-between gap-4 relative overflow-hidden group ${index === 0 ? 'border-[#FFD700]/50 bg-gradient-to-r from-[#FFD700]/10 to-transparent' :
                                            index === 1 ? 'border-[#C0C0C0]/50 bg-gradient-to-r from-[#C0C0C0]/10 to-transparent' :
                                                index === 2 ? 'border-[#CD7F32]/50 bg-gradient-to-r from-[#CD7F32]/10 to-transparent' :
                                                    'border-[#F3EFDA]/20'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 md:gap-4 flex-1">
                                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-2xl md:text-3xl ${index < 3 ? 'bg-[#F3EFDA] text-[#3B132A]' : 'bg-[#F3EFDA]/10 text-[#F3EFDA]'
                                            }`}>
                                            {player.badge}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[#F3EFDA] font-bold text-lg md:text-xl truncate">{player.name}</p>
                                            <p className="text-[#F3EFDA]/60 text-sm">{player.streak}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[#F3EFDA] font-bold text-xl md:text-2xl">{player.points}</p>
                                        <p className="text-[#F3EFDA]/60 text-sm">points</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.6 }}
                            className="mt-6 pt-6 border-t border-[#F3EFDA]/20 text-center"
                        >
                            <button className="text-[#F3EFDA] hover:text-[#F3EFDA]/80 font-semibold inline-flex items-center gap-2 transition-colors">
                                View Full Leaderboard
                                <TrendingUp className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Rewards Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Weekly Rewards & Prizes
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {rewards.map((reward, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.3 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 md:p-8 relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="relative z-10 text-center">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                        style={{ backgroundColor: `${reward.color}20` }}
                                    >
                                        <reward.icon className="w-8 h-8" style={{ color: reward.color }} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#F3EFDA] mb-2">{reward.place}</h3>
                                    <p className="text-[#F3EFDA]/70 text-lg">{reward.reward}</p>
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
                        Tournament Features
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

                {/* How to Participate */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        How to Participate
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Register for Tournament", desc: "Sign up for the current week's tournament before it starts" },
                            { step: "2", title: "Answer Quiz Questions", desc: "Complete quizzes throughout the week to earn points" },
                            { step: "3", title: "Climb the Leaderboard", desc: "Your total score determines your rank against other players" },
                            { step: "4", title: "Claim Your Rewards", desc: "Top performers receive exclusive badges, achievements, and prizes" }
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
                        <Crown className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Ready to Become a Champion?
                        </h2>
                        <p className="text-[#F3EFDA]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Join this week's tournament and compete for amazing prizes! Show your skills, climb the ranks, and earn your place in the hall of champions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F3EFDA] text-[#3B132A] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Zap className="w-6 h-6" />
                                Enter Tournament
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Target className="w-6 h-6" />
                                View Past Champions
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WeeklyTournament;