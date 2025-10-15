import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { X, Play, Trophy, Clock, Brain, CheckCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Import quiz topics data
import quizTopics from "@/data/quizTopics.json";

const QuizTopic = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const handleQuizClick = (topic) => {
        setSelectedQuiz(topic);
    };

    const closeModal = () => {
        setSelectedQuiz(null);
    };

    const handleStartQuiz = () => {
        if (isLoggedIn) {
            console.log("Starting quiz:", selectedQuiz.title);
            // Add your quiz start logic here
            // window.location.href = `/quiz/${selectedQuiz.id}`;
        } else {
            console.log("User not logged in, redirecting to login");
            window.location.href = "/login";
        }
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case "Easy": return "bg-green-500";
            case "Medium": return "bg-yellow-500";
            case "Hard": return "bg-red-500";
            default: return "bg-gray-500";
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.section
            ref={sectionRef}
            className="py-16 sm:py-20 bg-[#3B132A] relative overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Animated Geometric Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 10, 0],
                        opacity: [0.08, 0.12, 0.08]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, -10, 0],
                        opacity: [0.08, 0.12, 0.08]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

                <motion.div
                    className="absolute top-40 right-20 sm:top-32 sm:right-40 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border-2 border-[#F3EFDA]/5"
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-40 left-20 sm:bottom-32 sm:left-40 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border-2 border-[#F3EFDA]/5"
                    animate={{
                        y: [20, -20, 20],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                    }}
                />

                {/* Floating sparkles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-[#F3EFDA]/30"
                        style={{
                            left: `${15 + i * 12}%`,
                            top: `${20 + (i % 3) * 25}%`
                        }}
                        animate={{
                            y: [-15, 15, -15],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 3 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            <div className="w-full text-center relative z-10">
                <motion.div variants={itemVariants}>
                    <motion.div
                        className="inline-flex items-center gap-2 bg-[#F3EFDA]/10 px-4 py-2 rounded-full mb-4 border border-[#F3EFDA]/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-xs uppercase tracking-wider text-[#F3EFDA]/80 font-semibold">
                            Explore Topics
                        </span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFDA] mb-4">
                        Quiz Topics
                    </h2>
                    <p className="text-[#F3EFDA]/70 mb-12 text-sm sm:text-base">
                        Choose your challenge and test your knowledge
                    </p>
                </motion.div>

                <motion.div
                    className="relative px-12"
                    variants={itemVariants}
                >
                    {/* Navigation Buttons */}
                    <motion.button
                        onClick={() => swiperRef.current?.swiper?.slidePrev()}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#F3EFDA]/20 p-2 rounded-full shadow-md"
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(243, 239, 218, 0.4)",
                            boxShadow: "0 10px 25px -5px rgba(243, 239, 218, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft size={28} className="text-[#F3EFDA]" />
                    </motion.button>

                    <motion.button
                        onClick={() => swiperRef.current?.swiper?.slideNext()}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#F3EFDA]/20 p-2 rounded-full shadow-md"
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(243, 239, 218, 0.4)",
                            boxShadow: "0 10px 25px -5px rgba(243, 239, 218, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight size={28} className="text-[#F3EFDA]" />
                    </motion.button>

                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 25,
                            stretch: 0,
                            depth: 150,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className="w-full"
                    >
                        {quizTopics.map((topic, index) => (
                            <SwiperSlide key={topic.id} className="!w-72 sm:!w-80 overflow-visible">
                                <motion.div
                                    onClick={() => handleQuizClick(topic)}
                                    className="bg-[#F3EFDA] rounded-xl shadow-lg shadow-[#F3EFDA]/20 cursor-pointer border-2 border-[#F3EFDA]/30 overflow-visible"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10,
                                        boxShadow: "0 25px 50px -12px rgba(243, 239, 218, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative overflow-visible">
                                        <motion.img
                                            src={topic.image}
                                            alt={topic.title}
                                            className="w-full h-48 sm:h-56 object-cover rounded-t-xl"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#3B132A]/80 to-transparent"></div>
                                        <motion.span
                                            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#3B132A] text-[#F3EFDA] text-base sm:text-lg font-bold px-5 py-2 rounded-lg shadow-lg"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {topic.title}
                                        </motion.span>
                                    </div>
                                    <p className="p-4 text-sm sm:text-base text-[#3B132A]/80 font-medium">
                                        {topic.description}
                                    </p>
                                </motion.div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </motion.div>
            </div>

            {/* Animated Modal */}
            <AnimatePresence>
                {selectedQuiz && (
                    <motion.div
                        className="fixed inset-0 bg-[#3B132A]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-white rounded-2xl max-w-5xl w-full shadow-2xl shadow-[#F3EFDA]/30 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Left Side - Content */}
                            <motion.div
                                className="flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h3 className="text-3xl sm:text-4xl font-bold text-[#3B132A] mb-3">
                                            {selectedQuiz.title} Quiz
                                        </h3>
                                        <motion.span
                                            className={`${getDifficultyColor(selectedQuiz.difficulty)} text-white text-sm font-semibold px-3 py-1 rounded-full inline-block`}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {selectedQuiz.difficulty}
                                        </motion.span>
                                    </motion.div>
                                    <motion.button
                                        onClick={closeModal}
                                        className="bg-gray-200 text-[#3B132A] p-2 rounded-full md:hidden"
                                        whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X size={24} />
                                    </motion.button>
                                </div>

                                <motion.p
                                    className="text-[#3B132A]/70 text-base sm:text-lg mb-6 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {selectedQuiz.description}
                                </motion.p>

                                {/* Features List */}
                                {selectedQuiz.features && selectedQuiz.features.length > 0 && (
                                    <motion.div
                                        className="space-y-3 mb-8"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        {selectedQuiz.features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-start gap-3"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                whileHover={{ x: 5 }}
                                            >
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-[#3B132A]/80 text-sm sm:text-base">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Quiz Stats */}
                                <motion.div
                                    className="grid grid-cols-3 gap-3 mb-6 bg-[#F3EFDA]/30 p-4 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {[
                                        { icon: Brain, label: "Questions", value: selectedQuiz.questions || 20 },
                                        { icon: Clock, label: "Duration", value: selectedQuiz.duration || '10 mins' },
                                        { icon: Trophy, label: "Points", value: (selectedQuiz.questions || 20) * 10 }
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            className="text-center"
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <stat.icon className="w-6 h-6 mx-auto mb-1 text-[#3B132A]" />
                                            <p className="text-xs text-[#3B132A]/60 uppercase">{stat.label}</p>
                                            <p className="text-lg font-bold text-[#3B132A]">{stat.value}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Action Button */}
                                <motion.button
                                    onClick={handleStartQuiz}
                                    className="w-full bg-[#FF1493] text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-2 relative overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px -10px rgba(255, 20, 147, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-white opacity-20"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <Play size={20} />
                                    Start Quiz Now
                                </motion.button>

                                {!isLoggedIn && (
                                    <motion.p
                                        className="text-center text-sm text-[#3B132A]/60 mt-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        You need to login to start the quiz
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Right Side - Visual Preview */}
                            <motion.div
                                className="md:w-2/5 bg-gradient-to-br from-[#A8D5E2] to-[#95C7D9] p-6 relative hidden md:flex flex-col justify-center items-center"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                <motion.button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 bg-white text-[#3B132A] p-2 rounded-full shadow-md"
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#f3f4f6",
                                        rotate: 90
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={24} />
                                </motion.button>

                                {/* Image Preview */}
                                <motion.div
                                    className="bg-white rounded-xl shadow-xl overflow-hidden mb-6 w-full max-w-xs"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                >
                                    <img
                                        src={selectedQuiz.image}
                                        alt={selectedQuiz.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 bg-white">
                                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Preview</div>
                                        <div className="font-bold text-[#3B132A] text-lg">{selectedQuiz.title}</div>
                                        <div className="text-sm text-gray-600 mt-1">Ready to challenge yourself?</div>
                                    </div>
                                </motion.div>

                                {/* Stats Cards */}
                                <motion.div
                                    className="grid grid-cols-2 gap-3 w-full max-w-xs"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {[
                                        { value: selectedQuiz.questions || 20, label: "Total Questions", color: "#FF1493" },
                                        { value: (selectedQuiz.questions || 20) * 10, label: "Max Points", color: "#3B132A" }
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            className="bg-white/90 backdrop-blur rounded-lg p-3 text-center shadow-md"
                                            whileHover={{
                                                scale: 1.05,
                                                y: -5,
                                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                                            }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.7 + i * 0.1 }}
                                        >
                                            <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                                            <div className="text-xs text-gray-600">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default QuizTopic;