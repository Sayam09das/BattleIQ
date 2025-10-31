import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flame, Trophy, Target, Calendar, Award, Zap } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const StreakTracker = () => {
    const [hoveredDay, setHoveredDay] = useState(null);
    const [solvedDays, setSolvedDays] = useState({});
    const [loading, setLoading] = useState(true);

    // ✅ Fetch streak data from backend
    const fetchStreak = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${API_URL}/user/streak`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setSolvedDays(res.data.streakData.solvedDays || {});
        } catch (error) {
            console.error("Error fetching streak", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStreak();
    }, []);

    // ❗ Show loader
    if (loading) return <p className="text-center p-4 font-semibold">Loading Streak...</p>;

    // ✅ Prepare calendar logic (from your old code)
    const today = new Date();
    const days = Array.from({ length: 84 }, (_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() - (83 - i));
        return d;
    });

    const getActivityLevel = (date) => {
        const dateString = date.toISOString().split("T")[0];
        const count = solvedDays[dateString] || 0;
        if (count === 0) return 0;
        if (count <= 2) return 1;
        if (count <= 4) return 2;
        if (count <= 6) return 3;
        return 4;
    };

    let currentStreak = 0;
    let bestStreak = 0;
    let streak = 0;
    let totalQuizzes = 0;
    let activeDays = 0;

    for (let i = 0; i < days.length; i++) {
        const level = getActivityLevel(days[i]);
        if (level > 0) {
            streak++;
            activeDays++;
            const dateString = days[i].toISOString().split("T")[0];
            totalQuizzes += solvedDays[dateString] || 0;
            bestStreak = Math.max(bestStreak, streak);
        } else {
            streak = 0;
        }
    }

    for (let i = days.length - 1; i >= 0; i--) {
        if (getActivityLevel(days[i]) > 0) currentStreak++;
        else break;
    }

    const getColor = (level) => {
        const colors = {
            0: "#3B132A20",
            1: "#DEB88760",
            2: "#D2691E80",
            3: "#8B4513B0",
            4: "#8B4513",
        };
        return colors[level] || colors[0];
    };

    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    const getMonthLabel = (weekIndex) => {
        const firstDay = weeks[weekIndex][0];
        if (firstDay.getDate() <= 7) {
            return firstDay.toLocaleDateString("en-US", { month: "short" });
        }
        return "";
    };

    const stats = [
        { icon: Flame, label: "Current Streak", value: `${currentStreak} days`, color: "#FF4500", bg: "#FF450020" },
        { icon: Trophy, label: "Best Streak", value: `${bestStreak} days`, color: "#FFD700", bg: "#FFD70020" },
        { icon: Target, label: "Total Quizzes", value: totalQuizzes, color: "#8B4513", bg: "#8B451320" },
        { icon: Calendar, label: "Active Days", value: activeDays, color: "#D2691E", bg: "#D2691E20" },
    ];

    const achievements = [
        { title: "Fire Starter", desc: "3 day streak", unlocked: currentStreak >= 3, icon: Flame },
        { title: "Weekly Warrior", desc: "7 day streak", unlocked: currentStreak >= 7, icon: Award },
        { title: "Streak Master", desc: "30 day streak", unlocked: bestStreak >= 30, icon: Trophy },
        { title: "Quiz Champion", desc: "100+ quizzes", unlocked: totalQuizzes >= 100, icon: Zap },
    ];

    return (
        <div className="min-h-screen p-6" style={{ backgroundColor: "#F3EFDA" }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 flex items-center gap-3" style={{ color: "#3B132A" }}>
                        <Flame size={40} style={{ color: "#FF4500" }} />
                        Streak Tracker
                    </h1>
                    <p className="text-lg opacity-70" style={{ color: "#3B132A" }}>
                        Keep your learning momentum going! 🚀
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                            style={{ backgroundColor: "white" }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: stat.bg }}
                                >
                                    <stat.icon size={24} style={{ color: stat.color }} />
                                </div>
                            </div>
                            <p className="text-sm opacity-70 mb-1" style={{ color: "#3B132A" }}>
                                {stat.label}
                            </p>
                            <p className="text-3xl font-bold" style={{ color: "#3B132A" }}>
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Main Calendar Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold" style={{ color: "#3B132A" }}>
                            Activity Calendar
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="text-sm opacity-70" style={{ color: "#3B132A" }}>Less</span>
                            {[0, 1, 2, 3, 4].map((level) => (
                                <div
                                    key={level}
                                    className="w-5 h-5 rounded"
                                    style={{ backgroundColor: getColor(level) }}
                                />
                            ))}
                            <span className="text-sm opacity-70" style={{ color: "#3B132A" }}>More</span>
                        </div>
                    </div>

                    {/* Month Labels */}
                    <div className="flex mb-2 ml-8">
                        {weeks.map((week, idx) => (
                            <div key={idx} className="flex-1 text-xs font-semibold" style={{ color: "#3B132A" }}>
                                {getMonthLabel(idx)}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="flex gap-1">
                        {/* Day labels */}
                        <div className="flex flex-col gap-1 justify-around mr-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                                <div key={idx} className="h-3 text-xs opacity-70 flex items-center" style={{ color: "#3B132A" }}>
                                    {idx % 2 === 1 ? day : ''}
                                </div>
                            ))}
                        </div>

                        {/* Weeks */}
                        {weeks.map((week, weekIdx) => (
                            <div key={weekIdx} className="flex flex-col gap-1">
                                {week.map((day, dayIdx) => {
                                    const level = getActivityLevel(day);
                                    const dateString = day.toISOString().split("T")[0];
                                    const quizCount = solvedDays[dateString] || 0;
                                    const isToday = day.toDateString() === today.toDateString();

                                    return (
                                        <div
                                            key={dayIdx}
                                            onMouseEnter={() => setHoveredDay({ day, quizCount })}
                                            onMouseLeave={() => setHoveredDay(null)}
                                            className={`w-3 h-3 rounded cursor-pointer transition-all hover:scale-125 ${isToday ? "ring-2 ring-offset-1" : ""
                                                }`}
                                            style={{
                                                backgroundColor: getColor(level),
                                                ringColor: "#8B4513",
                                            }}
                                            title={`${day.toDateString()}: ${quizCount} quizzes`}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Hover Tooltip */}
                    {hoveredDay && (
                        <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: "#F3EFDA" }}>
                            <p className="text-sm font-semibold" style={{ color: "#3B132A" }}>
                                {hoveredDay.day.toDateString()}
                            </p>
                            <p className="text-sm opacity-70" style={{ color: "#3B132A" }}>
                                {hoveredDay.quizCount > 0
                                    ? `${hoveredDay.quizCount} quiz${hoveredDay.quizCount > 1 ? "zes" : ""} completed`
                                    : "No activity"}
                            </p>
                        </div>
                    )}
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6" style={{ color: "#3B132A" }}>
                        🏆 Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {achievements.map((achievement, idx) => (
                            <div
                                key={idx}
                                className={`p-6 rounded-xl transition-all ${achievement.unlocked
                                    ? "shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    : "opacity-40"
                                    }`}
                                style={{
                                    backgroundColor: achievement.unlocked ? "#8B451320" : "#F3EFDA",
                                }}
                            >
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${achievement.unlocked ? "" : "grayscale"
                                        }`}
                                    style={{
                                        backgroundColor: achievement.unlocked ? "#8B4513" : "#3B132A40",
                                    }}
                                >
                                    <achievement.icon
                                        size={24}
                                        style={{ color: achievement.unlocked ? "#F3EFDA" : "#3B132A" }}
                                    />
                                </div>
                                <h3 className="font-bold mb-1" style={{ color: "#3B132A" }}>
                                    {achievement.title}
                                </h3>
                                <p className="text-xs opacity-70" style={{ color: "#3B132A" }}>
                                    {achievement.desc}
                                </p>
                                {achievement.unlocked && (
                                    <p className="text-xs font-bold mt-2" style={{ color: "#10B981" }}>
                                        ✓ Unlocked
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Motivational Message */}
                <div className="mt-8 p-6 rounded-xl text-center" style={{ backgroundColor: "#8B451320" }}>
                    <p className="text-xl font-bold mb-2" style={{ color: "#3B132A" }}>
                        {currentStreak > 0
                            ? `🔥 Amazing! You're on a ${currentStreak}-day streak!`
                            : "Start your streak today! Complete a quiz to begin."}
                    </p>
                    <p className="opacity-70" style={{ color: "#3B132A" }}>
                        {currentStreak >= 7
                            ? "You're unstoppable! Keep it up! 💪"
                            : currentStreak >= 3
                                ? "Great momentum! Can you reach 7 days?"
                                : "Every day counts. Let's build your habit! 📚"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StreakTracker;