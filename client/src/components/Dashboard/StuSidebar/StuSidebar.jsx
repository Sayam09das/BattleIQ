import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Home,
    BookOpen,
    Trophy,
    BarChart3,
    Award,
    Bell,
    HelpCircle,
    MessageCircle,
    Calendar,
    X,
    Settings,
    LogOut,
} from "lucide-react";

const StuSidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const [activeTab, setActiveTab] = useState("dashboard");

    const sidebarItems = [
        { name: "Home / Dashboard", icon: Home, value: "dashboard", route: "/student-dashboard" },
        { name: "Quizzes", icon: BookOpen, value: "quizzes", route: "/quizzes" },
        { name: "Leaderboard", icon: Trophy, value: "leaderboard", route: "/leaderboard" },
        { name: "My Results", icon: BarChart3, value: "results", route: "/my-results" },
        { name: "Achievements", icon: Award, value: "achievements", route: "/achievements" },
        { name: "Friend Challenges", icon: Trophy, value: "friend-challenges", route: "/friend-challenges" },
        { name: "Recommended Quizzes", icon: BookOpen, value: "recommended-quizzes", route: "/recommended-quizzes" },
        { name: "Notifications", icon: Bell, value: "notifications", route: "/notifications", badge: 3 },
        { name: "Help & Support", icon: HelpCircle, value: "help", route: "/help" },
        { name: "Messages", icon: MessageCircle, value: "messages", route: "/messages", badge: 5 },
        { name: "Certificates", icon: Award, value: "certificates", route: "/certificates" },
        { name: "Events & Webinars", icon: Calendar, value: "events", route: "/events" },
    ];

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/logout`,
                {},
                { withCredentials: true }
            );

            console.log(response.data.message);
            alert("Logged out successfully!");
            window.location.href = "/login";
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Failed to log out. Try again.");
        }
    };


    return (
        <>
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full transition-transform duration-300 ease-in-out z-40
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    lg:translate-x-0 lg:static`}
                style={{ backgroundColor: "#3B132A", width: "16rem" }}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 flex items-center justify-between border-b border-[#F3EFDA30]">
                        <h1 className="text-xl font-bold" style={{ color: "#F3EFDA" }}>BattleIQ 🔥</h1>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden"
                            style={{ color: "#F3EFDA" }}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Scrollable Links */}
                    <nav
                        className="flex-1 overflow-y-auto px-6 py-4 space-y-2"
                        style={{ scrollbarWidth: "thin", scrollbarColor: "#F3EFDA40 transparent" }}
                    >
                        {sidebarItems.map((item) => (
                            <Link
                                key={item.value}
                                to={item.route}
                                onClick={() => setActiveTab(item.value)}
                                className={`group w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer`}
                                style={{
                                    backgroundColor: activeTab === item.value ? "#F3EFDA" : "transparent",
                                    color: activeTab === item.value ? "#3B132A" : "#F3EFDA",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon
                                        size={20}
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <span
                                        className={`text-sm font-medium transition-colors duration-300 ${activeTab === item.value
                                            ? "text-[#3B132A]"
                                            : "group-hover:text-[#F3EFDACC]"
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                                {item.badge && (
                                    <span
                                        className="px-2 py-1 text-xs font-bold rounded-full"
                                        style={{ backgroundColor: "#D2691E", color: "#F3EFDA" }}
                                    >
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Bottom Section */}
                    <div className="p-6 border-t flex flex-col gap-2" style={{ borderColor: "#F3EFDA30" }}>
                        <Link
                            to="/settings"
                            onClick={() => setActiveTab("settings")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#F3EFDA20]`}
                            style={{
                                backgroundColor: activeTab === "settings" ? "#F3EFDA" : "transparent",
                                color: activeTab === "settings" ? "#3B132A" : "#F3EFDA",
                            }}
                        >
                            <Settings size={20} />
                            <span className="text-sm font-medium">Settings</span>
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-red-500 hover:bg-opacity-20 cursor-pointer"
                            style={{ color: "#F3EFDA" }}
                        >
                            <LogOut size={20} />
                            <span className="text-sm font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay for Mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default StuSidebar;
