"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-gradient-to-b from-[#3B132A] to-[#2A0E1F] font-sans overflow-hidden relative"
            ref={containerRef}
        >
            {/* Simple Geometric Background */}
            <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full border-2 border-[#F3EFDA]/10" />
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full border-2 border-[#F3EFDA]/10" />
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto py-16 sm:py-24 px-4 md:px-8 lg:px-10">
                {data.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24 lg:mb-32">
                        {/* Left Column - Text */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFDA] mb-6 leading-tight">
                                {item.title}
                            </h2>

                            <div className="space-y-6">
                                {item.points.map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex gap-4 items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-sm bg-[#FF1493] flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                        </div>
                                        <p className="text-[#F3EFDA] text-base sm:text-lg leading-relaxed">
                                            {point}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - Card */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            {item.content}
                        </motion.div>
                    </div>
                ))}

                {/* Timeline Line */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-[#F3EFDA]/20 to-transparent hidden lg:block"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#FF1493] via-[#A8D5E2] to-transparent rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

// ✅ BattleIQ Data
const TimelinePage = () => {
    const timelineData = [
        {
            title: "Discover Quiz Topics Instantly",
            points: [
                "Explore a wide range of quiz categories like Science, Tech, History & more.",
                "Swipe through interactive topic cards with glowing visuals.",
                "Preview quiz difficulty, total questions, and time limit instantly."
            ],
            content: (
                <div className="bg-gradient-to-br from-[#FFB6D9] to-[#FF8FB3] rounded-3xl p-6 sm:p-8 shadow-2xl hover:rotate-1 transition-transform duration-300">
                    <div className="bg-white rounded-2xl p-4 mb-6 shadow-md flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-800">🔥 Trending Topics</h3>
                        <span className="text-sm text-gray-500">BattleIQ</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {["General Knowledge", "Computer Science", "Sports"].map((topic, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 text-center shadow hover:shadow-lg transition">
                                <div className="bg-gradient-to-br from-pink-100 to-pink-200 h-20 mb-3 rounded-lg"></div>
                                <p className="text-sm font-semibold text-gray-800">{topic}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "Battle with Friends in Real-Time",
            points: [
                "Join multiplayer quiz battles and test your skills against others.",
                "Watch your opponent’s progress live and race to the finish!",
                "Play daily challenges and earn XP to climb the leaderboard."
            ],
            content: (
                <div className="bg-gradient-to-br from-[#A8D5E2] to-[#8BC6DB] rounded-3xl p-6 sm:p-8 shadow-2xl hover:rotate-1 transition-transform duration-300">
                    <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg flex items-center justify-between">
                        <h3 className="text-gray-800 font-semibold">⚔️ Live Battle Arena</h3>
                        <span className="text-sm text-gray-600">2 Players</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {["Player One", "Player Two"].map((name, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 text-center shadow-md">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-16 rounded-lg mb-2"></div>
                                <p className="font-semibold text-gray-800">{name}</p>
                                <p className="text-xs text-gray-500">{i === 0 ? "You 🧠" : "Opponent ⚡"}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "Track Your Performance & Rank",
            points: [
                "View quiz history and analyze your score improvements.",
                "Track your rank in the global leaderboard.",
                "Unlock badges and achievements as you level up."
            ],
            content: (
                <div className="bg-gradient-to-br from-[#FFD4A3] to-[#FFC285] rounded-3xl p-6 sm:p-8 shadow-2xl hover:rotate-1 transition-transform duration-300">
                    <div className="bg-white rounded-2xl p-4 mb-6 shadow-md">
                        <h3 className="text-gray-800 font-semibold text-lg">🏆 Leaderboard</h3>
                    </div>

                    <div className="space-y-3">
                        {[
                            { name: "You", score: 980, rank: "#1", color: "bg-yellow-200" },
                            { name: "Arjun", score: 850, rank: "#2", color: "bg-gray-200" },
                            { name: "Priya", score: 810, rank: "#3", color: "bg-orange-200" },
                        ].map((player, i) => (
                            <div key={i} className={`flex justify-between items-center bg-white rounded-xl p-4 shadow ${player.color}`}>
                                <p className="font-semibold text-gray-800">{player.rank} {player.name}</p>
                                <span className="font-bold text-gray-700">{player.score} pts</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    ];

    return <Timeline data={timelineData} />;
};

export default TimelinePage;
