import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Users, Heart, Zap, Award, Globe, TrendingUp, Lightbulb, Shield, Star, Rocket, BookOpen, Code, Palette, GraduationCap, MessageCircle } from 'lucide-react'

const AboutUs = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const milestones = [
        {
            year: "2023",
            title: "The Beginning",
            description: "BattleIQ was founded by three passionate educators who believed learning should be as exciting as playing games.",
            icon: Rocket,
            color: "from-blue-400/20 to-blue-600/20"
        },
        {
            year: "2023",
            title: "First 1,000 Users",
            description: "Within three months, we reached our first milestone with learners from 15 countries joining the platform.",
            icon: Users,
            color: "from-green-400/20 to-green-600/20"
        },
        {
            year: "2024",
            title: "AI Integration",
            description: "Launched our revolutionary AI quiz generator, making personalized learning accessible to everyone.",
            icon: Zap,
            color: "from-purple-400/20 to-purple-600/20"
        },
        {
            year: "2024",
            title: "Global Tournaments",
            description: "Introduced worldwide tournaments, connecting millions of learners in competitive quiz battles.",
            icon: Globe,
            color: "from-yellow-400/20 to-yellow-600/20"
        },
        {
            year: "2025",
            title: "3 Million Users",
            description: "Reached 3 million active users across 156 countries, transforming how people learn globally.",
            icon: TrendingUp,
            color: "from-pink-400/20 to-pink-600/20"
        },
        {
            year: "2025",
            title: "Series A Funding",
            description: "Secured Series A funding to expand our team and bring BattleIQ to even more learners worldwide.",
            icon: Award,
            color: "from-orange-400/20 to-orange-600/20"
        }
    ]

    const values = [
        {
            icon: Lightbulb,
            title: "Innovation First",
            description: "We constantly push boundaries with AI, gamification, and cutting-edge educational technology to create the best learning experience.",
            color: "from-yellow-400/20 to-yellow-600/20"
        },
        {
            icon: Shield,
            title: "Fairness & Integrity",
            description: "We believe in creating a level playing field where everyone has equal opportunities to learn, compete, and succeed.",
            color: "from-blue-400/20 to-blue-600/20"
        },
        {
            icon: Heart,
            title: "Learning with Joy",
            description: "Education shouldn't be boring. We make learning engaging, fun, and addictive through competition and social connection.",
            color: "from-pink-400/20 to-pink-600/20"
        },
        {
            icon: Globe,
            title: "Global Community",
            description: "We're building a worldwide community of learners who support, challenge, and inspire each other every day.",
            color: "from-green-400/20 to-green-600/20"
        },
        {
            icon: TrendingUp,
            title: "Continuous Growth",
            description: "We're committed to constant improvement—both for our platform and for every learner who uses it.",
            color: "from-purple-400/20 to-purple-600/20"
        },
        {
            icon: Users,
            title: "Inclusivity",
            description: "Learning is for everyone. We create accessible, affordable, and welcoming experiences for all backgrounds and abilities.",
            color: "from-orange-400/20 to-orange-600/20"
        }
    ]

    const team = [
        {
            name: "Dr. Sarah Chen",
            role: "Co-Founder & CEO",
            bio: "Former Stanford professor with 15+ years in educational technology. Passionate about making learning accessible globally.",
            avatar: "bg-blue-400",
            linkedin: "#"
        },
        {
            name: "Michael Rodriguez",
            role: "Co-Founder & CTO",
            bio: "Ex-Google engineer specializing in AI and machine learning. Built the core algorithms powering BattleIQ's personalization.",
            avatar: "bg-green-400",
            linkedin: "#"
        },
        {
            name: "Emily Thompson",
            role: "Co-Founder & CPO",
            bio: "Award-winning product designer who previously led design at Duolingo. Creates delightful learning experiences.",
            avatar: "bg-purple-400",
            linkedin: "#"
        },
        {
            name: "Dr. James Liu",
            role: "Head of Education",
            bio: "Former curriculum director with expertise in cognitive science and learning theory. Ensures educational quality.",
            avatar: "bg-yellow-400",
            linkedin: "#"
        },
        {
            name: "Priya Sharma",
            role: "Head of Engineering",
            bio: "10+ years building scalable systems at Amazon. Leads the engineering team building BattleIQ's infrastructure.",
            avatar: "bg-pink-400",
            linkedin: "#"
        },
        {
            name: "Marcus Johnson",
            role: "Head of Community",
            bio: "Community builder passionate about connecting learners worldwide. Creates engaging experiences for our users.",
            avatar: "bg-orange-400",
            linkedin: "#"
        }
    ]

    const stats = [
        { value: "3M+", label: "Active Users" },
        { value: "156", label: "Countries" },
        { value: "50M+", label: "Quizzes Completed" },
        { value: "300%", label: "YoY Growth" }
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
                        <Heart className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Our Story</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        About BattleIQ
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        We're on a mission to transform education by making learning as exciting and engaging
                        as playing your favorite game. Join millions of learners competing, growing, and
                        achieving together.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-4xl font-bold mb-2">{stat.value}</div>
                            <div className="text-sm text-[#F3EFDA]/70">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Mission & Vision */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 border-2 border-blue-400/40 rounded-3xl p-8">
                            <Target className="w-12 h-12 text-blue-400 mb-4" />
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-[#F3EFDA]/90 leading-relaxed">
                                To empower learners worldwide through gamified education that combines competition,
                                collaboration, and cutting-edge AI technology. We believe every person deserves
                                access to engaging, effective learning experiences that make knowledge acquisition
                                exciting and rewarding.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-2 border-purple-400/40 rounded-3xl p-8">
                            <Rocket className="w-12 h-12 text-purple-400 mb-4" />
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-[#F3EFDA]/90 leading-relaxed">
                                To become the world's leading platform for competitive learning, where millions of
                                learners connect daily to challenge themselves, compete with peers, and achieve their
                                educational goals. We envision a future where learning is as addictive and social as
                                the most popular games.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Our Journey */}
                <div className="mb-20">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
                        <p className="text-lg text-[#F3EFDA]/80 max-w-3xl mx-auto">
                            From a small idea to a global movement transforming education
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F3EFDA]/10 hidden lg:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <div className={`lg:grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                                        <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                                            <div className={`bg-gradient-to-br ${milestone.color} backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 inline-block w-full`}>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-3">
                                                        <milestone.icon className="w-8 h-8" />
                                                    </div>
                                                    <span className="text-2xl font-bold">{milestone.year}</span>
                                                </div>
                                                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                                                <p className="text-[#F3EFDA]/80">{milestone.description}</p>
                                            </div>
                                        </div>
                                        {/* Timeline Dot */}
                                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                                            <div className="w-4 h-4 rounded-full bg-[#F3EFDA] border-4 border-[#3B132A]" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Our Values</h2>
                        <p className="text-lg text-[#F3EFDA]/80 max-w-3xl mx-auto">
                            The principles that guide everything we do at BattleIQ
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${value.color} backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <value.icon className="w-12 h-12 text-[#F3EFDA] mb-4" />
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-sm text-[#F3EFDA]/80">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div className="mb-20">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
                        <p className="text-lg text-[#F3EFDA]/80 max-w-3xl mx-auto">
                            Passionate educators, engineers, and designers building the future of learning
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 text-center hover:bg-[#F3EFDA]/10 transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={`w-24 h-24 rounded-full ${member.avatar} mx-auto mb-4 flex items-center justify-center text-3xl font-bold`}>
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                <p className="text-sm text-[#F3EFDA]/70 mb-3 font-semibold">{member.role}</p>
                                <p className="text-sm text-[#F3EFDA]/80 mb-4">{member.bio}</p>
                                <motion.button
                                    className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 px-4 py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all text-sm font-semibold"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    LinkedIn →
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Join Us CTA */}
                <motion.div
                    className="text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Star className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        We're always looking for passionate people who want to revolutionize education.
                        Whether you're an educator, developer, designer, or learner, there's a place for you at BattleIQ.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Users className="w-5 h-5" />
                            View Open Positions
                        </motion.button>
                        <motion.button
                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#F3EFDA] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/30 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutUs