import React, { useEffect, useState } from "react";
import { Trophy, BarChart3, BookOpen, Award } from "lucide-react"; // Example icons

const stats = [
    { label: "Quizzes Completed", value: 24, change: "+5%", color: "#3B82F6", icon: BookOpen },
    { label: "Leaderboard Rank", value: 2, change: "+1", color: "#F59E0B", icon: Trophy },
    { label: "Total Score", value: 980, change: "+15%", color: "#10B981", icon: BarChart3 },
    { label: "Achievements", value: 12, change: "+2", color: "#EF4444", icon: Award },
];

// Counter component
const AnimatedCounter = ({ value, duration = 1000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = value / (duration / 20); // update every 20ms
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
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
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
                        <span
                            className="text-xs font-bold px-2 py-1 rounded"
                            style={{ backgroundColor: "#10B98120", color: "#10B981" }}
                        >
                            {stat.change}
                        </span>
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
