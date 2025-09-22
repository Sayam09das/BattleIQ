import React, { useState, useEffect } from "react";
import { Menu, X, LogOut, Trophy, BarChart3, BookOpen, Home } from "lucide-react";
import { AnimatedThemeToggler } from "../../components/ui/animated-theme-toggler";
import { cn } from "../../lib/utils";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName] = useState("Sayam Das");
    const [showLogoutMessage, setShowLogoutMessage] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, []);

    const toggleMenu = () => setIsMenuOpen((v) => !v);
    const toggleLogin = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
            setShowLogoutMessage(true);
            setTimeout(() => setShowLogoutMessage(false), 2500);
        } else {
            setIsLoggedIn(true);
            setShowLogoutMessage(false);
        }
    };
    const getUserInitials = (name) => name.split(" ").map((w) => w[0]).join("").toUpperCase();

    const navLinks = [
        { name: "Home", href: "#home", icon: Home },
        { name: "Quizzes", href: "#quizzes", icon: BookOpen },
        { name: "Leaderboard", href: "#leaderboard", icon: Trophy },
        { name: "My Results", href: "#results", icon: BarChart3 },
    ];

    return (
        <nav className={cn(
            "sticky top-0 z-50",
            "bg-white text-black dark:bg-black dark:text-white",
            "backdrop-blur-sm border-b border-black/10 dark:border-white/10 shadow-xl transition-colors duration-300"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold cursor-pointer transition-all duration-300">
                            BattleIQ 🔥
                        </h1>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "group flex items-center space-x-2 hover:text-gray-800 dark:hover:text-gray-50 px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-black/5 dark:hover:bg-white/10"
                                        )}
                                    >
                                        <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                                        <span>{link.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <div className="mr-4">
                        <AnimatedThemeToggler className={cn("size-10")} />
                    </div>

                    {/* User Section */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center">
                            {isLoggedIn ? (
                                <div className="flex items-center space-x-3">
                                    <div className="relative group">
                                        <div className="h-9 w-9 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-semibold text-sm hover:scale-110 transition-transform duration-200 cursor-pointer shadow-lg">
                                            {getUserInitials(userName)}
                                        </div>
                                        <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-white dark:border-black animate-pulse"></div>
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                            {userName}
                                        </div>
                                    </div>
                                    <span className="font-medium">{userName.split(" ")[0]}</span>
                                    <button
                                        onClick={toggleLogin}
                                        className="flex items-center space-x-2 hover:text-red-500 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-red-100 dark:hover:bg-red-500/10"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    {showLogoutMessage && (
                                        <div className="mr-3 px-3 py-1 bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 text-sm rounded-lg border border-yellow-500/30 animate-pulse">
                                            Please login again
                                        </div>
                                    )}
                                    <button
                                        onClick={toggleLogin}
                                        className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        Login
                                    </button>
                                    <button className="text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-black dark:border-white hover:border-gray-800 dark:hover:border-gray-100">
                                        Sign Up
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="bg-black/5 dark:bg-white/10 inline-flex items-center justify-center p-2 rounded-lg hover:text-black dark:hover:text-white focus:outline-none transition-all duration-200"
                        >
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute w-full bg-white dark:bg-black backdrop-blur-lg border-t border-black/10 dark:border-white/10 shadow-2xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "flex items-center space-x-3 hover:text-gray-800 dark:hover:text-gray-50 block px-3 py-2 rounded-lg text-base font-medium hover:bg-black/5 dark:hover:bg-white/10 transition"
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <IconComponent className="w-5 h-5" />
                                    <span>{link.name}</span>
                                </a>
                            );
                        })}
                    </div>
                    {/* Mobile User Section */}
                    <div className="pt-4 pb-3 border-t border-black/10 dark:border-white/10">
                        <div className="px-5">
                            {isLoggedIn ? (
                                <div className="flex items-center space-x-3">
                                    <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                                        {getUserInitials(userName)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-base font-medium leading-none">{userName}</div>
                                        <div className="text-sm font-medium leading-none text-gray-600 dark:text-gray-400 mt-1">john@example.com</div>
                                    </div>
                                    <button
                                        onClick={toggleLogin}
                                        className="ml-auto flex-shrink-0 bg-black/10 dark:bg-white/10 p-2 rounded-full text-black dark:text-white hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition"
                                    >
                                        <LogOut className="h-5 w-5" />
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {showLogoutMessage && (
                                        <div className="mb-3 px-3 py-2 bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 text-sm rounded-lg border border-yellow-500/30 text-center animate-pulse">
                                            Please login again
                                        </div>
                                    )}
                                    <button
                                        onClick={toggleLogin}
                                        className="w-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition"
                                    >
                                        Login
                                    </button>
                                    <button className="w-full text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-black dark:border-white hover:border-gray-800 dark:hover:border-gray-100">
                                        Sign Up
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
