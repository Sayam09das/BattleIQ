import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Award, CheckCircle, Shield, Star } from "lucide-react";

// Sample certificates data
const certificates = [
    { id: 1, name: "Quiz Master Certified", image: "https://image.slidesharecdn.com/quizcertificate-230325085321-4c07ba40/75/quiz-certificate-pptx-3-2048.jpg", verified: true },
    { id: 2, name: "BattleIQ Excellence", image: "https://www.sainiji.com/wp-content/uploads/2025/04/Quiz-Competition-on-World-Heritage-Day-2025.jpg", verified: true },
    { id: 3, name: "Knowledge Champion", image: "https://www.ftccop.ac.in/uploads/achievements/17289877961.jpg", verified: true },
    { id: 4, name: "Brain Power Award", image: "https://adrindia.org/sites/default/files/ADR_D2C_PTP_OO1.jpg", verified: true },
    { id: 5, name: "Top Scorer Medal", image: "https://adrindia.org/sites/default/files/ADR_D2C_PTP_OO1.jpg", verified: true },
    { id: 6, name: "Quiz League Winner", image: "https://adrindia.org/sites/default/files/ADR_D2C_PTP_OO1.jpg", verified: true },
];


// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span ref={ref}>
            {displayValue}
            {suffix}
        </span>
    );
};

const Certificates = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 80,
            rotateX: -15,
            scale: 0.85
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    const statsVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#4A1A35] to-[#3B132A] relative overflow-hidden">
            {/* Animated Background decorative elements */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="absolute top-10 left-10 w-32 h-32 bg-[#F3EFDA]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 30, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-40 h-40 bg-[#F3EFDA]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, -30, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FF1493]/3 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
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
            </motion.div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <motion.div
                            animate={{
                                rotate: [0, 15, -15, 0],
                                scale: [1, 1.1, 1.1, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Shield className="w-8 h-8 text-[#F3EFDA]" />
                        </motion.div>
                        <motion.h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFDA]"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Our Certifications
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-[#F3EFDA]/80 text-base sm:text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Trusted by teachers in 90% of U.S. schools and 150+ countries
                    </motion.p>
                </motion.div>

                {/* Certificates Grid */}
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
                            className="relative"
                        >
                            {/* Card content */}
                            <div className="relative p-6 aspect-square flex items-center justify-center overflow-hidden">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-contain"
                                    />
                                    {cert.verified && (
                                        <motion.div
                                            className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1.5"
                                            initial={{ scale: 0, rotate: -180 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: index * 0.1 + 0.5,
                                                type: "spring",
                                                stiffness: 250,
                                                damping: 15
                                            }}
                                        >
                                            <CheckCircle className="w-5 h-5 text-white" />
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicator Section with Animated Counters */}
                <motion.div
                    className="bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F3EFDA]/20 shadow-xl shadow-[#F3EFDA]/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={statsVariants}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    className="bg-[#FF1493]/20 p-4 rounded-full"
                                    whileInView={{
                                        scale: [0, 1.2, 1],
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 360,
                                        backgroundColor: "rgba(255, 20, 147, 0.3)"
                                    }}
                                >
                                    <Award className="w-8 h-8 text-[#FF1493]" />
                                </motion.div>
                            </div>
                            <h4 className="text-3xl sm:text-4xl font-bold text-[#F3EFDA] mb-2">
                                <AnimatedCounter value={90} suffix="%" duration={2} />
                            </h4>
                            <p className="text-[#F3EFDA]/70 text-sm sm:text-base font-medium">U.S. Schools Trust Us</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    className="bg-[#A8D5E2]/20 p-4 rounded-full"
                                    whileInView={{
                                        scale: [0, 1.2, 1],
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.4,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 360,
                                        backgroundColor: "rgba(168, 213, 226, 0.3)"
                                    }}
                                >
                                    <Star className="w-8 h-8 text-[#A8D5E2]" />
                                </motion.div>
                            </div>
                            <h4 className="text-3xl sm:text-4xl font-bold text-[#F3EFDA] mb-2">
                                <AnimatedCounter value={150} suffix="+" duration={2.5} />
                            </h4>
                            <p className="text-[#F3EFDA]/70 text-sm sm:text-base font-medium">Countries Worldwide</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    className="bg-green-500/20 p-4 rounded-full"
                                    whileInView={{
                                        scale: [0, 1.2, 1],
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.5,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 360,
                                        backgroundColor: "rgba(34, 197, 94, 0.3)"
                                    }}
                                >
                                    <Shield className="w-8 h-8 text-green-500" />
                                </motion.div>
                            </div>
                            <h4 className="text-3xl sm:text-4xl font-bold text-[#F3EFDA] mb-2">
                                <AnimatedCounter value={100} suffix="%" duration={2} />
                            </h4>
                            <p className="text-[#F3EFDA]/70 text-sm sm:text-base font-medium">Secure & Certified</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Text */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <motion.p
                        className="text-[#F3EFDA]/60 text-base sm:text-lg italic font-light"
                        whileInView={{
                            opacity: [0, 1],
                            y: [20, 0]
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        "Quality education backed by internationally recognized certifications"
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;