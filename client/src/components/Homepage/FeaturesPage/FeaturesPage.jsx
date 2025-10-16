import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Clock, Trophy, BarChart3, Palette, Brain, Lock, MessageSquare, Target, Users, Sparkles } from 'lucide-react';

// Features Data
const featuresData = [
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Live Quiz Battles",
        description: "Challenge players in real-time quiz duels and climb the ranks.",
        color: "from-amber-200 to-yellow-300"
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: "Timer & Scoring System",
        description: "Answer before time runs out and earn extra points for speed.",
        color: "from-orange-200 to-amber-200"
    },
    {
        icon: <Trophy className="w-8 h-8" />,
        title: "Dynamic Leaderboard",
        description: "Track top scorers in real-time with socket-powered updates.",
        color: "from-yellow-200 to-orange-200"
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Results Analytics",
        description: "Review your accuracy, streaks, and category-wise performance.",
        color: "from-amber-100 to-yellow-200"
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Dark Theme Interface",
        description: "Smooth, modern dark mode with glowing accent effects.",
        color: "from-orange-100 to-amber-100"
    },
    {
        icon: <Brain className="w-8 h-8" />,
        title: "Diverse Quiz Topics",
        description: "Choose from tech, science, GK, sports, and more.",
        color: "from-yellow-100 to-amber-200"
    },
    {
        icon: <Lock className="w-8 h-8" />,
        title: "Secure Login",
        description: "All accounts protected with JWT authentication.",
        color: "from-amber-200 to-orange-100"
    },
    {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Player Reviews",
        description: "Read feedback from other challengers worldwide.",
        color: "from-yellow-200 to-amber-100"
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: "Precision Tracking",
        description: "Monitor your progress with detailed performance metrics.",
        color: "from-orange-200 to-yellow-200"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Multiplayer Modes",
        description: "Join tournaments or battle friends in private matches.",
        color: "from-amber-100 to-orange-200"
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Achievement System",
        description: "Unlock badges and rewards as you master different categories.",
        color: "from-yellow-100 to-orange-100"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Instant Feedback",
        description: "Get real-time explanations for correct and incorrect answers.",
        color: "from-amber-200 to-yellow-100"
    }
];

// Feature Card Component
const FeatureCard = ({ icon, title, description, color }) => {
    return (
        <div
            className="group relative rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            style={{
                backgroundColor: '#3B132A',
                borderColor: '#F3EFDA33',
            }}
        >
            <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                style={{ color: '#3B132A' }}
            >
                {icon}
            </div>
            <h3
                className="text-xl font-bold mb-2 transition-all duration-300"
                style={{ color: '#F3EFDA' }}
            >
                {title}
            </h3>
            <p
                className="text-sm leading-relaxed opacity-80"
                style={{ color: '#F3EFDA' }}
            >
                {description}
            </p>
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-300 pointer-events-none"
                style={{ backgroundColor: '#F3EFDA' }}
            ></div>
            <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 pointer-events-none"
                style={{ backgroundColor: '#F3EFDA' }}
            ></div>
        </div>
    );
};

// Main Features Section Component
const FeaturesPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(featuresData.length / itemsPerPage);

    const getCurrentPageFeatures = () => {
        const startIndex = currentPage * itemsPerPage;
        return featuresData.slice(startIndex, startIndex + itemsPerPage);
    };

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <div
            className="min-h-screen py-20 px-4"
            style={{
                background: `linear-gradient(to bottom, #3B132A, #2a0d1e, #1a0812)`
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                        <div
                            className="w-96 h-96 rounded-full blur-3xl"
                            style={{ backgroundColor: '#F3EFDA' }}
                        ></div>
                    </div>
                    <div className="relative">
                        <h1
                            className="text-5xl md:text-6xl font-black mb-4"
                            style={{ color: '#F3EFDA' }}
                        >
                            Why Choose BattleIQ?
                        </h1>
                        <p
                            className="text-2xl md:text-3xl font-semibold mb-8 opacity-70"
                            style={{ color: '#F3EFDA' }}
                        >
                            Compete. Learn. Conquer.
                        </p>
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div
                                className="h-1 w-20 rounded-full opacity-50"
                                style={{ background: `linear-gradient(to right, transparent, #F3EFDA)` }}
                            ></div>
                            <div
                                className="h-2 w-2 rounded-full animate-ping"
                                style={{ backgroundColor: '#F3EFDA' }}
                            ></div>
                            <div
                                className="h-1 w-20 rounded-full opacity-50"
                                style={{ background: `linear-gradient(to left, transparent, #F3EFDA)` }}
                            ></div>
                        </div>
                        <p
                            className="max-w-2xl mx-auto opacity-60"
                            style={{ color: '#F3EFDA' }}
                        >
                            Experience the ultimate quiz platform with cutting-edge features designed to make learning competitive, engaging, and rewarding.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {getCurrentPageFeatures().map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                color={feature.color}
                            />
                        ))}
                    </div>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-center gap-6 mb-12">
                    <button
                        onClick={prevPage}
                        className="group flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 border-2"
                        style={{
                            backgroundColor: '#F3EFDA',
                            color: '#3B132A',
                            borderColor: '#F3EFDA',
                        }}
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Previous
                    </button>

                    <div className="flex items-center gap-3">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    backgroundColor: currentPage === index ? '#F3EFDA' : '#F3EFDA33',
                                    width: currentPage === index ? '32px' : '12px',
                                    height: '12px',
                                }}
                            ></button>
                        ))}
                    </div>

                    <button
                        onClick={nextPage}
                        className="group flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 border-2"
                        style={{
                            backgroundColor: '#F3EFDA',
                            color: '#3B132A',
                            borderColor: '#F3EFDA',
                        }}
                    >
                        Next
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Page Indicator */}
                <div className="text-center mb-12">
                    <p
                        className="text-sm opacity-60"
                        style={{ color: '#F3EFDA' }}
                    >
                        Page <span className="font-bold opacity-100">{currentPage + 1}</span> of{' '}
                        <span className="font-bold opacity-100">{totalPages}</span>
                    </p>
                </div>

                {/* CTA Banner */}
                <div
                    className="relative overflow-hidden rounded-3xl p-12 text-center border-2"
                    style={{
                        backgroundColor: '#2a0d1e',
                        borderColor: '#F3EFDA33',
                    }}
                >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0YzRUZEQSIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
                    <div className="relative">
                        <div
                            className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full animate-bounce"
                            style={{ backgroundColor: '#F3EFDA20' }}
                        >
                            <Trophy className="w-10 h-10" style={{ color: '#F3EFDA' }} />
                        </div>
                        <h2
                            className="text-3xl md:text-4xl font-black mb-4"
                            style={{ color: '#F3EFDA' }}
                        >
                            Ready to Dominate the Leaderboard?
                        </h2>
                        <p
                            className="mb-8 max-w-2xl mx-auto opacity-70"
                            style={{ color: '#F3EFDA' }}
                        >
                            Join thousands of players worldwide and prove your knowledge in epic quiz battles!
                        </p>
                        <button
                            className="group px-10 py-4 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-110 inline-flex items-center gap-3 border-2"
                            style={{
                                backgroundColor: '#F3EFDA',
                                color: '#3B132A',
                                borderColor: '#F3EFDA',
                                boxShadow: '0 10px 40px rgba(243, 239, 218, 0.3)',
                            }}
                        >
                            Start Your First Quiz
                            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { label: "Active Players", value: "50K+", icon: <Users className="w-6 h-6" /> },
                        { label: "Quizzes Taken", value: "1M+", icon: <Target className="w-6 h-6" /> },
                        { label: "Categories", value: "25+", icon: <Brain className="w-6 h-6" /> },
                        { label: "Avg Rating", value: "4.9★", icon: <Trophy className="w-6 h-6" /> }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 border-2"
                            style={{
                                backgroundColor: '#3B132A',
                                borderColor: '#F3EFDA22',
                            }}
                        >
                            <div className="flex justify-center mb-3" style={{ color: '#F3EFDA' }}>
                                {stat.icon}
                            </div>
                            <div
                                className="text-3xl font-black mb-1"
                                style={{ color: '#F3EFDA' }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="text-sm font-medium opacity-60"
                                style={{ color: '#F3EFDA' }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage;