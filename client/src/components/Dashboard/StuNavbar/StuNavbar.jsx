import React, { useState } from "react";
import {
    Target,
    BookOpen,
    Trophy,
    BarChart3,
    Award,
    User,
    LogOut,
    Settings as SettingsIcon,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ For navigation

// Sidebar link component
const SidebarLink = ({ item, isActive, onClick, sidebarOpen }) => {
    const Icon = item.icon;
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-all ${isActive
                    ? "bg-[#3B132A]/10 dark:bg-neutral-700 font-semibold"
                    : "hover:bg-[#3B132A]/5 dark:hover:bg-neutral-700/50"
                }`}
        >
            <Icon className="w-5 h-5 text-[#3B132A] dark:text-neutral-200 shrink-0" />
            <span
                className={`text-sm text-[#3B132A] dark:text-neutral-200 whitespace-nowrap transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                    }`}
            >
                {item.name}
            </span>
        </div>
    );
};

const StuNavbar = () => {
    const [activeSection, setActiveSection] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    // Sidebar links (excluding profile)
    const sidebarItems = [
        { name: "Home / Dashboard", icon: Target, value: "dashboard", route: "/student-dashboard" },
        { name: "Quizzes", icon: BookOpen, value: "quizzes", route: "/quizzes" },
        { name: "Leaderboard", icon: Trophy, value: "leaderboard", route: "/leaderboard" },
        { name: "My Results", icon: BarChart3, value: "results", route: "/my-results" },
        { name: "Achievements", icon: Award, value: "achievements", route: "/achievements" },
        { name: "Friend Challenges", icon: Trophy, value: "friend-challenges", route: "/friend-challenges" },
        { name: "Recommended Quizzes", icon: BookOpen, value: "recommended-quizzes", route: "/recommended-quizzes" },
    ];

    const bottomItem = {
        name: "Settings",
        icon: SettingsIcon,
        value: "settings",
        route: "/settings",
    };

    const handleLogout = () => {
        alert("You have been logged out!");
    };

    return (
        <div className="flex h-screen bg-[#F3EFDA] dark:bg-neutral-900">
            {/* Sidebar */}
            <div
                className="h-full px-4 py-4 bg-white dark:bg-neutral-800 border-r border-[#3B132A]/10 dark:border-neutral-700 flex flex-col justify-between relative transition-all duration-300 ease-in-out"
                style={{
                    width: sidebarOpen ? "280px" : "80px",
                }}
            >
                {/* Toggle Button */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="absolute -right-3 top-8 w-6 h-6 rounded-full bg-[#3B132A] dark:bg-neutral-700 flex items-center justify-center z-20 border-2 border-[#F3EFDA] dark:border-neutral-900 hover:scale-110 transition-transform"
                >
                    {sidebarOpen ? (
                        <ChevronLeft className="w-4 h-4 text-[#F3EFDA]" />
                    ) : (
                        <ChevronRight className="w-4 h-4 text-[#F3EFDA]" />
                    )}
                </button>

                {/* Top Section */}
                <div className="flex flex-col gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2 px-2 pt-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#3B132A] dark:bg-neutral-700 flex items-center justify-center shrink-0">
                            <BookOpen className="w-5 h-5 text-[#F3EFDA]" />
                        </div>
                        <span
                            className={`text-lg font-bold text-[#3B132A] dark:text-neutral-200 whitespace-pre transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                                }`}
                        >
                            QuizMaster
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1">
                        {sidebarItems.map((item, idx) => (
                            <SidebarLink
                                key={idx}
                                item={item}
                                isActive={activeSection === item.value}
                                onClick={() => {
                                    setActiveSection(item.value);
                                    navigate(item.route); // ✅ Navigate to route
                                }}
                                sidebarOpen={sidebarOpen}
                            />
                        ))}
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col gap-2">
                    <div className="h-px bg-[#3B132A]/20 dark:bg-neutral-700 mb-2" />

                    {/* Profile Section (clickable) */}
                    <div
                        onClick={() => {
                            setActiveSection("profile");
                            navigate("/profile"); // ✅ Navigate to Profile
                        }}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-[#3B132A]/5 dark:hover:bg-neutral-700/50 transition-all cursor-pointer"
                    >
                        <div className="w-8 h-8 rounded-full bg-[#3B132A] dark:bg-neutral-700 flex items-center justify-center shrink-0">
                            <User className="w-4 h-4 text-[#F3EFDA]" />
                        </div>
                        <span
                            className={`text-sm font-medium text-[#3B132A] dark:text-neutral-200 whitespace-nowrap transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                                }`}
                        >
                            John Doe
                        </span>
                    </div>

                    {/* Settings */}
                    <SidebarLink
                        item={bottomItem}
                        isActive={activeSection === bottomItem.value}
                        onClick={() => {
                            setActiveSection(bottomItem.value);
                            navigate(bottomItem.route); // ✅ Navigate to Settings
                        }}
                        sidebarOpen={sidebarOpen}
                    />

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all text-red-600 dark:text-red-400 cursor-pointer mt-2"
                    >
                        <LogOut className="w-5 h-5 shrink-0" />
                        <span
                            className={`text-sm whitespace-nowrap transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                                }`}
                        >
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StuNavbar;
