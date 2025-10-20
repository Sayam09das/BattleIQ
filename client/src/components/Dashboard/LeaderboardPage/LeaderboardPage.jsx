import React, { useState } from "react";
import SampleData from "../../../data/SampleLeaderboard.json";
import {
    Trophy,
    Medal,
    Award,
    Crown,
    Star,
    TrendingUp,
    TrendingDown,
    Minus,
    ChevronLeft,
    ChevronRight,
    Search,
    Filter
} from "lucide-react";

const LeaderboardPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRank, setFilterRank] = useState("all");
    const usersPerPage = 10;

    const leaderboardData = SampleData;

    const badges = {
        legendary: {
            name: "Legendary",
            icon: Crown,
            color: "#FFD700",
            gradient: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
            textColor: "#3B132A",
            description: "Top 3 Elite Warriors"
        },
        grandmaster: {
            name: "Grandmaster",
            icon: Trophy,
            color: "#C0C0C0",
            gradient: "linear-gradient(135deg, #E8E8E8 0%, #A8A8A8 100%)",
            textColor: "#3B132A",
            description: "Rank 4-6 Masters"
        },
        master: {
            name: "Master",
            icon: Medal,
            color: "#CD7F32",
            gradient: "linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)",
            textColor: "#F3EFDA",
            description: "Rank 7-10 Experts"
        },
        elite: {
            name: "Elite",
            icon: Award,
            color: "#9370DB",
            gradient: "linear-gradient(135deg, #9370DB 0%, #6A5ACD 100%)",
            textColor: "#F3EFDA",
            description: "Rank 11-15 Champions"
        },
        pro: {
            name: "Pro",
            icon: Star,
            color: "#4169E1",
            gradient: "linear-gradient(135deg, #4169E1 0%, #1E90FF 100%)",
            textColor: "#F3EFDA",
            description: "Rank 16+ Warriors"
        }
    };

    const getBadge = (rank) => {
        if (rank <= 3) return "legendary";
        if (rank <= 6) return "grandmaster";
        if (rank <= 10) return "master";
        if (rank <= 15) return "elite";
        return "pro";
    };

    const filteredData = leaderboardData.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Determine the badge for this user (use existing badge or fallback to rank)
        const userBadge = (user.badge || getBadge(user.rank)).toLowerCase();

        const matchesFilter = filterRank === "all" || userBadge === filterRank.toLowerCase();

        return matchesSearch && matchesFilter;
    });


    const totalPages = Math.ceil(filteredData.length / usersPerPage);
    const paginatedUsers = filteredData.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );

    const getChangeIcon = (change) => {
        if (change === "up") return <TrendingUp size={16} className="text-green-600" />;
        if (change === "down") return <TrendingDown size={16} className="text-red-600" />;
        return <Minus size={16} className="text-gray-600" />;
    };

    // Pagination sliding window
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="min-h-screen p-6" style={{ backgroundColor: "#F3EFDA" }}>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2" style={{ color: "#3B132A" }}>🏆 Global Leaderboard</h1>
                <p className="text-lg opacity-70" style={{ color: "#3B132A" }}>Compete with the best players worldwide</p>
            </div>

            {/* Badge Legend */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {Object.entries(badges).map(([key, badge]) => (
                    <div
                        key={key}
                        className="p-4 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all"
                        style={{ background: badge.gradient }}
                        onClick={() => setFilterRank(filterRank === key ? "all" : key)}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <badge.icon size={20} style={{ color: badge.textColor }} />
                            <span className="font-bold text-sm" style={{ color: badge.textColor }}>{badge.name}</span>
                        </div>
                        <p className="text-xs opacity-80" style={{ color: badge.textColor }}>{badge.description}</p>
                    </div>
                ))}
            </div>

            {/* Search, Filter and Reset */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Search Input */}
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search players..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-50"
                        style={{ backgroundColor: "white", color: "#3B132A", borderColor: "#3B132A40" }}
                    />
                </div>

                {/* Filter Button */}
                <button
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all"
                    style={{
                        backgroundColor: filterRank !== "all" ? "#3B132A" : "white",
                        color: filterRank !== "all" ? "#F3EFDA" : "#3B132A",
                        border: "2px solid #3B132A"
                    }}
                    onClick={() => setFilterRank("all")}
                >
                    <Filter size={20} />
                    {filterRank === "all" ? "All Ranks" : `Filter: ${badges[filterRank].name}`}
                </button>

                {/* Reset Data Button */}
                <button
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all bg-red-600 text-white hover:bg-red-700"
                    onClick={() => {
                        setSearchTerm("");   // Reset search input
                        setFilterRank("all"); // Reset filter
                        setCurrentPage(1);    // Reset pagination to first page
                    }}
                >
                    Reset Data
                </button>
            </div>


            {/* Leaderboard Cards */}
            <div className="space-y-4 mb-6">
                {paginatedUsers.map(user => {
                    const badgeKey = (user.badge?.toLowerCase()) || getBadge(user.rank);
                    const badge = badges[badgeKey] || badges.pro;
                    const BadgeIcon = badge.icon;
                    const isTopThree = user.rank <= 3;

                    return (
                        <div
                            key={user.rank}
                            className="rounded-xl shadow-lg transform hover:scale-102 transition-all overflow-hidden"
                            style={{ backgroundColor: "white" }}
                        >
                            <div className="flex items-center p-4 md:p-6 gap-4">
                                {/* Rank Badge */}
                                <div
                                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg ${isTopThree ? "animate-pulse" : ""}`}
                                    style={{ background: badge.gradient, color: badge.textColor }}
                                >
                                    {user.rank}
                                </div>

                                {/* Avatar */}
                                <div
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg border-4 shadow-md"
                                    style={{ backgroundColor: "#3B132A", color: "#F3EFDA", borderColor: badge.color }}
                                >
                                    {user.avatar}
                                </div>

                                {/* User Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-lg md:text-xl" style={{ color: "#3B132A" }}>
                                            {user.name}
                                        </h3>
                                        {getChangeIcon(user.change)}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <div
                                            className="flex items-center gap-1 px-3 py-1 rounded-full font-semibold"
                                            style={{ background: badge.gradient, color: badge.textColor }}
                                        >
                                            <BadgeIcon size={14} />
                                            <span>{badge.name}</span>
                                        </div>
                                        <span className="opacity-70" style={{ color: "#3B132A" }}>{user.wins} Wins</span>
                                        <span className="opacity-70" style={{ color: "#3B132A" }}>{user.accuracy}% Accuracy</span>
                                    </div>
                                </div>

                                {/* Score */}
                                <div className="text-right">
                                    <p className="text-sm opacity-70 mb-1" style={{ color: "#3B132A" }}>Score</p>
                                    <p className="text-2xl md:text-3xl font-bold" style={{ color: "#3B132A" }}>
                                        {user.score.toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2" style={{ backgroundColor: "#F3EFDA" }}>
                                <div className="h-full transition-all" style={{ width: `${user.accuracy}%`, background: badge.gradient }} />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
                <button
                    className="p-2 rounded-lg font-semibold transition-all disabled:opacity-40"
                    style={{
                        backgroundColor: currentPage === 1 ? "white" : "#3B132A",
                        color: currentPage === 1 ? "#3B132A" : "#F3EFDA",
                        border: "2px solid #3B132A"
                    }}
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Sliding page numbers */}
                <div className="flex gap-2">
                    {startPage > 1 && (
                        <>
                            <button onClick={() => setCurrentPage(1)} className="w-10 h-10 rounded-lg font-semibold border-2 border-[#3B132A]">1</button>
                            <span className="flex items-center px-2" style={{ color: "#3B132A" }}>...</span>
                        </>
                    )}
                    {pageNumbers.map(num => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`w-10 h-10 rounded-lg font-semibold transition-all ${currentPage === num ? "bg-[#3B132A] text-[#F3EFDA]" : "bg-white text-[#3B132A] border-2 border-[#3B132A]"}`}
                        >
                            {num}
                        </button>
                    ))}
                    {endPage < totalPages && (
                        <>
                            <span className="flex items-center px-2" style={{ color: "#3B132A" }}>...</span>
                            <button onClick={() => setCurrentPage(totalPages)} className="w-10 h-10 rounded-lg font-semibold border-2 border-[#3B132A]">{totalPages}</button>
                        </>
                    )}
                </div>

                <button
                    className="p-2 rounded-lg font-semibold transition-all disabled:opacity-40"
                    style={{
                        backgroundColor: currentPage === totalPages ? "white" : "#3B132A",
                        color: currentPage === totalPages ? "#3B132A" : "#F3EFDA",
                        border: "2px solid #3B132A"
                    }}
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default LeaderboardPage;
