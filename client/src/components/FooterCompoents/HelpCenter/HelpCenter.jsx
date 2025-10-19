import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HelpCircle, Search, Book, MessageCircle, Mail, Phone, ChevronDown, ChevronRight, Play, FileText, Shield, Zap, Users, Trophy, Settings, CreditCard, Lock } from 'lucide-react'

const HelpCenter = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [searchQuery, setSearchQuery] = useState('')
    const [expandedFaq, setExpandedFaq] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('all')

    const categories = [
        { id: 'all', name: 'All Topics', icon: Book, count: 24 },
        { id: 'account', name: 'Account & Login', icon: Users, count: 6 },
        { id: 'quizzes', name: 'Quizzes', icon: Zap, count: 8 },
        { id: 'tournaments', name: 'Tournaments', icon: Trophy, count: 5 },
        { id: 'billing', name: 'Billing & Plans', icon: CreditCard, count: 4 },
        { id: 'technical', name: 'Technical Issues', icon: Settings, count: 7 },
        { id: 'security', name: 'Privacy & Security', icon: Lock, count: 4 }
    ]

    const faqs = [
        {
            id: 1,
            category: 'account',
            question: "How do I reset my password?",
            answer: "Click on 'Forgot Password' on the login page, enter your email, and follow the instructions sent to your inbox. If you don't receive the email within 5 minutes, check your spam folder or contact support."
        },
        {
            id: 2,
            category: 'account',
            question: "Can I change my username?",
            answer: "Yes! Go to Settings > Profile > Edit Username. Note that you can only change your username once every 30 days to prevent confusion in leaderboards and team rosters."
        },
        {
            id: 3,
            category: 'account',
            question: "How do I delete my account?",
            answer: "Navigate to Settings > Account > Delete Account. Please note that this action is permanent and will remove all your data, achievements, and quiz history. You'll have 30 days to recover your account before permanent deletion."
        },
        {
            id: 4,
            category: 'quizzes',
            question: "How does the AI quiz generator work?",
            answer: "Our AI analyzes your topic input and generates contextually relevant questions using advanced language models. You can customize difficulty, question count, and type. The AI learns from your preferences to improve future generations."
        },
        {
            id: 5,
            category: 'quizzes',
            question: "Why can't I see my quiz results?",
            answer: "Results are typically available immediately after completion. If you don't see them, try refreshing the page or checking your Quiz History. If the issue persists, there may be a temporary server delay—contact support if results don't appear within 24 hours."
        },
        {
            id: 6,
            category: 'quizzes',
            question: "Can I create private quizzes for my team?",
            answer: "Yes! When creating a quiz, select 'Private' visibility and share the unique quiz code with your team members. Only users with the code can access the quiz. You can also assign quizzes directly to team members."
        },
        {
            id: 7,
            category: 'tournaments',
            question: "How do I join a tournament?",
            answer: "Go to the Tournaments page, browse available tournaments, and click 'Join' on any that interest you. Some tournaments may have entry requirements like minimum level or team membership. Registration typically closes 30 minutes before start time."
        },
        {
            id: 8,
            category: 'tournaments',
            question: "What happens if I disconnect during a tournament?",
            answer: "You have 5 minutes to reconnect without penalty. If you rejoin within this window, you can continue from where you left off. After 5 minutes, you'll forfeit your position and any potential prizes for that tournament."
        },
        {
            id: 9,
            category: 'tournaments',
            question: "How are tournament winners determined?",
            answer: "Winners are determined by a combination of accuracy and speed. The scoring system awards points for correct answers and bonuses for fast responses. Ties are broken by completion time. Full scoring details are available in tournament rules."
        },
        {
            id: 10,
            category: 'billing',
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, and Google Pay. For educational institutions, we also offer purchase orders and invoicing options."
        },
        {
            id: 11,
            category: 'billing',
            question: "How do I cancel my subscription?",
            answer: "Go to Settings > Subscription > Manage Plan > Cancel Subscription. Your premium features will remain active until the end of your current billing period. No refunds are provided for partial months."
        },
        {
            id: 12,
            category: 'billing',
            question: "Do you offer student or educator discounts?",
            answer: "Yes! Students get 50% off with a valid .edu email address. Educators teaching 3+ students can access our Education Plan with additional features. Verify your status through Settings > Billing > Apply Discount."
        },
        {
            id: 13,
            category: 'technical',
            question: "The app is running slowly. What should I do?",
            answer: "Try clearing your browser cache, disabling browser extensions, or using a different browser. Ensure you have a stable internet connection. The app performs best on Chrome, Firefox, or Safari. Contact support if issues persist."
        },
        {
            id: 14,
            category: 'technical',
            question: "Why won't the quiz timer start?",
            answer: "This is usually a browser compatibility issue. Ensure JavaScript is enabled, clear your cache, and disable ad blockers. If using Safari, check that pop-up blockers aren't interfering. Try using an incognito/private browsing window."
        },
        {
            id: 15,
            category: 'technical',
            question: "My achievements aren't showing up correctly",
            answer: "Achievement display can take up to 30 minutes to update. If they still don't appear, log out and back in. Some achievements have specific unlock conditions—check the requirements. Contact support with screenshots if the issue continues."
        },
        {
            id: 16,
            category: 'security',
            question: "Is my personal data safe?",
            answer: "Yes. We use industry-standard encryption (SSL/TLS), secure authentication, and regular security audits. Your payment information is handled by certified PCI-compliant processors. We never sell your data. Read our Privacy Policy for full details."
        },
        {
            id: 17,
            category: 'security',
            question: "How do I enable two-factor authentication?",
            answer: "Go to Settings > Security > Two-Factor Authentication > Enable. Follow the setup wizard to connect your authenticator app (Google Authenticator, Authy, etc.). Save your backup codes in a secure location."
        },
        {
            id: 18,
            category: 'security',
            question: "Can I see who has access to my account data?",
            answer: "Access logs are available in Settings > Security > Activity Log. You can see all login attempts, devices used, and locations. If you notice suspicious activity, immediately change your password and contact support."
        }
    ]

    const quickLinks = [
        { title: "Getting Started Guide", icon: Book, url: "#" },
        { title: "Video Tutorials", icon: Play, url: "#" },
        { title: "Feature Documentation", icon: FileText, url: "#" },
        { title: "Community Forum", icon: MessageCircle, url: "#" }
    ]

    const contactOptions = [
        {
            icon: Mail,
            title: "Email Support",
            description: "Get help via email",
            detail: "support@battleiq.com",
            responseTime: "Response within 24 hours"
        },
        {
            icon: MessageCircle,
            title: "Live Chat",
            description: "Chat with our team",
            detail: "Available 9am-6pm EST",
            responseTime: "Average wait: 2 minutes"
        },
        {
            icon: Phone,
            title: "Phone Support",
            description: "Speak to an agent",
            detail: "+1 (415) 555-0123",
            responseTime: "Mon-Fri 9am-6pm EST"
        }
    ]

    const filteredFaqs = selectedCategory === 'all'
        ? faqs
        : faqs.filter(faq => faq.category === selectedCategory)

    const toggleFaq = (id) => {
        setExpandedFaq(expandedFaq === id ? null : id)
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
                        <HelpCircle className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">We're Here to Help</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Help Center
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Find answers to common questions, explore guides, and get support from our team
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    className="max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for help articles..."
                            className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl pl-12 pr-4 py-4 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                        />
                    </div>
                </motion.div>

                {/* Quick Links */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {quickLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 hover:bg-[#F3EFDA]/10 transition-all text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <link.icon className="w-10 h-10 text-[#F3EFDA] mx-auto mb-3" />
                            <h3 className="font-semibold">{link.title}</h3>
                        </motion.a>
                    ))}
                </div>

                {/* Categories */}
                <div className="mb-8 overflow-x-auto pb-2">
                    <div className="flex gap-3 min-w-max">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${selectedCategory === category.id
                                        ? 'bg-[#F3EFDA] text-[#3B132A]'
                                        : 'bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/20'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <category.icon className="w-4 h-4" />
                                <span>{category.name}</span>
                                <span className="text-xs opacity-70">({category.count})</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* FAQs */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-6">
                            {selectedCategory === 'all'
                                ? 'Frequently Asked Questions'
                                : `${categories.find(c => c.id === selectedCategory)?.name} FAQs`}
                        </h2>
                        <div className="space-y-4">
                            {filteredFaqs.map((faq, index) => (
                                <motion.div
                                    key={faq.id}
                                    className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.05 }}
                                >
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="w-full p-6 flex items-center justify-between hover:bg-[#F3EFDA]/5 transition-all text-left"
                                    >
                                        <div className="flex items-start gap-4 flex-1">
                                            <HelpCircle className="w-5 h-5 text-[#F3EFDA]/60 flex-shrink-0 mt-1" />
                                            <span className="font-semibold">{faq.question}</span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: expandedFaq === faq.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-5 h-5 flex-shrink-0" />
                                        </motion.div>
                                    </button>
                                    {expandedFaq === faq.id && (
                                        <motion.div
                                            className="px-6 pb-6 pl-16"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className="text-[#F3EFDA]/80">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Support Sidebar */}
                    <div className="space-y-6">
                        <motion.div
                            className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="font-bold text-lg mb-4">Still Need Help?</h3>
                            <p className="text-sm text-[#F3EFDA]/80 mb-6">
                                Can't find what you're looking for? Our support team is ready to assist you.
                            </p>
                            <div className="space-y-4">
                                {contactOptions.map((option, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-4 cursor-pointer hover:bg-[#F3EFDA]/20 transition-all"
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <option.icon className="w-5 h-5 text-[#F3EFDA] flex-shrink-0 mt-1" />
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1">{option.title}</h4>
                                                <p className="text-xs text-[#F3EFDA]/70 mb-2">{option.description}</p>
                                                <p className="text-sm font-medium mb-1">{option.detail}</p>
                                                <p className="text-xs text-[#F3EFDA]/60">{option.responseTime}</p>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-[#F3EFDA]/40" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h3 className="font-bold text-lg mb-4">Popular Guides</h3>
                            <div className="space-y-3">
                                {[
                                    "How to Create Your First Quiz",
                                    "Understanding Tournament Scoring",
                                    "Team Management Best Practices",
                                    "Maximizing Your Study Efficiency"
                                ].map((guide, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-3 p-3 bg-[#F3EFDA]/5 rounded-lg hover:bg-[#F3EFDA]/10 transition-all group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Book className="w-4 h-4 text-[#F3EFDA]/60 group-hover:text-[#F3EFDA] transition-colors" />
                                        <span className="text-sm">{guide}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Form */}
                <motion.div
                    className="bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-2 text-center">Submit a Support Request</h2>
                        <p className="text-[#F3EFDA]/70 mb-8 text-center">
                            Fill out the form below and our team will get back to you within 24 hours
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl px-4 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl px-4 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40"
                            />
                        </div>
                        <select className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl px-4 py-3 text-[#F3EFDA] focus:outline-none focus:border-[#F3EFDA]/40 mb-6">
                            <option>Select Issue Category</option>
                            <option>Account & Login</option>
                            <option>Quizzes</option>
                            <option>Tournaments</option>
                            <option>Billing</option>
                            <option>Technical Issue</option>
                            <option>Other</option>
                        </select>
                        <textarea
                            rows="6"
                            placeholder="Describe your issue in detail..."
                            className="w-full bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl px-4 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/40 focus:outline-none focus:border-[#F3EFDA]/40 mb-6 resize-none"
                        />
                        <motion.button
                            className="w-full bg-[#F3EFDA] text-[#3B132A] font-bold py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Mail className="w-5 h-5" />
                            Submit Request
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HelpCenter