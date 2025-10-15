import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, X, Send, CheckCircle } from 'lucide-react'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [notification, setNotification] = useState(null)

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type })
        setTimeout(() => {
            setNotification(null)
        }, 5000)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = validateForm()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false)
            showNotification('Thank you! Your message has been sent successfully.', 'success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        }, 1500)
    }

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5" />,
            title: "Phone",
            details: "+1 (555) 123-4567",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            details: "support@company.com",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Address",
            details: "123 Business St, Suite 100, New York, NY 10001",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Hours",
            details: "Mon - Fri: 9:00 AM - 6:00 PM",
            color: "from-green-500 to-green-600"
        }
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    }

    const formVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const sidebarVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F3EFDA] via-[#FFFDF6] to-[#F3EFDA] py-16 px-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div className="absolute inset-0 pointer-events-none">
                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#3B132A]/10 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Gradient orbs */}
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Toast Notification */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
                    >
                        <motion.div
                            className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl ${notification.type === 'success'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-red-600 text-white'
                                } min-w-[320px] max-w-md`}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                <CheckCircle className="w-5 h-5" />
                            </motion.div>
                            <div className="flex-1">
                                <p className="font-medium">{notification.message}</p>
                            </div>
                            <motion.button
                                onClick={() => setNotification(null)}
                                className="hover:opacity-70 transition-opacity"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="inline-block mb-4"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#3B132A] to-[#2A0E1F] rounded-2xl flex items-center justify-center mx-auto">
                            <Mail className="w-8 h-8 text-[#F3EFDA]" />
                        </div>
                    </motion.div>
                    <motion.h1
                        className="text-4xl font-bold text-[#3B132A] mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-[#3B132A]/70 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        className="md:col-span-3 bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={formVariants}
                    >
                        {/* Shimmer effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                            }}
                        />

                        <h2 className="text-2xl font-semibold text-[#3B132A] mb-6">Send a Message</h2>

                        <motion.div
                            className="space-y-5"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-[#3B132A] mb-2">
                                    Name *
                                </label>
                                <motion.input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B132A]/20 focus:border-[#3B132A] bg-[#3B132A] text-[#F3EFDA] placeholder-[#F3EFDA]/70 transition-all`}
                                    placeholder="Your name"
                                    whileFocus={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                />
                                <AnimatePresence>
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="mt-1 text-sm text-red-600"
                                        >
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-[#3B132A] mb-2">
                                    Email *
                                </label>
                                <motion.input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B132A]/20 focus:border-[#3B132A] bg-[#3B132A] text-[#F3EFDA] placeholder-[#F3EFDA]/70 transition-all`}
                                    placeholder="your@email.com"
                                    whileFocus={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                />
                                <AnimatePresence>
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="mt-1 text-sm text-red-600"
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-[#3B132A] mb-2">
                                    Phone
                                </label>
                                <motion.input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B132A]/20 focus:border-[#3B132A] bg-[#3B132A] text-[#F3EFDA] placeholder-[#F3EFDA]/70 transition-all"
                                    placeholder="+1 (555) 000-0000"
                                    whileFocus={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-[#3B132A] mb-2">
                                    Message *
                                </label>
                                <motion.textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B132A]/20 focus:border-[#3B132A] resize-none bg-[#3B132A] text-[#F3EFDA] placeholder-[#F3EFDA]/70 transition-all`}
                                    placeholder="How can we help you?"
                                    whileFocus={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                />
                                <AnimatePresence>
                                    {errors.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="mt-1 text-sm text-red-600"
                                        >
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`w-full bg-[#3B132A] text-[#F3EFDA] font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 ${isSubmitting
                                        ? 'opacity-70 cursor-not-allowed'
                                        : 'hover:bg-[#2A0E1F]'
                                    }`}
                                variants={itemVariants}
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-[#F3EFDA]/30 border-t-[#F3EFDA] rounded-full"
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="md:col-span-2 space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sidebarVariants}
                    >
                        <motion.div
                            className="bg-white rounded-xl shadow-lg p-6"
                            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-xl font-semibold text-[#3B132A] mb-6">Contact Info</h2>
                            <motion.div
                                className="space-y-5"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3 group"
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.div
                                            className={`w-10 h-10 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {info.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="font-medium text-[#3B132A] text-sm">{info.title}</h3>
                                            <p className="text-[#3B132A]/70 text-sm mt-1">{info.details}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-[#3B132A] to-[#2A0E1F] rounded-xl shadow-lg p-6 text-center relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Animated background pattern */}
                            <motion.div
                                className="absolute inset-0 opacity-10"
                                animate={{
                                    backgroundPosition: ["0% 0%", "100% 100%"],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                style={{
                                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                                    backgroundSize: "20px 20px"
                                }}
                            />

                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                <h3 className="text-lg font-semibold text-[#F3EFDA] mb-2">Quick Support</h3>
                                <p className="text-[#F3EFDA]/80 text-sm mb-4">
                                    Need immediate assistance? Our team is here to help.
                                </p>
                                <motion.button
                                    className="w-full bg-[#F3EFDA] text-[#3B132A] font-medium py-2.5 px-4 rounded-lg hover:bg-white transition-colors"
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(243,239,218,0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Live Chat
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs