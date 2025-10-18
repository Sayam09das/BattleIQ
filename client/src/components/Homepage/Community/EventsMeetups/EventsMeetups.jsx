import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Users, Video, Bell, Award, Star, Clock, TrendingUp, Globe, Zap, BookOpen, Trophy, Camera, Play, CheckCircle, UserPlus, ExternalLink } from 'lucide-react';

const EventsMeetups = () => {
    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, -50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, 50]);

    const [activeTab, setActiveTab] = useState('upcoming');

    const features = [
        {
            icon: Video,
            title: "Live Sessions",
            description: "Join live workshops with expert quiz masters and industry leaders"
        },
        {
            icon: Trophy,
            title: "Quiz Marathons",
            description: "Participate in exciting online quiz events and competitions"
        },
        {
            icon: Bell,
            title: "Event Notifications",
            description: "Get instant alerts for upcoming events and registration deadlines"
        },
        {
            icon: Award,
            title: "Participation Badges",
            description: "Earn exclusive badges and certificates for event attendance"
        }
    ];

    const stats = [
        { label: "Total Events", value: "500+", icon: Calendar },
        { label: "Participants", value: "150K+", icon: Users },
        { label: "Countries", value: "45+", icon: Globe },
        { label: "Expert Speakers", value: "200+", icon: Star }
    ];

    const upcomingEvents = [
        {
            title: "Global Quiz Championship 2025",
            type: "Online Tournament",
            date: "Dec 15, 2025",
            time: "10:00 AM EST",
            duration: "3 hours",
            participants: 2500,
            maxParticipants: 5000,
            host: "Quiz Masters International",
            image: "🏆",
            category: "Competition",
            featured: true,
            status: "Open"
        },
        {
            title: "AI & Machine Learning Workshop",
            type: "Online Workshop",
            date: "Dec 20, 2025",
            time: "2:00 PM EST",
            duration: "2 hours",
            participants: 850,
            maxParticipants: 1000,
            host: "Dr. Sarah Johnson",
            image: "🤖",
            category: "Workshop",
            featured: true,
            status: "Open"
        },
        {
            title: "Science Quiz Marathon",
            type: "Online Marathon",
            date: "Dec 22, 2025",
            time: "9:00 AM EST",
            duration: "4 hours",
            participants: 1200,
            maxParticipants: 3000,
            host: "Science Society",
            image: "🔬",
            category: "Marathon",
            featured: false,
            status: "Open"
        },
        {
            title: "Learner's Meetup - New York",
            type: "Offline Meetup",
            date: "Dec 28, 2025",
            time: "6:00 PM EST",
            duration: "3 hours",
            participants: 45,
            maxParticipants: 100,
            host: "BattleIQ Community",
            image: "🗽",
            category: "Meetup",
            featured: false,
            status: "Open"
        }
    ];

    const pastEvents = [
        {
            title: "History Knowledge Battle",
            date: "Nov 28, 2025",
            participants: 3200,
            image: "📜",
            highlights: "12 photos",
            winner: "Team Phoenix"
        },
        {
            title: "Coding Interview Prep",
            date: "Nov 15, 2025",
            participants: 1500,
            image: "💻",
            highlights: "Video available",
            winner: null
        }
    ];

    const eventTypes = [
        { name: "Tournaments", count: "150+", icon: "🏆", color: "#FFD700" },
        { name: "Workshops", count: "200+", icon: "🎓", color: "#4CAF50" },
        { name: "Marathons", count: "100+", icon: "⚡", color: "#FF9800" },
        { name: "Meetups", count: "50+", icon: "🤝", color: "#2196F3" }
    ];

    const benefits = [
        {
            title: "Network & Connect",
            description: "Meet fellow learners, make friends, and build your community",
            icon: Users,
            color: "#9C27B0"
        },
        {
            title: "Learn from Experts",
            description: "Gain insights from industry leaders and quiz champions",
            icon: Star,
            color: "#FF9800"
        },
        {
            title: "Win Prizes",
            description: "Compete for amazing rewards, trophies, and recognition",
            icon: Trophy,
            color: "#FFD700"
        },
        {
            title: "Build Your Profile",
            description: "Earn badges, certificates, and boost your credentials",
            icon: Award,
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
                            <Calendar className="w-16 h-16 md:w-20 md:h-20 text-[#F3EFDA]" />
                            {/* Floating event icons */}
                            {['🎉', '🎓', '🏆', '🤝'].map((emoji, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-2xl"
                                    style={{
                                        top: `${30 + Math.sin(i * Math.PI / 2) * 50}%`,
                                        left: `${50 + Math.cos(i * Math.PI / 2) * 50}%`,
                                    }}
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 10, 0],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {emoji}
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
                        Events & Meetups
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#F3EFDA]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Join exciting online and offline events! Participate in quiz marathons, workshops with experts, global tournaments, and community meetups.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                            <Calendar className="w-6 h-6 relative z-10" />
                            <span className="relative z-10">Browse Events</span>
                        </motion.button>

                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center gap-3"
                        >
                            <Bell className="w-6 h-6" />
                            <span>Get Notified</span>
                        </motion.button>
                    </div>
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

                {/* Event Types */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Event Categories
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {eventTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 text-center cursor-pointer group"
                            >
                                <div className="text-5xl mb-3">{type.icon}</div>
                                <h3 className="text-lg font-bold text-[#F3EFDA] mb-2">{type.name}</h3>
                                <p className="text-[#F3EFDA]/70 text-sm font-semibold">{type.count} events</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Upcoming Events */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="max-w-6xl mx-auto mb-16 md:mb-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-[#F3EFDA]/70 text-lg">Don't miss these exciting opportunities!</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className={`bg-[#F3EFDA]/5 backdrop-blur-xl border rounded-2xl p-6 relative overflow-hidden group ${event.featured ? 'border-[#FFD700]/50 bg-gradient-to-br from-[#FFD700]/10 to-transparent' : 'border-[#F3EFDA]/20'
                                    }`}
                            >
                                {event.featured && (
                                    <div className="absolute top-3 right-3 bg-[#FFD700]/20 text-[#FFD700] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-current" />
                                        Featured
                                    </div>
                                )}

                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-2xl bg-[#F3EFDA]/10 flex items-center justify-center text-4xl flex-shrink-0">
                                        {event.image}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#F3EFDA] mb-2">{event.title}</h3>
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${event.type.includes('Online') ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                                            }`}>
                                            {event.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-3 text-[#F3EFDA]/80">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#F3EFDA]/80">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm">{event.time} • {event.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#F3EFDA]/80">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm">{event.participants.toLocaleString()} / {event.maxParticipants.toLocaleString()} registered</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#F3EFDA]/80">
                                        <Star className="w-4 h-4" />
                                        <span className="text-sm">Host: {event.host}</span>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <div className="mb-4">
                                    <div className="h-2 bg-[#F3EFDA]/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                                            transition={{ delay: 1.3 + index * 0.1, duration: 1 }}
                                            className="h-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] rounded-full"
                                        />
                                    </div>
                                    <p className="text-xs text-[#F3EFDA]/60 mt-1 text-right">
                                        {Math.round((event.participants / event.maxParticipants) * 100)}% filled
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-[#F3EFDA] text-[#3B132A] py-3 rounded-xl font-semibold hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                >
                                    Register Now
                                    <ExternalLink className="w-4 h-4" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Past Events */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="max-w-5xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Past Events Highlights
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {pastEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.4 + index * 0.1 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-6 relative overflow-hidden group"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-xl bg-[#F3EFDA]/10 flex items-center justify-center text-3xl">
                                        {event.image}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-[#F3EFDA] mb-1">{event.title}</h3>
                                        <p className="text-[#F3EFDA]/60 text-sm">{event.date}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-[#F3EFDA]/70">Participants</span>
                                        <span className="text-[#F3EFDA] font-semibold">{event.participants.toLocaleString()}</span>
                                    </div>
                                    {event.winner && (
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-[#F3EFDA]/70">Winner</span>
                                            <span className="text-[#FFD700] font-semibold flex items-center gap-1">
                                                <Trophy className="w-4 h-4" />
                                                {event.winner}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-[#F3EFDA]/10 hover:bg-[#F3EFDA]/20 text-[#F3EFDA] py-2 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                                >
                                    <Camera className="w-4 h-4" />
                                    {event.highlights}
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="max-w-6xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Why Attend Events?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/20 rounded-2xl p-8 relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#F3EFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="relative z-10">
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${benefit.color}20` }}
                                    >
                                        <benefit.icon className="w-8 h-8" style={{ color: benefit.color }} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#F3EFDA] mb-3">{benefit.title}</h3>
                                    <p className="text-[#F3EFDA]/70 text-lg leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        Event Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.8 + index * 0.1 }}
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
                    transition={{ delay: 1.9 }}
                    className="max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] text-center mb-12">
                        How to Participate
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Browse Events", desc: "Explore upcoming events by category, date, or location" },
                            { step: "2", title: "Register Early", desc: "Sign up for events that interest you before spots fill up" },
                            { step: "3", title: "Get Notified", desc: "Receive reminders and important updates before the event" },
                            { step: "4", title: "Join & Enjoy", desc: "Participate, learn, compete, and connect with the community" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 2 + index * 0.1 }}
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
                    transition={{ delay: 2.1 }}
                    className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-xl border border-[#F3EFDA]/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3EFDA]/10 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative z-10">
                        <Zap className="w-16 h-16 text-[#F3EFDA] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFDA] mb-4">
                            Ready to Join the Action?
                        </h2>
                        <p className="text-[#F3EFDA]/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                            Don't miss out on amazing events! Register for upcoming workshops, tournaments, and meetups. Connect with experts, compete with peers, and earn exclusive badges!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#F3EFDA] text-[#3B132A] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F3EFDA]/30 hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Calendar className="w-6 h-6" />
                                View All Events
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-[#F3EFDA] text-[#F3EFDA] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EFDA]/10 transition-all inline-flex items-center justify-center gap-3"
                            >
                                <Bell className="w-6 h-6" />
                                Enable Notifications
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EventsMeetups;