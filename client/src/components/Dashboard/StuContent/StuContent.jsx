import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trophy, BarChart3, BookOpen, Award } from "lucide-react";

const AnimatedCounter = ({ value, duration = 1000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = value / (duration / 20);
        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                start = value;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 20);

        return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count}</span>;
};

const StuContent = () => {
    const [stats, setStats] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(`${API_URL}/user/stats`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setStats(response.data.stats);
            } catch (error) {
                console.error("Failed to load stats:", error);
            }
        };

        fetchStats();
    }, []);

    if (!stats) {
        return <div>Loading stats...</div>;
    }

    const statCards = [
        { label: "Quizzes Completed", value: stats.quizzesCompleted, color: "#3B82F6", icon: BookOpen },
        { label: "Leaderboard Rank", value: stats.leaderboardRank, color: "#F59E0B", icon: Trophy },
        { label: "Total Score", value: stats.totalScore, color: "#10B981", icon: BarChart3 },
        { label: "Achievements", value: stats.achievements, color: "#EF4444", icon: Award },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((stat, idx) => (
                <div
                    key={idx}
                    className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    style={{ backgroundColor: "#FFFFFF" }}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: stat.color + "20" }}
                        >
                            <stat.icon size={24} style={{ color: stat.color }} />
                        </div>
                    </div>
                    <p className="text-sm opacity-70 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">
                        <AnimatedCounter value={stat.value} />
                    </p>
                </div>
            ))}
        </div>
    );
};

export default StuContent;
