import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, FileText, Users, AlertCircle, CheckCircle, ChevronDown, ChevronRight, Scale, Lock, Clock, Mail } from 'lucide-react'

const TermsService = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [expandedSection, setExpandedSection] = useState(null)

    const sections = [
        {
            id: 1,
            icon: Users,
            title: "Account Terms & Eligibility",
            summary: "Requirements and rules for creating and maintaining your BattleIQ account",
            content: [
                {
                    heading: "Eligibility Requirements",
                    points: [
                        "Users must be at least 13 years old to create an account",
                        "Users between 13-18 require parental or guardian consent",
                        "Account must be registered with accurate and complete information",
                        "One person may not maintain multiple active accounts",
                        "Organizations may create institutional accounts with proper authorization"
                    ]
                },
                {
                    heading: "Account Responsibilities",
                    points: [
                        "You are responsible for maintaining the confidentiality of your password",
                        "You must notify us immediately of any unauthorized account access",
                        "All activities under your account are your responsibility",
                        "You must keep your contact information current and accurate",
                        "Account sharing is prohibited and may result in termination"
                    ]
                },
                {
                    heading: "Account Termination",
                    points: [
                        "We reserve the right to suspend or terminate accounts that violate these terms",
                        "Users may close their accounts at any time through account settings",
                        "Terminated accounts may lose access to purchased content and achievements",
                        "We may retain certain information as required by law",
                        "Refunds for terminated accounts are subject to our refund policy"
                    ]
                }
            ]
        },
        {
            id: 2,
            icon: FileText,
            title: "Content Ownership & Usage Rights",
            summary: "How content is owned, shared, and protected on BattleIQ",
            content: [
                {
                    heading: "BattleIQ's Intellectual Property",
                    points: [
                        "All platform content, design, code, and features are owned by BattleIQ",
                        "BattleIQ's trademarks, logos, and branding are protected property",
                        "Users may not copy, modify, or distribute platform content without permission",
                        "AI-generated quizzes remain the intellectual property of BattleIQ",
                        "Platform software and algorithms are proprietary and confidential"
                    ]
                },
                {
                    heading: "User-Generated Content",
                    points: [
                        "You retain ownership of content you create and upload",
                        "By posting content, you grant BattleIQ a license to use, display, and distribute it",
                        "You represent that you have rights to all content you upload",
                        "BattleIQ may use user content for promotional purposes with attribution",
                        "You are responsible for ensuring your content doesn't infringe third-party rights"
                    ]
                },
                {
                    heading: "Prohibited Content",
                    points: [
                        "Content that is illegal, harmful, or violates others' rights",
                        "Hate speech, harassment, or discriminatory material",
                        "Sexually explicit or violent content",
                        "Content that infringes intellectual property rights",
                        "Spam, malware, or malicious code",
                        "False or misleading information"
                    ]
                }
            ]
        },
        {
            id: 3,
            icon: AlertCircle,
            title: "Acceptable Use & Prohibited Actions",
            summary: "Rules for proper platform usage and forbidden activities",
            content: [
                {
                    heading: "Acceptable Use",
                    points: [
                        "Use BattleIQ for educational and competitive quiz purposes",
                        "Engage respectfully with other users in forums and teams",
                        "Report violations or inappropriate content to moderators",
                        "Provide constructive feedback and contribute positively to the community",
                        "Respect intellectual property and give proper attribution"
                    ]
                },
                {
                    heading: "Prohibited Actions",
                    points: [
                        "Cheating, exploiting bugs, or manipulating rankings",
                        "Using bots, scripts, or automation tools",
                        "Harassing, threatening, or bullying other users",
                        "Impersonating others or creating fake accounts",
                        "Attempting to hack, breach security, or access unauthorized areas",
                        "Scraping or harvesting user data",
                        "Selling or transferring accounts",
                        "Spamming or engaging in fraudulent activities"
                    ]
                },
                {
                    heading: "Consequences of Violations",
                    points: [
                        "First offense: Warning and temporary suspension",
                        "Repeated violations: Account suspension or permanent ban",
                        "Severe violations: Immediate termination and legal action",
                        "Loss of purchased content and achievements",
                        "Reporting to relevant authorities for illegal activities"
                    ]
                }
            ]
        },
        {
            id: 4,
            icon: Shield,
            title: "Limitation of Liability",
            summary: "Legal limitations on BattleIQ's responsibilities and liabilities",
            content: [
                {
                    heading: "Service Availability",
                    points: [
                        "BattleIQ is provided 'as is' without warranties of any kind",
                        "We do not guarantee uninterrupted or error-free service",
                        "Platform features may change, be suspended, or discontinued",
                        "We are not liable for service interruptions or data loss",
                        "Technical issues may affect tournaments, quizzes, and features"
                    ]
                },
                {
                    heading: "Liability Limitations",
                    points: [
                        "BattleIQ is not liable for indirect, incidental, or consequential damages",
                        "Our total liability is limited to the amount you paid in the past 12 months",
                        "We are not responsible for user-generated content",
                        "We do not guarantee the accuracy of quiz content or educational materials",
                        "We are not liable for disputes between users"
                    ]
                },
                {
                    heading: "Third-Party Services",
                    points: [
                        "BattleIQ may link to or integrate third-party services",
                        "We are not responsible for third-party content or services",
                        "Third-party terms and privacy policies apply separately",
                        "Users interact with third parties at their own risk"
                    ]
                }
            ]
        },
        {
            id: 5,
            icon: Scale,
            title: "Dispute Resolution",
            summary: "Procedures for resolving conflicts and legal disputes",
            content: [
                {
                    heading: "Informal Resolution",
                    points: [
                        "Contact our support team first to resolve issues informally",
                        "Most disputes can be resolved through direct communication",
                        "We commit to responding within 3 business days",
                        "Escalation procedures are available for unresolved issues"
                    ]
                },
                {
                    heading: "Binding Arbitration",
                    points: [
                        "Disputes will be resolved through binding arbitration",
                        "Arbitration will be conducted under the rules of the American Arbitration Association",
                        "Arbitration takes place in the jurisdiction of BattleIQ's headquarters",
                        "Both parties waive the right to a jury trial",
                        "Class action lawsuits are not permitted"
                    ]
                },
                {
                    heading: "Exceptions",
                    points: [
                        "Either party may seek injunctive relief in court",
                        "Small claims court proceedings are permitted",
                        "Intellectual property disputes may be litigated",
                        "Users retain the right to file complaints with consumer protection agencies"
                    ]
                }
            ]
        },
        {
            id: 6,
            icon: Lock,
            title: "Privacy & Data Protection",
            summary: "How we handle, protect, and use your personal information",
            content: [
                {
                    heading: "Data Collection",
                    points: [
                        "We collect information you provide during registration",
                        "Usage data, quiz performance, and activity metrics are recorded",
                        "Cookies and tracking technologies may be used",
                        "Device information and IP addresses are collected",
                        "See our Privacy Policy for complete details"
                    ]
                },
                {
                    heading: "Data Usage",
                    points: [
                        "Data is used to provide and improve services",
                        "Performance analytics help enhance platform features",
                        "Communications regarding account activity and updates",
                        "Marketing communications (opt-out available)",
                        "Data sharing with third parties is limited and disclosed"
                    ]
                },
                {
                    heading: "Data Protection",
                    points: [
                        "We implement industry-standard security measures",
                        "Encrypted transmission and secure storage protocols",
                        "Regular security audits and vulnerability assessments",
                        "Users have rights to access, correct, and delete their data",
                        "GDPR and CCPA compliance for applicable users"
                    ]
                }
            ]
        }
    ]

    const quickLinks = [
        { title: "Account Eligibility", section: 1 },
        { title: "Content Rights", section: 2 },
        { title: "Prohibited Actions", section: 3 },
        { title: "Liability", section: 4 },
        { title: "Disputes", section: 5 },
        { title: "Privacy", section: 6 }
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
                        <Shield className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Legal Agreement</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Terms of Service
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto mb-4">
                        Please read these terms carefully before using BattleIQ. By accessing or using our platform,
                        you agree to be bound by these Terms of Service.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#F3EFDA]/60">
                        <Clock className="w-4 h-4" />
                        <span>Last Updated: October 19, 2025</span>
                    </div>
                </motion.div>

                {/* Important Notice */}
                <motion.div
                    className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 border-2 border-blue-400/40 rounded-2xl p-6 mb-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-lg mb-2">Important Notice</h3>
                            <p className="text-[#F3EFDA]/80 text-sm mb-3">
                                These Terms contain important information about your legal rights, remedies, and obligations.
                                By using BattleIQ, you agree to resolve disputes through binding arbitration and waive your right
                                to participate in class actions.
                            </p>
                            <p className="text-[#F3EFDA]/80 text-sm">
                                If you do not agree with these Terms, please do not use our services.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Navigation */}
                <motion.div
                    className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Quick Navigation
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {quickLinks.map((link, index) => (
                            <motion.button
                                key={index}
                                onClick={() => toggleSection(link.section)}
                                className="bg-[#F3EFDA]/10 hover:bg-[#F3EFDA]/20 border border-[#F3EFDA]/20 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all flex items-center justify-between"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>{link.title}</span>
                                <ChevronRight className="w-4 h-4" />
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Terms Sections */}
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
                                                    <CheckCircle className="w-5 h-5 text-green-400" />
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

                {/* Contact Section */}
                <motion.div
                    className="bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Mail className="w-12 h-12 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Questions About Our Terms?</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        If you have any questions or concerns about these Terms of Service, please don't hesitate to contact us.
                        Our legal team is here to help clarify any points.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="w-5 h-5" />
                            Contact Legal Team
                        </motion.button>
                        <motion.button
                            className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 text-[#F3EFDA] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/30 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Privacy Policy
                        </motion.button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#F3EFDA]/20">
                        <p className="text-sm text-[#F3EFDA]/60">
                            Email: <span className="text-[#F3EFDA]">legal@battleiq.com</span> |
                            Address: BattleIQ Inc., 123 Learning Street, San Francisco, CA 94105
                        </p>
                    </div>
                </motion.div>

                {/* Footer Note */}
                <div className="mt-8 text-center text-sm text-[#F3EFDA]/60">
                    <p>© 2025 BattleIQ Inc. All rights reserved.</p>
                    <p className="mt-2">
                        By continuing to use BattleIQ, you acknowledge that you have read, understood,
                        and agree to be bound by these Terms of Service.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TermsService