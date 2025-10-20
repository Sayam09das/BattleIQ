import React, { useState, useEffect } from "react";
import {
    House,
    BookOpen,
    Trophy,
    BarChart3,
    Award,
    User,
    LogOut,
    Settings as SettingsIcon,
    ChevronLeft,
    ChevronRight,
    Bell,
    MessageCircle,
    Calendar,
    HelpCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sidebar Link Component
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
            {item.badge && sidebarOpen && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                </span>
            )}
        </div>
    );
};

const StuNavbar = () => {
    const [activeSection, setActiveSection] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(true); // desktop expand/collapse
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(true); // mobile visible by default
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const navigate = useNavigate();

    // Update isMobile on resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sidebarItems = [
        { name: "Home / Dashboard", icon: House, value: "dashboard", route: "/student-dashboard" },
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

    const bottomItem = { name: "Settings", icon: SettingsIcon, value: "settings", route: "/settings" };

    const handleLogout = () => alert("You have been logged out!");

    return (
        <div className="flex h-screen bg-[#F3EFDA] dark:bg-neutral-900">
            {/* Sidebar */}
            <div
                className={`
                    fixed md:relative h-full bg-white dark:bg-neutral-800 border-r border-[#3B132A]/10 dark:border-neutral-700 flex flex-col justify-between transition-all duration-300 ease-in-out
                    ${isMobile ? (mobileSidebarOpen ? "left-0" : "-left-64") : "left-0"}
                    ${sidebarOpen ? "w-64 md:w-72" : "w-20 md:w-20"}
                    z-20
                `}
            >
                {/* Toggle Button - both mobile & desktop */}
                <button
                    onClick={() => {
                        if (isMobile) {
                            setMobileSidebarOpen(!mobileSidebarOpen);
                        } else {
                            setSidebarOpen(!sidebarOpen);
                        }
                    }}
                    className={`
                        absolute top-8 w-6 h-6 rounded-full bg-[#3B132A] dark:bg-neutral-700 flex items-center justify-center border-2 border-[#F3EFDA] dark:border-neutral-900 hover:scale-110 transition-transform z-30
                        ${isMobile
                            ? mobileSidebarOpen
                                ? "-right-3"
                                : "-right-8"
                            : "-right-3"}
                    `}
                >
                    {isMobile
                        ? mobileSidebarOpen
                            ? <ChevronLeft className="w-4 h-4 text-[#F3EFDA]" />
                            : <ChevronRight className="w-4 h-4 text-[#F3EFDA]" />
                        : sidebarOpen
                            ? <ChevronLeft className="w-4 h-4 text-[#F3EFDA]" />
                            : <ChevronRight className="w-4 h-4 text-[#F3EFDA]" />}
                </button>

                {/* Top Section */}
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex items-center gap-2 px-2 pt-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#3B132A] dark:bg-neutral-700 flex items-center justify-center shrink-0">
                            <BookOpen className="w-5 h-5 text-[#F3EFDA]" />
                        </div>
                        <span
                            className={`text-lg font-bold text-[#3B132A] dark:text-neutral-200 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                                }`}
                        >
                            BattleIQ 🔥
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
                                    navigate(item.route);
                                    if (isMobile) setMobileSidebarOpen(false); // auto close on mobile
                                }}
                                sidebarOpen={sidebarOpen}
                            />
                        ))}
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col gap-2 p-4">
                    <div className="h-px bg-[#3B132A]/20 dark:bg-neutral-700 mb-2" />

                    {/* Profile */}
                    <div
                        onClick={() => {
                            setActiveSection("profile");
                            navigate("/profile");
                            if (isMobile) setMobileSidebarOpen(false);
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
                            navigate(bottomItem.route);
                            if (isMobile) setMobileSidebarOpen(false);
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

            {/* Mobile overlay */}
            {isMobile && mobileSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-10 md:hidden"
                    onClick={() => setMobileSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default StuNavbar;
