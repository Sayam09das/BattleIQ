import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Download, Share2, Medal, Star, Trophy, Crown, Zap, CheckCircle, Twitter, Facebook, Link2, Calendar, TrendingUp, Target, Sparkles } from 'lucide-react'

const Certifications = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [selectedCert, setSelectedCert] = useState(null)
    const [showShareMenu, setShowShareMenu] = useState(false)

    const earnedCertificates = [
        {
            id: 1,
            title: "Advanced JavaScript Master",
            category: "Programming",
            issueDate: "Oct 15, 2025",
            score: 98,
            badge: "🏆",
            level: "Expert",
            color: "from-yellow-400/20 to-yellow-600/20",
            borderColor: "border-yellow-400/40",
            verified: true,
            credentialId: "JS-ADV-2025-001847"
        },
        {
            id: 2,
            title: "World History Champion",
            category: "History",
            issueDate: "Oct 10, 2025",
            score: 95,
            badge: "🎓",
            level: "Advanced",
            color: "from-blue-400/20 to-blue-600/20",
            borderColor: "border-blue-400/40",
            verified: true,
            credentialId: "HIST-WOR-2025-003421"
        },
        {
            id: 3,
            title: "Data Science Fundamentals",
            category: "Technology",
            issueDate: "Oct 5, 2025",
            score: 92,
            badge: "📊",
            level: "Intermediate",
            color: "from-green-400/20 to-green-600/20",
            borderColor: "border-green-400/40",
            verified: true,
            credentialId: "DS-FUN-2025-002198"
        },
        {
            id: 4,
            title: "Creative Writing Excellence",
            category: "Arts",
            issueDate: "Sep 28, 2025",
            score: 100,
            badge: "✍️",
            level: "Perfect Score",
            color: "from-purple-400/20 to-purple-600/20",
            borderColor: "border-purple-400/40",
            verified: true,
            credentialId: "CW-EXC-2025-001523"
        }
    ]

    const availableCertifications = [
        {
            title: "AI & Machine Learning",
            requirements: "Complete 15 quizzes",
            progress: 73,
            reward: "Expert Badge",
            icon: "🤖"
        },
        {
            title: "Business Management Pro",
            requirements: "Score 90+ in 10 tests",
            progress: 40,
            reward: "Professional Certificate",
            icon: "💼"
        },
        {
            title: "Global Geography Master",
            requirements: "Win 3 tournaments",
            progress: 66,
            reward: "Master Badge",
            icon: "🌍"
        }
    ]

    const specialBadges = [
        { icon: "👑", name: "Perfect Achiever", desc: "Score 100% in any certification", earned: true },
        { icon: "⚡", name: "Speed Demon", desc: "Complete certification in record time", earned: true },
        { icon: "🔥", name: "Streak Master", desc: "Earn 5 certifications in a month", earned: false },
        { icon: "💎", name: "Elite Scholar", desc: "Earn 10 expert-level certifications", earned: false }
    ]

    const stats = [
        { icon: Award, value: "12", label: "Earned Certificates" },
        { icon: Star, value: "8", label: "Special Badges" },
        { icon: TrendingUp, value: "96%", label: "Avg. Score" },
        { icon: Trophy, value: "#47", label: "Global Rank" }
    ]

    const handleShare = (platform) => {
        console.log(`Sharing on ${platform}`)
        setShowShareMenu(false)
    }

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
                        <Award className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Verified & Official</span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Your Certifications
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Showcase your achievements with verified certificates. Download, share on LinkedIn,
                        and add credibility to your resume with official recognition.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(243, 239, 218, 0.4)" }}
                        >
                            <stat.icon className="w-8 h-8 text-[#F3EFDA] mx-auto mb-3" />
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-[#F3EFDA]/70 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Earned Certificates */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Trophy className="w-6 h-6 text-[#F3EFDA]" />
                        <h2 className="text-3xl font-bold">Earned Certificates</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {earnedCertificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className={`relative bg-gradient-to-br ${cert.color} backdrop-blur-sm border-2 ${cert.borderColor} rounded-3xl p-8 overflow-hidden cursor-pointer`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedCert(cert)}
                            >
                                {/* Certificate Design */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="text-6xl">{cert.badge}</span>
                                        {cert.verified && (
                                            <motion.div
                                                className="flex items-center gap-1 bg-green-400/20 border border-green-400/40 rounded-full px-3 py-1"
                                                animate={{ scale: [1, 1.05, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <CheckCircle className="w-3 h-3 text-green-400" />
                                                <span className="text-xs font-semibold">Verified</span>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Certificate Content */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                                        <p className="text-[#F3EFDA]/70 text-sm mb-4">{cert.category}</p>

                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-4 py-2">
                                                <p className="text-xs text-[#F3EFDA]/60 mb-1">Score</p>
                                                <p className="text-2xl font-bold">{cert.score}%</p>
                                            </div>
                                            <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-lg px-4 py-2 flex-1">
                                                <p className="text-xs text-[#F3EFDA]/60 mb-1">Level</p>
                                                <p className="font-bold">{cert.level}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2 text-[#F3EFDA]/70">
                                                <Calendar className="w-4 h-4" />
                                                <span>Issued: {cert.issueDate}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[#F3EFDA]/70">
                                                <Award className="w-4 h-4" />
                                                <span className="text-xs">ID: {cert.credentialId}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <motion.button
                                            className="bg-[#F3EFDA] text-[#3B132A] font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                            }}
                                        >
                                            <Download className="w-4 h-4" />
                                            Download
                                        </motion.button>
                                        <motion.button
                                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setShowShareMenu(cert.id)
                                            }}
                                        >
                                            <Share2 className="w-4 h-4" />
                                            Share
                                        </motion.button>
                                    </div>

                                    {/* Share Menu */}
                                    {showShareMenu === cert.id && (
                                        <motion.div
                                            className="absolute bottom-20 right-8 bg-[#3B132A] border border-[#F3EFDA]/30 rounded-xl p-4 shadow-2xl"
                                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="space-y-2 min-w-[180px]">
                                                <button
                                                    onClick={() => handleShare('linkedin')}
                                                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                                                >
                                                    <Award className="w-4 h-4 text-blue-400" />
                                                    <span className="text-sm">LinkedIn</span>
                                                </button>
                                                <button
                                                    onClick={() => handleShare('twitter')}
                                                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                                                >
                                                    <Twitter className="w-4 h-4 text-blue-300" />
                                                    <span className="text-sm">Twitter</span>
                                                </button>
                                                <button
                                                    onClick={() => handleShare('facebook')}
                                                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                                                >
                                                    <Facebook className="w-4 h-4 text-blue-500" />
                                                    <span className="text-sm">Facebook</span>
                                                </button>
                                                <button
                                                    onClick={() => handleShare('link')}
                                                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                                                >
                                                    <Link2 className="w-4 h-4" />
                                                    <span className="text-sm">Copy Link</span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Decorative Elements */}
                                <motion.div
                                    className="absolute -right-12 -top-12 w-40 h-40 bg-[#F3EFDA]/5 rounded-full blur-3xl"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F3EFDA]/30 to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* In Progress Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Target className="w-6 h-6 text-[#F3EFDA]" />
                        <h2 className="text-3xl font-bold">In Progress</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {availableCertifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 hover:bg-[#F3EFDA]/10 transition-all"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <span className="text-5xl mb-4 block">{cert.icon}</span>
                                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                                <p className="text-[#F3EFDA]/60 text-sm mb-4">{cert.requirements}</p>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between text-sm mb-2">
                                        <span className="text-[#F3EFDA]/70">Progress</span>
                                        <span className="font-bold">{cert.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-[#F3EFDA]/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-[#F3EFDA] to-[#F3EFDA]/70"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${cert.progress}%` }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-[#F3EFDA]/70 mb-4">
                                    <Medal className="w-4 h-4" />
                                    <span>Reward: {cert.reward}</span>
                                </div>

                                <motion.button
                                    className="w-full bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Continue Learning
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Special Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Sparkles className="w-6 h-6 text-[#F3EFDA]" />
                        <h2 className="text-3xl font-bold">Special Badges</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specialBadges.map((badge, index) => (
                            <motion.div
                                key={index}
                                className={`relative rounded-2xl p-6 text-center transition-all ${badge.earned
                                        ? 'bg-gradient-to-br from-[#F3EFDA]/15 to-[#F3EFDA]/5 border-2 border-[#F3EFDA]/30'
                                        : 'bg-[#F3EFDA]/5 border border-[#F3EFDA]/10 opacity-50'
                                    }`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: badge.earned ? 1 : 0.5, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ scale: badge.earned ? 1.05 : 1 }}
                            >
                                <motion.span
                                    className="text-6xl mb-4 block"
                                    animate={badge.earned ? {
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0]
                                    } : {}}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {badge.icon}
                                </motion.span>
                                <h4 className="font-bold mb-2">{badge.name}</h4>
                                <p className="text-[#F3EFDA]/70 text-sm mb-3">{badge.desc}</p>
                                {badge.earned && (
                                    <div className="flex items-center justify-center gap-1 text-green-400 text-xs">
                                        <CheckCircle className="w-3 h-3" />
                                        <span>Earned</span>
                                    </div>
                                )}
                                {!badge.earned && (
                                    <div className="text-[#F3EFDA]/50 text-xs">Locked</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Award className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Start Earning Today</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Complete quizzes, win tournaments, and master new skills to earn verified certificates.
                        Add them to your resume, LinkedIn profile, and showcase your expertise to the world!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Zap className="w-5 h-5" />
                            Browse Certifications
                        </motion.button>
                        <motion.button
                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#F3EFDA] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/30 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Share2 className="w-5 h-5" />
                            Share Profile
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Certifications