import React from "react";
import LightRays from "../../../LightRays";
import { Play, Trophy } from "lucide-react";

const HeroSection = ({ isDarkMode }) => {
    return (
        <div
            className={`relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
                }`}
        >
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <LightRays />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
                {/* App Name */}
                <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
                    BattleIQ
                </h1>

                {/* Slogan */}
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                    Test Your Knowledge. Beat the World!
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${isDarkMode
                                ? "bg-white text-black hover:bg-gray-200"
                                : "bg-black text-white hover:bg-gray-700"
                            }`}
                        onClick={() => (window.location.href = "/quiz-list")}
                    >
                        <Play size={20} />
                        Play Quiz
                    </button>

                    <button
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${isDarkMode
                                ? "bg-gray-700 text-white hover:bg-gray-600"
                                : "bg-gray-200 text-black hover:bg-gray-300"
                            }`}
                        onClick={() => (window.location.href = "/leaderboard")}
                    >
                        <Trophy size={20} />
                        View Leaderboard
                    </button>
                </div>

                {/* Optional Icon */}
                <div className="mt-10">
                    <img
                        src="/quiz-icon.png"
                        alt="Quiz Icon"
                        className="w-20 h-20 mx-auto animate-bounce"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
