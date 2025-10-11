import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Shield, Star } from "lucide-react";

// Import certificates data
import certificates from "@/data/cirtificated.json";

const Certificates = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.6
            }
        }
    };

    const fadeInUp = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const scaleIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#4A1A35] to-[#3B132A] relative overflow-hidden">
            {/* Animated Background decorative elements */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="absolute top-10 left-10 w-32 h-32 bg-[#F3EFDA]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-40 h-40 bg-[#F3EFDA]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -20, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FF1493]/3 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </motion.div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Shield className="w-8 h-8 text-[#F3EFDA]" />
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFDA]">
                            Our Certifications
                        </h2>
                    </div>
                    <p className="text-[#F3EFDA]/80 text-base sm:text-lg max-w-2xl mx-auto">
                        Trusted by teachers in 90% of U.S. schools and 150+ countries
                    </p>
                </motion.div>

                {/* Certificates Grid - Simple Image Only */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.08,
                                transition: {
                                    duration: 0.3,
                                    ease: "easeOut"
                                }
                            }}
                            className="relative group"
                        >
                            {/* Glow effect on hover */}
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-[#FF1493] via-[#A8D5E2] to-[#FF1493] rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.7 }}
                            />

                            {/* Card content - Image Only */}
                            <div className="relative bg-gradient-to-br from-[#F3EFDA]/15 to-[#F3EFDA]/5 backdrop-blur-md rounded-2xl p-6 border border-[#F3EFDA]/20 group-hover:border-[#F3EFDA]/40 transition-all duration-300 aspect-square flex items-center justify-center">
                                <motion.div
                                    className="relative w-full h-full flex items-center justify-center"
                                    whileHover={{
                                        rotate: [0, -5, 5, -5, 0],
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-contain drop-shadow-2xl"
                                    />
                                    {cert.verified && (
                                        <motion.div
                                            className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1.5 shadow-lg shadow-green-500/50"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{
                                                delay: index * 0.1 + 0.3,
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 10
                                            }}
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 360,
                                                transition: { duration: 0.4 }
                                            }}
                                        >
                                            <CheckCircle className="w-5 h-5 text-white" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicator Section */}
                <motion.div
                    className="bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F3EFDA]/20 shadow-xl shadow-[#F3EFDA]/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={scaleIn}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    className="bg-[#FF1493]/20 p-4 rounded-full"
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 360,
                                        backgroundColor: "rgba(255, 20, 147, 0.3)"
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Award className="w-8 h-8 text-[#FF1493]" />
                                </motion.div>
                            </div>
                            <motion.h4
                                className="text-3xl sm:text-4xl font-bold text-[#F3EFDA] mb-2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 150
                                }}
                            >
                                90%
                            </motion.h4>
                            <p className="text-[#F3EFDA]/70 text-sm sm:text-base font-medium">U.S. Schools Trust Us</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    className="bg-[#A8D5E2]/20 p-4 rounded-full"
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 360,
                                        backgroundColor: "rgba(168, 213, 226, 0.3)"
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Star className="w-8 h-8 text-[#A8D5E2]" />
                                </motion.div>
                            </div>
                            <motion.h4
                                className="text-3xl sm:text-4xl font-bold text-[#F3EFDA] mb-2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.5,
                                    type: "spring",
                                    stiffness: 150
                                }}
                            >
                                150+
                            </motion.h4>
                            <p className="text-[#F3EFDA]/70 text-sm sm:text-base font-medium">Countries Worldwide</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    className="bg-green-500/20 p-4 rounded-full"
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 360,
                                        backgroundColor: "rgba(34, 197, 94, 0.3)"
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Shield className="w-8 h-8 text-green-500" />
                                </motion.div>
                            </div>
                            <motion.h4
                                className="text-3xl sm:text-4xl font-bold text-[#F3EFDA] mb-2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.6,
                                    type: "spring",
                                    stiffness: 150
                                }}
                            >
                                100%
                            </motion.h4>
                            <p className="text-[#F3EFDA]/70 text-sm sm:text-base font-medium">Secure & Certified</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Text */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p className="text-[#F3EFDA]/60 text-base sm:text-lg italic font-light">
                        "Quality education backed by internationally recognized certifications"
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;