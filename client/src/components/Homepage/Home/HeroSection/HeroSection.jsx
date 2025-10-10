import React from "react";
import { Play, Trophy, Zap, Brain } from "lucide-react";
import { WordRotate } from "@/components/ui/word-rotate";
import { TypingAnimation } from "@/components/ui/typing-animation"

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#3B132A]">

            {/* Simple Geometric Background */}
            <div className="absolute inset-0">
                {/* Large Circle - Top Left */}
                <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />

                {/* Large Circle - Bottom Right */}
                <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto py-12 sm:py-16 lg:py-20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#F3EFDA] mb-4 sm:mb-6 tracking-tight leading-tight text-center">
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
                </h1>






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



                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mt-8 sm:mt-10 lg:mt-12 mb-8 sm:mb-10 lg:mb-12 px-2">
                    <div className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#F3EFDA]/10 border border-[#F3EFDA]/30 text-[#F3EFDA] whitespace-nowrap">
                        <Zap size={14} className="inline mr-1.5 sm:mr-2" />
                        Real-time Battles
                    </div>
                    <div className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#F3EFDA]/10 border border-[#F3EFDA]/30 text-[#F3EFDA] whitespace-nowrap">
                        <Brain size={14} className="inline mr-1.5 sm:mr-2" />
                        Smart AI Questions
                    </div>
                    <div className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#F3EFDA]/10 border border-[#F3EFDA]/30 text-[#F3EFDA] whitespace-nowrap">
                        <Trophy size={14} className="inline mr-1.5 sm:mr-2" />
                        Global Rankings
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 justify-center items-center mt-12 mb-16 px-4">

                    {/* Players Button */}
                    <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                        <span className="text-xs sm:text-xs lg:text-sm uppercase tracking-widest text-[#F3EFDA]/70 font-bold">
                            PLAYERS
                        </span>
                        <button
                            onClick={() => {
                                const isLoggedIn = Boolean(localStorage.getItem("user"));
                                window.location.href = isLoggedIn ? "/quiz-list" : "/login";
                            }}
                            className="group relative w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg lg:text-xl
                 bg-gradient-to-r from-[#FF1493] to-[#FF57B5] text-white shadow-lg
                 min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]
                 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 active:scale-95 cursor-pointer"
                        >
                            {/* Animated shine effect */}
                            <span className="absolute -left-32 top-0 w-32 h-full bg-white opacity-20 rotate-12 transform translate-x-0 group-hover:translate-x-[200%] transition-transform duration-700"></span>
                            <Play className="sm:block transition-transform duration-300 group-hover:translate-x-2 z-10" size={18} />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Start Playing</span>
                        </button>
                    </div>

                    {/* Competition Button */}
                    <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                        <span className="text-xs sm:text-xs lg:text-sm uppercase tracking-widest text-[#F3EFDA]/70 font-bold">
                            COMPETITION
                        </span>
                        <button
                            onClick={() => {
                                const isLoggedIn = Boolean(localStorage.getItem("user"));
                                window.location.href = isLoggedIn ? "/leaderboard" : "/login";
                            }}
                            className="group relative w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg lg:text-xl
                 bg-gradient-to-r from-[#F3EFDA] to-[#FFE4D1] text-[#3B132A] shadow-lg
                 min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]
                 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-200/40 active:scale-95 cursor-pointer"
                        >
                            {/* Animated shine effect */}
                            <span className="absolute -left-32 top-0 w-32 h-full bg-white opacity-20 rotate-12 transform translate-x-0 group-hover:translate-x-[200%] transition-transform duration-700"></span>
                            <Trophy className="sm:block transition-transform duration-300 group-hover:scale-110 z-10" size={18} />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#3B132A]">Leaderboard</span>
                        </button>
                    </div>

                </div>



                {/* Stats Counter */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 border-t border-[#F3EFDA]/20 pt-10 sm:pt-12 lg:pt-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-[#F3EFDA]">
                        <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-2">10K+</div>
                        <div className="text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#F3EFDA]/70 font-semibold">Active Players</div>
                    </div>
                    <div className="text-[#F3EFDA]">
                        <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-2">500+</div>
                        <div className="text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#F3EFDA]/70 font-semibold">Quiz Categories</div>
                    </div>
                    <div className="text-[#F3EFDA]">
                        <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-2">1M+</div>
                        <div className="text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#F3EFDA]/70 font-semibold">Questions Answered</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;