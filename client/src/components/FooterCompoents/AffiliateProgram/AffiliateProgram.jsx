import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { DollarSign, Users, TrendingUp, Gift, Link2, Copy, CheckCircle, BarChart3, Award, Zap, Target, Percent, Clock, Mail, Share2, CreditCard, FileText } from 'lucide-react'

const AffiliateProgram = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [activeTab, setActiveTab] = useState('overview')
    const [copied, setCopied] = useState(false)

    const affiliateReferralLink = "https://battleiq.com/ref/YOUR_CODE_HERE"

    const commissionTiers = [
        {
            tier: "Bronze",
            referrals: "1-10",
            commission: "20%",
            bonus: "$50",
            color: "from-orange-400/20 to-orange-600/20",
            borderColor: "border-orange-400/40"
        },
        {
            tier: "Silver",
            referrals: "11-50",
            commission: "25%",
            bonus: "$200",
            color: "from-gray-400/20 to-gray-600/20",
            borderColor: "border-gray-400/40"
        },
        {
            tier: "Gold",
            referrals: "51-100",
            commission: "30%",
            bonus: "$500",
            color: "from-yellow-400/20 to-yellow-600/20",
            borderColor: "border-yellow-400/40"
        },
        {
            tier: "Platinum",
            referrals: "100+",
            commission: "35%",
            bonus: "$1,500",
            color: "from-purple-400/20 to-purple-600/20",
            borderColor: "border-purple-400/40"
        }
    ]

    const howItWorks = [
        {
            step: "01",
            title: "Sign Up",
            description: "Join our affiliate program for free and get your unique referral link instantly.",
            icon: Users
        },
        {
            step: "02",
            title: "Share Your Link",
            description: "Promote BattleIQ using your link via social media, blog, or email.",
            icon: Share2
        },
        {
            step: "03",
            title: "Track Performance",
            description: "Monitor clicks, conversions, and earnings in real-time through your dashboard.",
            icon: BarChart3
        },
        {
            step: "04",
            title: "Earn Rewards",
            description: "Get paid monthly via PayPal, bank transfer, or BattleIQ credits.",
            icon: CreditCard
        }
    ]

    const benefits = [
        { icon: DollarSign, title: "High Commissions", desc: "Earn 20-35% recurring commission on all referrals" },
        { icon: Clock, title: "90-Day Cookie", desc: "Get credit for conversions up to 90 days after click" },
        { icon: Target, title: "Low Barrier", desc: "Just 5 conversions needed to receive first payout" },
        { icon: Gift, title: "Bonus Rewards", desc: "Performance bonuses and special promotions" },
        { icon: BarChart3, title: "Real-Time Dashboard", desc: "Track everything with detailed analytics" },
        { icon: Zap, title: "Marketing Support", desc: "Banners, templates, and promotional materials" }
    ]

    const dashboardStats = {
        totalReferrals: 42,
        activeSubscriptions: 38,
        earnings: 1847.50,
        pendingPayout: 324.80,
        clicks: 856,
        conversionRate: 4.9
    }

    const recentReferrals = [
        { name: "John D.", date: "Oct 18, 2025", status: "Active", commission: "$29.99" },
        { name: "Sarah M.", date: "Oct 17, 2025", status: "Trial", commission: "$0.00" },
        { name: "Mike K.", date: "Oct 15, 2025", status: "Active", commission: "$29.99" },
        { name: "Emma L.", date: "Oct 14, 2025", status: "Active", commission: "$49.99" }
    ]

    const marketingMaterials = [
        { type: "Banner Ads", formats: ["728x90", "300x250", "160x600"], count: 12 },
        { type: "Social Media", formats: ["Instagram", "Twitter", "LinkedIn"], count: 24 },
        { type: "Email Templates", formats: ["Welcome", "Features", "Testimonials"], count: 8 },
        { type: "Landing Pages", formats: ["Hero", "Pricing", "Benefits"], count: 6 }
    ]

    const handleCopy = () => {
        navigator.clipboard.writeText(affiliateReferralLink)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
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
                        <Gift className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Earn While You Share</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Affiliate Program
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto mb-8">
                        Turn your passion for education into profit. Earn up to 35% recurring commission
                        by referring students, teachers, and learners to BattleIQ.
                    </p>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Users className="w-5 h-5" />
                        Join Affiliate Program
                    </motion.button>
                </motion.div>

                {/* Tabs */}
                <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
                    {['overview', 'dashboard', 'resources', 'terms'].map((tab) => (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${activeTab === tab
                                    ? 'bg-[#F3EFDA] text-[#3B132A]'
                                    : 'bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/20'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </motion.button>
                    ))}
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="space-y-16">
                        {/* Commission Tiers */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-center">Commission Tiers</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {commissionTiers.map((tier, index) => (
                                    <motion.div
                                        key={index}
                                        className={`relative bg-gradient-to-br ${tier.color} backdrop-blur-sm border-2 ${tier.borderColor} rounded-2xl p-6 text-center overflow-hidden`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                                        <p className="text-[#F3EFDA]/70 text-sm mb-4">{tier.referrals} Referrals</p>
                                        <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-4 mb-4">
                                            <p className="text-4xl font-bold mb-1">{tier.commission}</p>
                                            <p className="text-xs text-[#F3EFDA]/70">Commission Rate</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-sm">
                                            <Gift className="w-4 h-4" />
                                            <span>Bonus: <strong>{tier.bonus}</strong></span>
                                        </div>
                                        <motion.div
                                            className="absolute -right-8 -top-8 w-32 h-32 bg-[#F3EFDA]/5 rounded-full blur-3xl"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* How It Works */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {howItWorks.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-4xl font-bold text-[#F3EFDA]/30">{step.step}</span>
                                            <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-3">
                                                <step.icon className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-sm text-[#F3EFDA]/70">{step.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-center">Program Benefits</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <benefit.icon className="w-10 h-10 text-[#F3EFDA] mb-4" />
                                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                                        <p className="text-sm text-[#F3EFDA]/70">{benefit.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Dashboard Tab */}
                {activeTab === 'dashboard' && (
                    <div className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <motion.div
                                className="bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/40 rounded-2xl p-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <DollarSign className="w-8 h-8 text-green-400 mb-3" />
                                <p className="text-3xl font-bold mb-1">${dashboardStats.earnings.toFixed(2)}</p>
                                <p className="text-sm text-[#F3EFDA]/70">Total Earnings</p>
                            </motion.div>

                            <motion.div
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Users className="w-8 h-8 text-[#F3EFDA] mb-3" />
                                <p className="text-3xl font-bold mb-1">{dashboardStats.totalReferrals}</p>
                                <p className="text-sm text-[#F3EFDA]/70">Total Referrals</p>
                            </motion.div>

                            <motion.div
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <CheckCircle className="w-8 h-8 text-[#F3EFDA] mb-3" />
                                <p className="text-3xl font-bold mb-1">{dashboardStats.activeSubscriptions}</p>
                                <p className="text-sm text-[#F3EFDA]/70">Active Subscriptions</p>
                            </motion.div>

                            <motion.div
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <TrendingUp className="w-8 h-8 text-[#F3EFDA] mb-3" />
                                <p className="text-3xl font-bold mb-1">{dashboardStats.clicks}</p>
                                <p className="text-sm text-[#F3EFDA]/70">Total Clicks</p>
                            </motion.div>

                            <motion.div
                                className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-400/40 rounded-2xl p-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <CreditCard className="w-8 h-8 text-yellow-400 mb-3" />
                                <p className="text-3xl font-bold mb-1">${dashboardStats.pendingPayout.toFixed(2)}</p>
                                <p className="text-sm text-[#F3EFDA]/70">Pending Payout</p>
                            </motion.div>

                            <motion.div
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Percent className="w-8 h-8 text-[#F3EFDA] mb-3" />
                                <p className="text-3xl font-bold mb-1">{dashboardStats.conversionRate}%</p>
                                <p className="text-sm text-[#F3EFDA]/70">Conversion Rate</p>
                            </motion.div>
                        </div>

                        {/* Referral Link */}
                        <motion.div
                            className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Link2 className="w-6 h-6" />
                                <h3 className="text-2xl font-bold">Your Referral Link</h3>
                            </div>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={affiliateReferralLink}
                                    readOnly
                                    className="flex-1 bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl px-4 py-3 text-[#F3EFDA] focus:outline-none"
                                />
                                <motion.button
                                    onClick={handleCopy}
                                    className="bg-[#F3EFDA] text-[#3B132A] font-bold px-6 py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {copied ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-5 h-5" />
                                            Copy
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Recent Referrals */}
                        <motion.div
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Recent Referrals</h3>
                            <div className="space-y-3">
                                {recentReferrals.map((referral, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 bg-[#F3EFDA]/5 rounded-xl border border-[#F3EFDA]/10 hover:bg-[#F3EFDA]/10 transition-all"
                                    >
                                        <div>
                                            <p className="font-semibold">{referral.name}</p>
                                            <p className="text-sm text-[#F3EFDA]/60">{referral.date}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${referral.status === 'Active'
                                                    ? 'bg-green-400/20 border border-green-400/40 text-green-400'
                                                    : 'bg-yellow-400/20 border border-yellow-400/40 text-yellow-400'
                                                }`}>
                                                {referral.status}
                                            </span>
                                            <span className="font-bold">{referral.commission}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Resources Tab */}
                {activeTab === 'resources' && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold">Marketing Resources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {marketingMaterials.map((material, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <h3 className="text-xl font-bold mb-4">{material.type}</h3>
                                    <p className="text-[#F3EFDA]/70 mb-4">{material.count} templates available</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {material.formats.map((format, idx) => (
                                            <span key={idx} className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded px-3 py-1 text-sm">
                                                {format}
                                            </span>
                                        ))}
                                    </div>
                                    <motion.button
                                        className="w-full bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Download Assets
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Terms Tab */}
                {activeTab === 'terms' && (
                    <motion.div
                        className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-6 h-6" />
                            <h2 className="text-3xl font-bold">Terms & Conditions</h2>
                        </div>
                        <div className="space-y-6 text-[#F3EFDA]/90">
                            <div>
                                <h3 className="font-bold text-lg mb-3">Program Requirements</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>Must be 18 years or older to participate</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>Minimum payout threshold of $50</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>Referrals must be new BattleIQ users</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>Self-referrals are not permitted</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3">Payment Terms</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>Commissions paid monthly on the 1st of each month</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>90-day cookie duration for tracking conversions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>Payment via PayPal, bank transfer, or BattleIQ credits</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>Recurring commissions for subscription renewals</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3">Prohibited Activities</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>No spam or unsolicited promotional methods</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>No misleading claims about BattleIQ products or services</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>No paid search bidding on BattleIQ brand terms</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2" />
                                        <span>No trademark or copyright infringement</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-3">Termination</h3>
                                <p className="text-sm mb-2">
                                    We reserve the right to terminate affiliate accounts that violate these terms or engage
                                    in fraudulent activity. Termination may result in forfeiture of unpaid commissions.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    className="mt-16 text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Award className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Ready to Start Earning?</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        Join thousands of affiliates who are earning passive income by sharing BattleIQ.
                        Get started in minutes and start earning today!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Users className="w-5 h-5" />
                            Join Now - It's Free
                        </motion.button>
                        <motion.button
                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#F3EFDA] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/30 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="w-5 h-5" />
                            Contact Affiliate Team
                        </motion.button>
                    </div>
                    <div className="mt-6 text-sm text-[#F3EFDA]/60">
                        Questions? Email us at: <span className="text-[#F3EFDA]">affiliates@battleiq.com</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AffiliateProgram