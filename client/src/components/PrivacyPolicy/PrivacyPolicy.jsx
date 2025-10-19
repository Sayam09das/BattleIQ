import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Lock, Eye, Shield, Cookie, Database, UserCheck, Download, Trash2, Settings, Globe, CheckCircle, ChevronDown, Clock, Mail, AlertTriangle } from 'lucide-react'

const PrivacyPolicy = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [expandedSection, setExpandedSection] = useState(null)

    const sections = [
        {
            id: 1,
            icon: Database,
            title: "Information We Collect",
            summary: "Types of data we gather when you use BattleIQ",
            content: [
                {
                    heading: "Information You Provide",
                    points: [
                        "Account Information: Name, email address, username, password, date of birth",
                        "Profile Data: Avatar, bio, location, educational background",
                        "Payment Information: Credit card details, billing address (processed by third-party payment processors)",
                        "Content: Quiz answers, forum posts, team chat messages, user-generated quizzes",
                        "Communications: Support tickets, feedback, survey responses"
                    ]
                },
                {
                    heading: "Automatically Collected Information",
                    points: [
                        "Usage Data: Quiz scores, time spent on platform, features accessed, tournament participation",
                        "Device Information: IP address, browser type, operating system, device identifiers",
                        "Location Data: Approximate geographic location based on IP address",
                        "Cookies & Tracking: Session data, preferences, analytics information",
                        "Performance Metrics: Quiz completion rates, accuracy scores, learning patterns"
                    ]
                },
                {
                    heading: "Information From Third Parties",
                    points: [
                        "Social Media: Profile information if you connect social accounts",
                        "Educational Institutions: Student data provided by schools or teachers",
                        "Payment Processors: Transaction confirmation and payment status",
                        "Analytics Providers: Aggregated usage statistics and trends"
                    ]
                }
            ]
        },
        {
            id: 2,
            icon: Eye,
            title: "How We Use Your Information",
            summary: "The purposes for which we process your data",
            content: [
                {
                    heading: "Service Delivery & Improvement",
                    points: [
                        "Provide and maintain quiz platform functionality",
                        "Personalize your learning experience and recommend content",
                        "Track progress, generate statistics, and issue certificates",
                        "Enable team features, tournaments, and competitive gameplay",
                        "Improve platform performance and user experience",
                        "Develop new features based on usage patterns"
                    ]
                },
                {
                    heading: "Communication & Support",
                    points: [
                        "Send account notifications and service updates",
                        "Respond to support requests and inquiries",
                        "Send promotional emails about new features (with opt-out option)",
                        "Notify about tournament schedules and team activities",
                        "Conduct surveys and gather feedback"
                    ]
                },
                {
                    heading: "Analytics & Research",
                    points: [
                        "Analyze usage patterns to improve educational effectiveness",
                        "Generate anonymized statistics for research purposes",
                        "Monitor platform performance and identify issues",
                        "Understand user demographics and preferences",
                        "Measure engagement and feature adoption"
                    ]
                },
                {
                    heading: "Safety & Compliance",
                    points: [
                        "Prevent fraud, abuse, and security incidents",
                        "Enforce Terms of Service and community guidelines",
                        "Comply with legal obligations and regulations",
                        "Respond to legal requests from authorities",
                        "Protect rights and safety of users and BattleIQ"
                    ]
                }
            ]
        },
        {
            id: 3,
            icon: Shield,
            title: "How We Protect Your Data",
            summary: "Security measures to safeguard your information",
            content: [
                {
                    heading: "Technical Security Measures",
                    points: [
                        "End-to-end encryption for data transmission (SSL/TLS)",
                        "Encrypted storage of sensitive information",
                        "Regular security audits and penetration testing",
                        "Firewall protection and intrusion detection systems",
                        "Secure authentication and password hashing",
                        "Regular software updates and security patches"
                    ]
                },
                {
                    heading: "Organizational Safeguards",
                    points: [
                        "Access controls limiting employee data access",
                        "Background checks for employees with data access",
                        "Regular security training for staff",
                        "Data breach response and notification procedures",
                        "Third-party vendor security assessments",
                        "Compliance with industry security standards"
                    ]
                },
                {
                    heading: "User Security Best Practices",
                    points: [
                        "Use strong, unique passwords for your account",
                        "Enable two-factor authentication when available",
                        "Keep your contact information current",
                        "Log out from shared or public devices",
                        "Report suspicious activity immediately",
                        "Be cautious with phishing attempts"
                    ]
                }
            ]
        },
        {
            id: 4,
            icon: Globe,
            title: "Data Sharing & Disclosure",
            summary: "When and how we share information with others",
            content: [
                {
                    heading: "We Share Data With",
                    points: [
                        "Service Providers: Cloud hosting, payment processing, email delivery, analytics",
                        "Educational Partners: Schools or institutions when authorized by user",
                        "Team Members: Other users in your teams can see your profile and activity",
                        "Public Display: Leaderboards, forums, and achievements are publicly visible",
                        "Legal Authorities: When required by law or to protect rights"
                    ]
                },
                {
                    heading: "We Do NOT Sell Your Data",
                    points: [
                        "BattleIQ does not sell personal information to third parties",
                        "We do not share data for third-party marketing purposes",
                        "Aggregated, anonymized data may be shared for research",
                        "User content shared publicly is your choice"
                    ]
                },
                {
                    heading: "International Data Transfers",
                    points: [
                        "Data may be transferred to servers in different countries",
                        "We ensure adequate protection through standard contractual clauses",
                        "EU-US and Swiss-US Privacy Shield compliance (where applicable)",
                        "Users consent to international transfers by using the service"
                    ]
                }
            ]
        },
        {
            id: 5,
            icon: Cookie,
            title: "Cookies & Tracking Technologies",
            summary: "How we use cookies and similar technologies",
            content: [
                {
                    heading: "Types of Cookies We Use",
                    points: [
                        "Essential Cookies: Required for platform functionality (login, security)",
                        "Performance Cookies: Help us analyze usage and improve features",
                        "Functional Cookies: Remember your preferences and settings",
                        "Analytics Cookies: Understand how users interact with platform",
                        "Advertising Cookies: Deliver relevant ads (with your consent)"
                    ]
                },
                {
                    heading: "Third-Party Cookies",
                    points: [
                        "Google Analytics: Usage statistics and behavior analysis",
                        "Social Media Plugins: Enable sharing to social platforms",
                        "Payment Processors: Facilitate secure transactions",
                        "CDN Providers: Improve content delivery speed"
                    ]
                },
                {
                    heading: "Managing Cookies",
                    points: [
                        "You can control cookies through browser settings",
                        "Cookie preference center available in account settings",
                        "Disabling essential cookies may affect functionality",
                        "Third-party cookies managed through respective platforms",
                        "Clear cookies anytime through browser controls"
                    ]
                }
            ]
        },
        {
            id: 6,
            icon: UserCheck,
            title: "Your Privacy Rights",
            summary: "Control over your personal information",
            content: [
                {
                    heading: "Rights for All Users",
                    points: [
                        "Access: Request a copy of your personal data",
                        "Correction: Update inaccurate or incomplete information",
                        "Deletion: Request removal of your data (with exceptions)",
                        "Portability: Receive your data in machine-readable format",
                        "Objection: Opt-out of certain data processing activities",
                        "Restriction: Limit how we use your data in certain cases"
                    ]
                },
                {
                    heading: "Additional Rights (GDPR - EU Users)",
                    points: [
                        "Right to be forgotten under specific circumstances",
                        "Right to withdraw consent for optional processing",
                        "Right to lodge complaints with supervisory authorities",
                        "Automated decision-making opt-out rights",
                        "Data protection officer contact available"
                    ]
                },
                {
                    heading: "Additional Rights (CCPA - California Users)",
                    points: [
                        "Right to know what personal information is collected",
                        "Right to know if information is sold or disclosed",
                        "Right to opt-out of sale of personal information",
                        "Right to non-discrimination for exercising rights",
                        "Authorized agent requests accepted"
                    ]
                },
                {
                    heading: "How to Exercise Your Rights",
                    points: [
                        "Email privacy@battleiq.com with your request",
                        "Use in-app privacy tools in account settings",
                        "Verify your identity for security purposes",
                        "Receive response within 30 days (may extend to 60 days)",
                        "Appeals process available if request denied"
                    ]
                }
            ]
        },
        {
            id: 7,
            icon: Clock,
            title: "Data Retention",
            summary: "How long we keep your information",
            content: [
                {
                    heading: "Retention Periods",
                    points: [
                        "Active Account Data: Retained while account is active",
                        "Quiz History: Kept for 5 years for educational records",
                        "Payment Records: Retained for 7 years for tax/legal compliance",
                        "Support Communications: Kept for 3 years",
                        "Marketing Data: Deleted upon opt-out or 2 years of inactivity",
                        "Backups: May contain data for up to 90 days after deletion"
                    ]
                },
                {
                    heading: "Deletion Procedures",
                    points: [
                        "Account closure triggers data deletion process",
                        "Personal identifiers removed within 30 days",
                        "Aggregated, anonymized data may be retained",
                        "Legal or safety reasons may require extended retention",
                        "Backup systems purged on rolling schedule",
                        "Irreversible deletion confirmed via email"
                    ]
                },
                {
                    heading: "Data Subject to Extended Retention",
                    points: [
                        "Financial transactions and tax records",
                        "Legal disputes and regulatory inquiries",
                        "Security incident investigations",
                        "Fraud prevention and account safety",
                        "Contractual obligations with institutions"
                    ]
                }
            ]
        },
        {
            id: 8,
            icon: Settings,
            title: "Children's Privacy",
            summary: "Special protections for users under 18",
            content: [
                {
                    heading: "Age Requirements & Consent",
                    points: [
                        "Users must be 13 years or older to create accounts",
                        "Users 13-17 require verifiable parental consent",
                        "Parents can request access to child's information",
                        "Parents can request deletion of child's data",
                        "Special restrictions on data collection for minors"
                    ]
                },
                {
                    heading: "COPPA Compliance (Under 13)",
                    points: [
                        "We do not knowingly collect data from children under 13",
                        "School-managed accounts allowed with institutional authorization",
                        "Limited data collection in educational settings",
                        "Parent/guardian controls available",
                        "Immediate deletion if underage user discovered"
                    ]
                },
                {
                    heading: "Parental Controls",
                    points: [
                        "Parents can monitor child's activity and progress",
                        "Restrict social features and public visibility",
                        "Control communication settings",
                        "Access and download child's data",
                        "Close child's account at any time"
                    ]
                }
            ]
        }
    ]

    const quickActions = [
        { icon: Download, title: "Download Your Data", action: "Request a copy of all your personal information" },
        { icon: Trash2, title: "Delete Account", action: "Permanently remove your account and data" },
        { icon: Settings, title: "Privacy Settings", action: "Manage your privacy preferences" },
        { icon: Mail, title: "Contact Privacy Team", action: "Questions about your data or privacy" }
    ]

    const toggleSection = (id) => {
        setExpandedSection(expandedSection === id ? null : id)
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
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
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
                        <Lock className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Your Privacy Matters</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto mb-4">
                        We are committed to protecting your privacy and being transparent about how we collect,
                        use, and safeguard your personal information.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#F3EFDA]/60">
                        <Clock className="w-4 h-4" />
                        <span>Last Updated: October 19, 2025</span>
                    </div>
                </motion.div>

                {/* Privacy Commitment */}
                <motion.div
                    className="bg-gradient-to-r from-green-400/20 to-green-600/20 border-2 border-green-400/40 rounded-2xl p-6 mb-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-lg mb-2">Our Privacy Promise</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-[#F3EFDA]/90">
                                <div className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span>
                                    <span>We never sell your personal data to third parties</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span>
                                    <span>You control your data with easy-to-use privacy tools</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span>
                                    <span>We use industry-leading security to protect your information</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-400">✓</span>
                                    <span>We comply with GDPR, CCPA, and global privacy laws</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {quickActions.map((item, index) => (
                        <motion.button
                            key={index}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 hover:bg-[#F3EFDA]/10 transition-all text-left"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <item.icon className="w-8 h-8 text-[#F3EFDA] mb-3" />
                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className="text-sm text-[#F3EFDA]/70">{item.action}</p>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Privacy Sections */}
                <div className="space-y-6 mb-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full p-6 flex items-center justify-between hover:bg-[#F3EFDA]/5 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-3">
                                        <section.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-xl font-bold mb-1">{section.title}</h3>
                                        <p className="text-sm text-[#F3EFDA]/70">{section.summary}</p>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-6 h-6" />
                                </motion.div>
                            </button>

                            {/* Section Content */}
                            {expandedSection === section.id && (
                                <motion.div
                                    className="px-6 pb-6"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="space-y-6 pt-4 border-t border-[#F3EFDA]/10">
                                        {section.content.map((subsection, idx) => (
                                            <div key={idx}>
                                                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                                    <CheckCircle className="w-5 h-5 text-blue-400" />
                                                    {subsection.heading}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {subsection.points.map((point, pointIdx) => (
                                                        <li key={pointIdx} className="flex items-start gap-3 text-[#F3EFDA]/80 text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2 flex-shrink-0" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Contact & Compliance */}
                <motion.div
                    className="bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <Mail className="w-12 h-12 text-[#F3EFDA] mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Privacy Questions?</h3>
                            <p className="text-[#F3EFDA]/80 mb-4">
                                Our privacy team is here to help answer your questions and address concerns about your data.
                            </p>
                            <div className="space-y-2 text-sm">
                                <p><strong>Email:</strong> privacy@battleiq.com</p>
                                <p><strong>Data Protection Officer:</strong> dpo@battleiq.com</p>
                                <p><strong>Response Time:</strong> Within 3 business days</p>
                            </div>
                        </div>
                        <div>
                            <Shield className="w-12 h-12 text-[#F3EFDA] mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Compliance & Certifications</h3>
                            <div className="space-y-2 text-sm text-[#F3EFDA]/80">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>GDPR Compliant (EU)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>CCPA Compliant (California)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>COPPA Compliant (Children's Privacy)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>SOC 2 Type II Certified</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>ISO 27001 Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#F3EFDA]/20 text-center">
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Settings className="w-5 h-5" />
                            Manage Privacy Settings
                        </motion.button>
                    </div>
                </motion.div>

                {/* Footer Note */}
                <div className="mt-8 text-center text-sm text-[#F3EFDA]/60">
                    <p>© 2025 BattleIQ Inc. All rights reserved.</p>
                    <p className="mt-2">
                        We update this Privacy Policy periodically. Continued use of BattleIQ constitutes acceptance of the current policy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy