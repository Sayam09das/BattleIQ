import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Play, Trophy, Zap, Brain } from "lucide-react";
import { WordRotate } from "@/components/ui/word-rotate";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { NumberTicker } from "@/components/ui/number-ticker";

const HeroSection = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { scrollYProgress } = useScroll();

    // Parallax effects
    const yCircleLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const yCircleRight = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

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
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const pillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.div
            className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#3B132A]"
            style={{ opacity, scale }}
        >
            {/* Animated Geometric Background */}
            <div className="absolute inset-0">
                {/* Large Circle - Top Left */}
                <motion.div
                    className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleLeft }}
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Large Circle - Bottom Right */}
                <motion.div
                    className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleRight }}
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20"
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${30 + i * 10}%`
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto py-12 sm:py-16 lg:py-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#F3EFDA] mb-4 sm:mb-6 tracking-tight leading-tight text-center"
                    variants={itemVariants}
                >
                    BattleIQ is now{" "}
                    <span className="text-[#F3EFDA]">
                        <WordRotate
                            words={["MindGround", "BrainBattle", "QuizVerse"]}
                            duration={2500}
                            className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-oxygen"
                            motionProps={{
                                initial: { opacity: 0, y: -20 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 20 },
                                transition: { duration: 0.3, ease: "easeOut" },
                            }}
                        />
                    </span>
                </motion.h1>

                <motion.div variants={itemVariants}>
                    <TypingAnimation
                        words={[
                            "Think fast.",
                            "Play smart.",
                            "Win big!"
                        ]}
                        className="mt-6 mb-10 sm:mt-8 sm:mb-12 md:mt-10 md:mb-14 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#F3EFDA]/90 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium px-4 text-center"
                        typeSpeed={90}
                        deleteSpeed={50}
                        pauseDelay={1200}
                        loop={true}
                        showCursor={true}
                        blinkCursor={true}
                        cursorStyle="line"
                    />
                </motion.div>

                {/* Feature Pills */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mt-8 sm:mt-10 lg:mt-12 mb-8 sm:mb-10 lg:mb-12 px-2"
                    variants={containerVariants}
                >
                    {[
                        { icon: Zap, text: "Real-time Battles" },
                        { icon: Brain, text: "Smart AI Questions" },
                        { icon: Trophy, text: "Global Rankings" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={pillVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(243, 239, 218, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#F3EFDA]/10 border border-[#F3EFDA]/30 text-[#F3EFDA] whitespace-nowrap cursor-pointer"
                        >
                            <item.icon size={14} className="inline mr-1.5 sm:mr-2" />
                            {item.text}
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 justify-center items-center mt-12 mb-16 px-4"
                    variants={containerVariants}
                >
                    {/* Players Button */}
                    <motion.div
                        className="flex flex-col items-center gap-2 w-full sm:w-auto"
                        variants={itemVariants}
                    >
                        <motion.span
                            className="text-xs sm:text-xs lg:text-sm uppercase tracking-widest text-[#F3EFDA]/70 font-bold"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            PLAYERS
                        </motion.span>
                        <motion.button
                            onClick={() => {
                                window.location.href = isLoggedIn ? "/quiz-list" : "/login";
                            }}
                            className="group relative w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg lg:text-xl
                 bg-gradient-to-r from-[#FF1493] to-[#FF57B5] text-white shadow-lg
                 min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]
                 overflow-hidden cursor-pointer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px -10px rgba(255, 20, 147, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Animated shine effect */}
                            <motion.span
                                className="absolute -left-32 top-0 w-32 h-full bg-white opacity-20 rotate-12"
                                animate={{ x: [-128, 400] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Play className="z-10" size={18} />
                            </motion.div>
                            <span className="relative z-10">Start Playing</span>
                        </motion.button>
                    </motion.div>

                    {/* Competition Button */}
                    <motion.div
                        className="flex flex-col items-center gap-2 w-full sm:w-auto"
                        variants={itemVariants}
                    >
                        <motion.span
                            className="text-xs sm:text-xs lg:text-sm uppercase tracking-widest text-[#F3EFDA]/70 font-bold"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                            COMPETITION
                        </motion.span>
                        <motion.button
                            onClick={() => {
                                window.location.href = isLoggedIn ? "/leaderboard" : "/login";
                            }}
                            className="group relative w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg lg:text-xl
                 bg-gradient-to-r from-[#F3EFDA] to-[#FFE4D1] text-[#3B132A] shadow-lg
                 min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]
                 overflow-hidden cursor-pointer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px -10px rgba(243, 239, 218, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Animated shine effect */}
                            <motion.span
                                className="absolute -left-32 top-0 w-32 h-full bg-white opacity-20 rotate-12"
                                animate={{ x: [-128, 400] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
                            />
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Trophy className="z-10" size={18} />
                            </motion.div>
                            <span className="relative z-10">Leaderboard</span>
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Stats Section with Scroll Animation */}
                <StatsSection />
            </motion.div>
        </motion.div>
    );
};

// Separate component for stats with scroll-triggered animation
const StatsSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { value: 10000, label: "Active Players" },
        { value: 500, label: "Quiz Categories" },
        { value: 1000000, label: "Questions Answered" }
    ];

    return (
        <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 border-t border-[#F3EFDA]/20 pt-10 sm:pt-12 lg:pt-16 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    className="text-[#F3EFDA]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{
                        duration: 0.5,
                        delay: i * 0.2,
                        ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-2"
                        whileHover={{
                            textShadow: "0 0 20px rgba(243, 239, 218, 0.5)"
                        }}
                    >
                        {isInView && (
                            <>
                                <NumberTicker value={stat.value} startValue={0} format="short" />+
                            </>
                        )}
                    </motion.div>
                    <div className="text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#F3EFDA]/70 font-semibold">
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default HeroSection;