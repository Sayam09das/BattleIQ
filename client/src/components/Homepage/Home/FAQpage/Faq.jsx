import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all unused items in their original packaging. Please contact our support team to initiate a return."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for faster delivery."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by location."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay for your convenience."
        }
    ]

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

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
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
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

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    }

    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#3B132A] py-16">

            {/* Animated Background Elements */}
            <motion.div className="absolute inset-0 pointer-events-none">
                {/* Large Circle - Top Left */}
                <motion.div
                    className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Large Circle - Bottom Right */}
                <motion.div
                    className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#F3EFDA]/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.2, 0.5, 0.2],
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
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF1493]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A8D5E2]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, -50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Content Section */}
            <div className="relative max-w-3xl w-full z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <motion.div
                            variants={iconVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: true }}
                        >
                            <HelpCircle className="w-10 h-10 text-[#F3EFDA]" />
                        </motion.div>
                        <motion.h1
                            className="text-4xl font-bold text-[#F3EFDA] drop-shadow-md"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Frequently Asked Questions
                        </motion.h1>
                    </div>
                    <motion.p
                        className="text-[#F3EFDA]/80 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Find answers to common questions about our services
                    </motion.p>
                </motion.div>

                {/* Accordion Items */}
                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="relative group"
                        >
                            {/* Glow effect on hover */}
                            <motion.div
                                className="absolute -inset-0.5 bg-gradient-to-r from-[#FF1493] via-[#A8D5E2] to-[#FF1493] rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{ backgroundSize: "200% 200%" }}
                            />

                            <div className="relative bg-[#F3EFDA]/10 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#F3EFDA]/40">
                                <motion.button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#F3EFDA]/40 focus:ring-offset-2 focus:ring-offset-[#3B132A]"
                                    whileHover={{ backgroundColor: "rgba(243, 239, 218, 0.05)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            animate={{
                                                rotate: openIndex === index ? 360 : 0,
                                                scale: openIndex === index ? 1.1 : 1
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <MessageCircle className="w-5 h-5 text-[#F3EFDA]/70" />
                                        </motion.div>
                                        <span className="text-lg font-semibold text-[#F3EFDA] pr-4">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{
                                            rotate: openIndex === index ? 180 : 0
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-[#F3EFDA] flex-shrink-0" />
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    height: {
                                                        duration: 0.3,
                                                        ease: "easeOut"
                                                    },
                                                    opacity: {
                                                        duration: 0.25,
                                                        delay: 0.1
                                                    }
                                                }
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: {
                                                        duration: 0.3,
                                                        ease: "easeIn"
                                                    },
                                                    opacity: {
                                                        duration: 0.2
                                                    }
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <motion.div
                                                className="px-6 pb-5 pt-2 bg-[#3B132A]/70"
                                                initial={{ y: -10 }}
                                                animate={{ y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.p
                                                    className="text-[#F3EFDA]/90 leading-relaxed"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.1, duration: 0.3 }}
                                                >
                                                    {faq.answer}
                                                </motion.p>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                </motion.div>
            </div>
        </div>
    )
}

export default Faq