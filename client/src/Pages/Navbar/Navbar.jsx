import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Zap,
    Target,
    Trophy,
    Award,
    Brain,
    Cpu,
    BarChart3,
    LineChart,
    Lightbulb,
    BookOpen,
    Video,
    BadgeCheck,
    Calendar,
    Star,
    Globe,
    Users,
    MessageSquare,
    UserPlus,
    Sword,
    Heart,
    Flag,
    PenTool,
    Briefcase,
    Handshake,
    Mail,
    Clock,
    ChevronDown,
    Menu,
    ChevronRight,
    X,
} from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileSubMenu, setMobileSubMenu] = useState(null);
    const dropdownRef = useRef(null);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setMobileSubMenu(null);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleDropdown = (dropdown) =>
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

    // Close mobile menu when clicking a link
    const handleMobileLinkClick = () => {
        setIsMenuOpen(false);
        setMobileSubMenu(null);
    };

    // ===================== Dropdown Menus =====================
    const dropdownMenus = {
        quests: {
            title: "Quests & Challenges",
            sections: [
                {
                    header: "Daily Challenges",
                    icon: Calendar,
                    items: [
                        { name: "Daily Quiz", icon: Target, desc: "Test yourself every day", href: "/daily-quiz" },
                        { name: "Time Trials", icon: Clock, desc: "Beat the clock in quizzes", href: "/time-trials" },
                        { name: "Weekly Tournament", icon: Trophy, desc: "Compete for leaderboard glory", href: "/weekly-tournament" },
                    ],
                },
                {
                    header: "Special Events",
                    icon: Star,
                    items: [
                        { name: "Seasonal Battles", icon: Zap, desc: "Limited-time quiz events", href: "/seasonal-battles" },
                        { name: "Global Tournaments", icon: Globe, desc: "Challenge players worldwide", href: "/global-tournaments" },
                    ],
                },
            ],
        },

        learningHub: {
            title: "Learning Hub",
            sections: [
                {
                    header: "AI Tools",
                    icon: Brain,
                    items: [
                        { name: "AI Quiz Generator", icon: Cpu, desc: "Create quizzes instantly", href: "/ai-generator" },
                        { name: "Performance Insights", icon: BarChart3, desc: "Analyze your results", href: "/performance" },
                        { name: "Skill Builder", icon: Lightbulb, desc: "Get AI suggestions to improve", href: "/skill-builder" },
                    ],
                },
                {
                    header: "Resources",
                    icon: BookOpen,
                    items: [
                        { name: "Quiz Library", icon: BookOpen, desc: "Thousands of ready quizzes", href: "/quiz-library" },
                        { name: "Tutorials", icon: Video, desc: "Step-by-step guides", href: "/tutorials" },
                        { name: "Certifications", icon: BadgeCheck, desc: "Earn official certificates", href: "/certifications" },
                    ],
                },
            ],
        },

        community: {
            title: "Community",
            sections: [
                {
                    header: "Connect & Share",
                    icon: Users,
                    items: [
                        { name: "Forums", icon: MessageSquare, desc: "Join discussions with other learners", href: "/forums" },
                        { name: "Friends & Teams", icon: UserPlus, desc: "Team up for group battles", href: "/teams" },
                        { name: "Events & Meetups", icon: Calendar, desc: "Participate in online & offline events", href: "/events" },
                    ],
                },
                {
                    header: "Showcase",
                    icon: Trophy,
                    items: [
                        { name: "Leaderboards", icon: Trophy, desc: "See top players globally", href: "/leaderboard" },
                        { name: "Achievements", icon: Award, desc: "View badges and accomplishments", href: "/achievements" },
                    ],
                },
            ],
        },
    };


    const navLinks = [
        { name: "Features", href: "/features" },
        { name: "Success Stories", href: "/stories" },
    ];

    // ===================== JSX =====================
    return (
        <nav className="sticky top-0 z-50 bg-[#3B132A] text-[#F3EFDA] backdrop-blur-sm border-b border-[#F3EFDA]/20 shadow-xl">
            <div className="max-w-[95%] xl:max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-18">
                    {/* ===== Logo ===== */}
                    <Link to="/" onClick={handleMobileLinkClick}>
                        <h1 className="text-xl sm:text-2xl font-bold tracking-wide hover:text-[#F3EFDA]/90 transition-colors duration-200">
                            BattleIQ 🔥
                        </h1>
                    </Link>

                    {/* ===== Desktop Menu ===== */}
                    <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
                        {Object.entries(dropdownMenus).map(([key, menu]) => (
                            <div key={key} className="relative">
                                <button
                                    onMouseEnter={() => setActiveDropdown(key)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                    onClick={() => handleDropdown(key)}
                                    className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-[#F3EFDA]/80 hover:text-[#F3EFDA] hover:bg-[#F3EFDA]/10 transition-all duration-200"
                                >
                                    <span>{menu.title}</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === key ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {/* ===== Dropdown Panel ===== */}
                                {activeDropdown === key && (
                                    <div
                                        onMouseEnter={() => setActiveDropdown(key)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        className={`absolute left-0 mt-2 p-4 rounded-lg bg-[#F3EFDA] text-[#3B132A] shadow-2xl border border-[#3B132A]/10 overflow-y-auto max-h-[75vh] animate-fadeIn ${menu.sections.length === 3
                                            ? "w-[700px]"
                                            : menu.sections.length === 2
                                                ? "w-[500px]"
                                                : "w-[300px]"
                                            }`}
                                        style={{
                                            animation: 'fadeIn 0.2s ease-out'
                                        }}
                                    >
                                        <div
                                            className={`grid gap-6 ${menu.sections.length === 3
                                                ? "grid-cols-3"
                                                : menu.sections.length === 2
                                                    ? "grid-cols-2"
                                                    : "grid-cols-1"
                                                }`}
                                        >
                                            {menu.sections.map((section, i) => {
                                                const HeaderIcon = section.icon;
                                                return (
                                                    <div key={i}>
                                                        <div className="flex items-center gap-2 mb-2 border-b border-[#3B132A]/20 pb-1">
                                                            <HeaderIcon className="w-4 h-4 text-[#3B132A]/60" />
                                                            <h3 className="text-sm font-bold">
                                                                {section.header}
                                                            </h3>
                                                        </div>
                                                        <ul className="space-y-1">
                                                            {section.items.map((item, idx) => {
                                                                const ItemIcon = item.icon;
                                                                return (
                                                                    <li key={idx}>
                                                                        <Link
                                                                            to={item.href}
                                                                            className="flex items-start gap-2 px-2 py-1.5 rounded-md hover:bg-[#3B132A]/10 transition-colors duration-150 group"
                                                                        >
                                                                            <ItemIcon className="w-4 h-4 mt-0.5 text-[#3B132A]/50 group-hover:text-[#3B132A] transition-colors duration-150" />
                                                                            <div>
                                                                                <p className="text-xs font-semibold group-hover:text-[#3B132A] transition-colors duration-150">
                                                                                    {item.name}
                                                                                </p>
                                                                                <p className="text-[10px] text-[#3B132A]/70 leading-tight">
                                                                                    {item.desc}
                                                                                </p>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Regular Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-[#F3EFDA]/80 hover:text-[#F3EFDA] px-3 py-2 rounded-md text-sm font-medium hover:bg-[#F3EFDA]/10 transition-all duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* ===== Desktop Buttons ===== */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link to="/login">
                            <button className="border border-[#F3EFDA] text-[#F3EFDA] px-4 py-2 rounded-lg text-sm hover:bg-[#F3EFDA]/10 transition-all duration-200">
                                Sign In
                            </button>
                        </Link>

                        <Link to="/register">
                            <button className="bg-[#F3EFDA] text-[#3B132A] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#F3EFDA]/90 hover:shadow-lg transition-all duration-200">
                                Get Started
                            </button>
                        </Link>
                    </div>


                    {/* ===== Mobile Menu Button ===== */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden bg-[#F3EFDA]/10 p-2 rounded-md hover:bg-[#F3EFDA]/20 transition-all duration-200"
                    >
                        {isMenuOpen ? <X className="transition-transform duration-200" /> : <Menu className="transition-transform duration-200" />}
                    </button>
                </div>
            </div>

            {/* ===== Mobile Menu ===== */}
            <div
                className={`lg:hidden bg-[#3B132A] border-t border-[#F3EFDA]/20 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 py-3 space-y-2 max-h-[calc(85vh-120px)] overflow-y-auto">
                    {Object.entries(dropdownMenus).map(([key, menu]) => (
                        <div key={key}>
                            {/* Dropdown toggle button */}
                            <button
                                onClick={() =>
                                    setMobileSubMenu(mobileSubMenu === key ? null : key)
                                }
                                className="w-full flex justify-between items-center text-[#F3EFDA]/90 px-3 py-2 rounded-md hover:bg-[#F3EFDA]/10 text-sm font-medium transition-all duration-200"
                            >
                                <span>{menu.title}</span>
                                <ChevronRight
                                    className={`w-4 h-4 transition-transform duration-200 ${mobileSubMenu === key ? "rotate-90" : ""
                                        }`}
                                />
                            </button>

                            {/* Dropdown content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSubMenu === key ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="pl-5 space-y-2 pt-2">
                                    {menu.sections.map((section, i) => (
                                        <div key={i}>
                                            <p className="flex items-center gap-2 text-[#F3EFDA] font-semibold text-xs mt-2">
                                                <section.icon className="w-3 h-3" /> {section.header}
                                            </p>
                                            <div className="pl-4 space-y-1">
                                                {section.items.map((item, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={item.href}
                                                        onClick={handleMobileLinkClick}
                                                        className="block text-[#F3EFDA]/70 hover:text-[#F3EFDA] text-xs py-1 transition-colors duration-150"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Regular nav links */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={handleMobileLinkClick}
                            className="block text-[#F3EFDA]/80 hover:text-[#F3EFDA] px-3 py-2 rounded-md text-sm hover:bg-[#F3EFDA]/10 transition-all duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Sign In / Get Started */}
                <div className="px-4 py-3 border-t border-[#F3EFDA]/20">
                    <Link to="/login" onClick={handleMobileLinkClick}>
                        <button className="w-full border border-[#F3EFDA] text-[#F3EFDA] py-2 rounded-md text-sm hover:bg-[#F3EFDA]/10 transition-all duration-200 mb-3">
                            Sign In
                        </button>
                    </Link>

                    <Link to="/register" onClick={handleMobileLinkClick}>
                        <button className="w-full bg-[#F3EFDA] text-[#3B132A] py-2 rounded-md text-sm font-semibold hover:bg-[#F3EFDA]/90 transition-all duration-200">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;