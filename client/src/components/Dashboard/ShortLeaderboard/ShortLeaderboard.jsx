import React from "react";
import { Users } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Make sure react-router-dom is installed

const ShortLeaderboard = () => {
    const leaderboardData = [
        { rank: 1, name: "Sarah Johnson", score: 2850, avatar: "SJ", change: "up" },
        { rank: 2, name: "Michael Chen", score: 2720, avatar: "MC", change: "up" },
        { rank: 3, name: "You", score: 2680, avatar: "ME", change: "same", isCurrentUser: true },
        { rank: 4, name: "Emma Wilson", score: 2540, avatar: "EW", change: "down" },
        { rank: 5, name: "David Kumar", score: 2490, avatar: "DK", change: "up" },
        { rank: 6, name: "Lisa Park", score: 2450, avatar: "LP", change: "down" },
        { rank: 7, name: "James Miller", score: 2380, avatar: "JM", change: "up" },
        { rank: 8, name: "Ana Garcia", score: 2320, avatar: "AG", change: "same" },
        { rank: 9, name: "Robert Lee", score: 2280, avatar: "RL", change: "up" },
        { rank: 10, name: "Sophia Brown", score: 2250, avatar: "SB", change: "down" },
        { rank: 11, name: "Extra User", score: 2200, avatar: "EU", change: "up" },
    ];

    const topUsers = leaderboardData.slice(0, 10); // ✅ Only top 10

    const getRankBg = (rank) => {
        if (rank === 1) return "#FFD700"; // gold
        if (rank === 2) return "#C0C0C0"; // silver
        if (rank === 3) return "#CD7F32"; // bronze
        return "#3B132A"; // default
    };

    const getRankColor = (rank) => (rank > 3 ? "#F3EFDA" : "#3B132A");

    return (
        <div className="w-full">
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: "white" }}>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Global Leaderboard</h3>
                    <Users size={20} className="opacity-70" />
                </div>

                {/* Leaderboard list */}
                <div className="space-y-2 max-h-96 overflow-auto">
                    {topUsers.map((user) => (
                        <div
                            key={user.rank}
                            className={`flex items-center justify-between p-3 rounded-lg transition-all ${user.isCurrentUser ? "shadow-md" : ""
                                }`}
                            style={{
                                backgroundColor: user.isCurrentUser ? "#8B451320" : "#F3EFDA50",
                                border: user.isCurrentUser ? "2px solid #8B4513" : "none",
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-8 h-8 flex items-center justify-center font-bold rounded-full"
                                    style={{
                                        backgroundColor: getRankBg(user.rank),
                                        color: getRankColor(user.rank),
                                    }}
                                >
                                    {user.rank}
                                </div>
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                                    style={{ backgroundColor: "#3B132A", color: "#F3EFDA" }}
                                >
                                    {user.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold">{user.name}</p>
                                    <p className="text-xs opacity-70">{user.score} points</p>
                                </div>
                            </div>
                            <div
                                className={`px-2 py-1 rounded text-xs font-bold ${user.change === "up"
                                        ? "bg-green-100 text-green-700"
                                        : user.change === "down"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                            >
                                {user.change === "up" ? "↑" : user.change === "down" ? "↓" : "—"}
                            </div>
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <div className="mt-4 text-center">
                    <Link
                        to="/leaderboard"
                        className="text-sm font-semibold text-[#3B132A] hover:text-[#8B4513] transition-colors"
                    >
                        See More &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShortLeaderboard;
