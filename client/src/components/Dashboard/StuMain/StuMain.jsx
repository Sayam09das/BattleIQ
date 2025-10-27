import React, { useState, useEffect } from "react";
import { Menu, Flame } from "lucide-react";
import { WordRotate } from "@/components/ui/word-rotate";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

import StuContent from "../StuContent/StuContent";
import Stucharts from "../Stucharts/Stucharts";
import StuSkills from "../StuSkills/StuSkills";
import StuActivity from "../StuActivity/StuActivity";
import ShortLeaderboard from "../ShortLeaderboard/ShortLeaderboard";
import AchievementsEvents from "../AchievementsEvents/AchievementsEvents";
import StreakTracker from "../StreakTracker/StreakTracker";

// ✅ User Avatar Component
const UserAvatar = ({ name, email, imgSrc }) => {
    const getInitials = () =>
        name
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();

    return (
        <Link to="/profile" className="relative group">
            {imgSrc ? (
                <img
                    src={imgSrc}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover shadow-lg"
                />
            ) : (
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    style={{ backgroundColor: "#3B132A", color: "#F3EFDA" }}
                >
                    {getInitials()}
                </div>
            )}

            {/* Tooltip with email */}
            <span className="absolute top-2/50 -translate-y-1/2 -left-24 text-xs bg-[#3B132A] text-[#F3EFDA] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {email}
            </span>
        </Link>
    );
};

const StuMain = ({ sidebarOpen, setSidebarOpen }) => {
    const [user, setUser] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    const animatedTexts = [
        "Ready to crush your learning goals today?",
        "Time to ace your next quiz!",
        "Keep pushing your limits!",
        "Your learning adventure awaits!",
    ];

    // ✅ Fetch user details from backend
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${API_URL}/protected/profile`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    withCredentials: true,
                });

                setUser(response.data.user);
                toast.success("Profile loaded successfully!");
            } catch (error) {
                console.error("Failed to fetch user:", error);
                toast.error("Failed to load user data.");
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="flex-1">
            <Toaster position="top-center" reverseOrder={false} />

            {/* Top Bar */}
            <div
                className="sticky top-0 z-10 p-6 border-b backdrop-blur-sm flex items-center justify-between"
                style={{ backgroundColor: "#F3EFDAF0", borderColor: "#3B132A20" }}
            >
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    {/* Hamburger for Mobile */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 rounded-md lg:hidden"
                        style={{ color: "#3B132A" }}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-bold">
                            {getGreeting()},{user ? ` ${user.name.split(" ")[0]}! 👋` : " 👋"}
                        </h2>
                        <WordRotate
                            words={animatedTexts}
                            duration={3000}
                            className="text-sm opacity-70"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/streaks"
                        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer"
                        style={{ backgroundColor: "#8B451320", textDecoration: "none" }}
                    >
                        <Flame size={18} style={{ color: "#FF4500" }} />
                        <span className="font-bold text-sm">7 Day Streak!</span>
                    </Link>

                    {/* ✅ Dynamic User Avatar */}
                    {user ? (
                        <UserAvatar
                            name={user.name}
                            email={user.email}
                            imgSrc={user.profileImage || null}
                        />
                    ) : (
                        <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                    )}
                </div>
            </div>

            {/* Main Dashboard Sections */}
            <div className="p-6 space-y-6">
                <StuContent />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Stucharts />
                    <StuSkills />
                </div>
                <StuActivity />
                <ShortLeaderboard />
                <AchievementsEvents />
                <StreakTracker />
            </div>
        </div>
    );
};

export default StuMain;
