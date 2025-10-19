import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Image, Palette, FileText, Share2, Eye, Copy, CheckCircle, Mail, Users, TrendingUp, Award, Globe, Zap } from 'lucide-react'

const PressKit = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [copiedItem, setCopiedItem] = useState(null)

    const logoVariations = [
        {
            name: "Primary Logo - Light",
            description: "Use on dark backgrounds",
            preview: "bg-[#3B132A]",
            formats: ["PNG", "SVG", "PDF"]
        },
        {
            name: "Primary Logo - Dark",
            description: "Use on light backgrounds",
            preview: "bg-[#F3EFDA]",
            formats: ["PNG", "SVG", "PDF"]
        },
        {
            name: "Icon Only - Light",
            description: "Simplified version for small spaces",
            preview: "bg-[#3B132A]",
            formats: ["PNG", "SVG", "ICO"]
        },
        {
            name: "Icon Only - Dark",
            description: "Simplified version for small spaces",
            preview: "bg-[#F3EFDA]",
            formats: ["PNG", "SVG", "ICO"]
        },
        {
            name: "Wordmark Only",
            description: "Text-only version",
            preview: "bg-gray-600",
            formats: ["PNG", "SVG", "PDF"]
        },
        {
            name: "Monochrome",
            description: "Single-color version",
            preview: "bg-white",
            formats: ["PNG", "SVG", "PDF"]
        }
    ]

    const screenshots = [
        {
            title: "Quiz Interface",
            description: "Main quiz-taking experience",
            category: "UI"
        },
        {
            title: "Tournament Lobby",
            description: "Global competitive tournaments",
            category: "Features"
        },
        {
            title: "Team Dashboard",
            description: "Collaborative team features",
            category: "Social"
        },
        {
            title: "AI Quiz Generator",
            description: "AI-powered quiz creation",
            category: "AI"
        },
        {
            title: "Leaderboards",
            description: "Global and local rankings",
            category: "Competitive"
        },
        {
            title: "Achievements",
            description: "Badges and progress tracking",
            category: "Gamification"
        }
    ]

    const brandColors = [
        { name: "Primary Purple", hex: "#3B132A", usage: "Primary brand color, backgrounds" },
        { name: "Accent Cream", hex: "#F3EFDA", usage: "Text, buttons, highlights" },
        { name: "Success Green", hex: "#10B981", usage: "Positive actions, achievements" },
        { name: "Warning Orange", hex: "#F59E0B", usage: "Alerts, time-sensitive info" },
        { name: "Error Red", hex: "#EF4444", usage: "Errors, destructive actions" },
        { name: "Info Blue", hex: "#3B82F6", usage: "Information, links" }
    ]

    const typography = [
        {
            family: "Inter",
            usage: "Primary font for UI and body text",
            weights: ["Regular (400)", "Medium (500)", "Semibold (600)", "Bold (700)"],
            example: "The quick brown fox jumps over the lazy dog"
        },
        {
            family: "Space Grotesk",
            usage: "Headlines and display text",
            weights: ["Medium (500)", "Bold (700)"],
            example: "The quick brown fox jumps over the lazy dog"
        }
    ]

    const companyFacts = [
        { label: "Founded", value: "2023" },
        { label: "Headquarters", value: "San Francisco, CA" },
        { label: "Team Size", value: "50+ employees" },
        { label: "Active Users", value: "3+ million" },
        { label: "Countries", value: "156" },
        { label: "Quizzes Completed", value: "50+ million" },
        { label: "Funding", value: "Series A" },
        { label: "Investors", value: "Top EdTech VCs" }
    ]

    const keyMetrics = [
        { icon: Users, value: "3M+", label: "Active Users" },
        { icon: Globe, value: "156", label: "Countries" },
        { icon: TrendingUp, value: "300%", label: "YoY Growth" },
        { icon: Award, value: "4.8/5", label: "User Rating" }
    ]

    const handleCopy = (text, item) => {
        navigator.clipboard.writeText(text)
        setCopiedItem(item)
        setTimeout(() => setCopiedItem(null), 2000)
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
                        <Share2 className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Media Resources</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Press Kit
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto mb-6">
                        Official brand assets, company information, and media resources for journalists,
                        bloggers, and partners. Everything you need to tell the BattleIQ story.
                    </p>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download className="w-5 h-5" />
                        Download Complete Press Kit
                    </motion.button>
                </motion.div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {keyMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <metric.icon className="w-8 h-8 text-[#F3EFDA] mx-auto mb-3" />
                            <div className="text-3xl font-bold mb-1">{metric.value}</div>
                            <div className="text-sm text-[#F3EFDA]/70">{metric.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Company Bio */}
                <motion.div
                    className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-6 h-6" />
                        <h2 className="text-3xl font-bold">About BattleIQ</h2>
                    </div>

                    <div className="space-y-4 text-[#F3EFDA]/90 mb-6">
                        <p className="text-lg leading-relaxed">
                            <strong>BattleIQ</strong> is revolutionizing education through gamification and artificial intelligence.
                            Our platform transforms traditional learning into engaging, competitive quiz battles that connect
                            millions of learners worldwide.
                        </p>
                        <p className="leading-relaxed">
                            Founded in 2023, BattleIQ combines cutting-edge AI technology with proven educational methodologies
                            to create personalized learning experiences. From solo practice sessions to global tournaments,
                            users compete, collaborate, and grow their knowledge across hundreds of subjects.
                        </p>
                        <p className="leading-relaxed">
                            With over 3 million active users across 156 countries, BattleIQ is democratizing access to quality
                            education while making learning genuinely fun and addictive. Our AI-powered quiz generation,
                            real-time tournaments, and social features create an educational experience unlike anything else.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-[#F3EFDA]/5 rounded-xl p-5">
                            <h3 className="font-bold text-lg mb-2">Mission</h3>
                            <p className="text-[#F3EFDA]/80 text-sm">
                                Make learning accessible, engaging, and effective for everyone through the power of
                                gamification and AI technology.
                            </p>
                        </div>
                        <div className="bg-[#F3EFDA]/5 rounded-xl p-5">
                            <h3 className="font-bold text-lg mb-2">Vision</h3>
                            <p className="text-[#F3EFDA]/80 text-sm">
                                Become the world's leading platform for competitive learning, connecting learners
                                globally and transforming education into an exciting journey.
                            </p>
                        </div>
                    </div>

                    <motion.button
                        onClick={() => handleCopy("BattleIQ is revolutionizing education through gamification and artificial intelligence...", "bio")}
                        className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {copiedItem === "bio" ? (
                            <>
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <Copy className="w-5 h-5" />
                                Copy Company Bio
                            </>
                        )}
                    </motion.button>
                </motion.div>

                {/* Company Facts */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Company Facts</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {companyFacts.map((fact, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-xl p-5"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <p className="text-sm text-[#F3EFDA]/60 mb-2">{fact.label}</p>
                                <p className="text-xl font-bold">{fact.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Logo Variations */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <Image className="w-6 h-6" />
                            <h2 className="text-3xl font-bold">Logo Variations</h2>
                        </div>
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-semibold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="w-4 h-4" />
                            Download All Logos
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {logoVariations.map((logo, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className={`${logo.preview} h-48 flex items-center justify-center border-b border-[#F3EFDA]/20`}>
                                    <div className="text-6xl font-bold">
                                        {logo.preview === "bg-[#3B132A]" ? "🧠" : "🧠"}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold mb-2">{logo.name}</h3>
                                    <p className="text-sm text-[#F3EFDA]/70 mb-4">{logo.description}</p>
                                    <div className="flex gap-2 mb-4">
                                        {logo.formats.map((format, idx) => (
                                            <span key={idx} className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded px-2 py-1 text-xs">
                                                {format}
                                            </span>
                                        ))}
                                    </div>
                                    <motion.button
                                        className="w-full bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Download className="w-4 h-4" />
                                        Download
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Screenshots */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <Eye className="w-6 h-6" />
                            <h2 className="text-3xl font-bold">Product Screenshots</h2>
                        </div>
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-semibold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="w-4 h-4" />
                            Download All Screenshots
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {screenshots.map((screenshot, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 h-48 flex items-center justify-center border-b border-[#F3EFDA]/20">
                                    <Zap className="w-16 h-16 text-[#F3EFDA]/40" />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold">{screenshot.title}</h3>
                                        <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs">
                                            {screenshot.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[#F3EFDA]/70 mb-4">{screenshot.description}</p>
                                    <motion.button
                                        className="w-full bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Download className="w-4 h-4" />
                                        Download
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Brand Colors */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Palette className="w-6 h-6" />
                        <h2 className="text-3xl font-bold">Brand Colors</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {brandColors.map((color, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div
                                    className="h-32"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <div className="p-5">
                                    <h3 className="font-bold mb-2">{color.name}</h3>
                                    <div className="flex items-center gap-2 mb-3">
                                        <code className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded px-3 py-1 text-sm font-mono">
                                            {color.hex}
                                        </code>
                                        <motion.button
                                            onClick={() => handleCopy(color.hex, `color-${index}`)}
                                            className="p-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {copiedItem === `color-${index}` ? (
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </motion.button>
                                    </div>
                                    <p className="text-sm text-[#F3EFDA]/70">{color.usage}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Typography */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Typography</h2>
                    <div className="space-y-6">
                        {typography.map((font, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{font.family}</h3>
                                        <p className="text-[#F3EFDA]/70">{font.usage}</p>
                                    </div>
                                    <motion.button
                                        className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold px-4 py-2 rounded-lg hover:bg-[#F3EFDA]/30 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Download Font
                                    </motion.button>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {font.weights.map((weight, idx) => (
                                        <span key={idx} className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded px-3 py-1 text-sm">
                                            {weight}
                                        </span>
                                    ))}
                                </div>
                                <div className="bg-[#F3EFDA]/10 rounded-xl p-6">
                                    <p className="text-2xl" style={{ fontFamily: font.family.split(' ')[0] }}>
                                        {font.example}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <motion.div
                    className="text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Mail className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Media Inquiries</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        For press inquiries, interview requests, or additional media resources,
                        please contact our press team. We typically respond within 24 hours.
                    </p>
                    <div className="space-y-2 mb-6">
                        <p><strong>Email:</strong> press@battleiq.com</p>
                        <p><strong>PR Contact:</strong> Sarah Johnson, Head of Communications</p>
                        <p><strong>Phone:</strong> +1 (415) 555-0123</p>
                    </div>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail className="w-5 h-5" />
                        Contact Press Team
                    </motion.button>
                </motion.div>

                {/* Footer Note */}
                <div className="mt-8 text-center text-sm text-[#F3EFDA]/60">
                    <p>© 2025 BattleIQ Inc. All brand assets are the property of BattleIQ and are provided for editorial use only.</p>
                    <p className="mt-2">Please review our brand guidelines before using these assets.</p>
                </div>
            </div>
        </div>
    )
}

export default PressKit