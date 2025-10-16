import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

export const Timeline = ({ data }) => {
    const [visibleItems, setVisibleItems] = useState([]);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observers = itemRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleItems((prev) => [...new Set([...prev, index])]);
                        }
                    });
                },
                { threshold: 0.2 }
            );

            if (ref) observer.observe(ref);
            return observer;
        });

        return () => observers.forEach((observer) => observer.disconnect());
    }, []);

    return (
        <div className="w-full bg-gradient-to-b from-[#3B132A] to-[#2A0E1F] font-sans overflow-hidden relative">
            <style>{`
                .fade-slide-in { opacity: 0; transform: translateX(-30px); transition: all 0.7s ease; }
                .fade-slide-in.visible { opacity: 1; transform: translateX(0); }
                .fade-scale-in { opacity: 0; transform: scale(0.95); transition: all 0.7s ease; }
                .fade-scale-in.visible { opacity: 1; transform: scale(1); }
                .point-item { opacity: 0; transform: translateX(-20px); transition: all 0.5s ease; }
                .point-item.visible { opacity: 1; transform: translateX(0); }
                .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .card-hover:hover { transform: translateY(-5px) rotate(1deg); box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
            `}</style>

            {/* Background Circles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full border-2 border-[#F3EFDA]/10" />
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full border-2 border-[#F3EFDA]/10" />
            </div>

            <div className="relative max-w-7xl mx-auto py-16 sm:py-24 px-4 md:px-8 lg:px-10">
                {/* Timeline Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F3EFDA] mb-4">
                        How BattleIQ Works
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/70 max-w-2xl mx-auto">
                        Challenge yourself, compete with friends, and climb the ranks
                    </p>
                </div>

                {data.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24 lg:mb-32 relative"
                    >
                        {/* Timeline Dot */}
                        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                            <div className={`w-6 h-6 rounded-full bg-[#FF1493] border-4 border-[#2A0E1F] transition-all duration-500 ${visibleItems.includes(index) ? 'scale-100' : 'scale-0'}`} />
                        </div>

                        {/* Left Column - Text */}
                        <div className={`space-y-8 fade-slide-in ${visibleItems.includes(index) ? 'visible' : ''}`}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-5xl font-bold text-[#FF1493]">0{index + 1}</span>
                                <div className="h-1 w-16 bg-[#FF1493] rounded" />
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFDA] leading-tight">
                                {item.title}
                            </h2>

                            <div className="space-y-6">
                                {item.points.map((point, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex gap-4 items-start point-item ${visibleItems.includes(index) ? 'visible' : ''}`}
                                        style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF1493] flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                        </div>
                                        <p className="text-[#F3EFDA]/90 text-base sm:text-lg leading-relaxed">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Visual Content */}
                        <div className={`relative fade-scale-in ${visibleItems.includes(index) ? 'visible' : ''}`}>
                            {item.content}
                        </div>
                    </div>
                ))}

                {/* Timeline Line */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#F3EFDA]/20 to-transparent" />
            </div>
        </div>
    );
};

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
                <div className="bg-gradient-to-br from-[#FFB6D9] to-[#FF8FB3] rounded-3xl p-6 sm:p-8 shadow-2xl card-hover">
                    {/* Hero Image */}
                    <div className="bg-white rounded-2xl overflow-hidden mb-6 shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop"
                            alt="Quiz topics discovery"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-800">🔥 Trending Topics</h3>
                            <span className="text-sm text-gray-500 font-medium">BattleIQ</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { name: "General Knowledge", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&auto=format&fit=crop" },
                            { name: "Computer Science", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop" },
                            { name: "Sports", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&auto=format&fit=crop" }
                        ].map((topic, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                                <div className="h-20 bg-gradient-to-br from-pink-100 to-pink-200 relative overflow-hidden">
                                    <img src={topic.img} alt={topic.name} className="w-full h-full object-cover opacity-60" />
                                </div>
                                <p className="text-sm font-semibold text-gray-800 p-2 text-center">{topic.name}</p>
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
                "Watch your opponent's progress live and race to the finish!",
                "Play daily challenges and earn XP to climb the leaderboard."
            ],
            content: (
                <div className="bg-gradient-to-br from-[#A8D5E2] to-[#8BC6DB] rounded-3xl p-6 sm:p-8 shadow-2xl card-hover">
                    <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg flex items-center justify-between">
                        <h3 className="text-gray-800 font-semibold text-lg">⚔️ Live Battle Arena</h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">LIVE</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "Player One", label: "You 🧠", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop" },
                            { name: "Player Two", label: "Opponent ⚡", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop" }
                        ].map((player, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
                                <div className="h-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                                    <img src={player.img} alt={player.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-3 text-center">
                                    <p className="font-semibold text-gray-800">{player.name}</p>
                                    <p className="text-xs text-gray-500">{player.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 bg-white rounded-xl p-4 shadow-md">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Progress</span>
                            <span className="text-sm font-bold text-gray-800">7/10</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '70%' }} />
                        </div>
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
                <div className="bg-gradient-to-br from-[#FFD4A3] to-[#FFC285] rounded-3xl p-6 sm:p-8 shadow-2xl card-hover">
                    <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg flex items-center justify-between">
                        <h3 className="text-gray-800 font-semibold text-lg">🏆 Global Leaderboard</h3>
                        <span className="text-sm text-gray-500">Top Players</span>
                    </div>

                    <div className="space-y-3">
                        {[
                            { name: "You", score: 980, rank: "#1", color: "bg-gradient-to-r from-yellow-200 to-yellow-300", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop" },
                            { name: "Arjun", score: 850, rank: "#2", color: "bg-gradient-to-r from-gray-200 to-gray-300", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop" },
                            { name: "Priya", score: 810, rank: "#3", color: "bg-gradient-to-r from-orange-200 to-orange-300", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop" },
                        ].map((player, i) => (
                            <div key={i} className={`flex justify-between items-center bg-white rounded-xl p-4 shadow-md ${player.color} hover:scale-105 transition-transform`}>
                                <div className="flex items-center gap-3">
                                    <img src={player.img} alt={player.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
                                    <div>
                                        <p className="font-bold text-gray-800">{player.rank} {player.name}</p>
                                        <p className="text-xs text-gray-600">Level {10 - i * 2}</p>
                                    </div>
                                </div>
                                <span className="font-bold text-gray-800 text-lg">{player.score} pts</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-white rounded-xl p-4 shadow-md">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Your Progress</span>
                            <span className="text-xs text-gray-500">75% to next level</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden mt-2">
                            <div className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" style={{ width: '75%' }} />
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return <Timeline data={timelineData} />;
};

export default TimelinePage;