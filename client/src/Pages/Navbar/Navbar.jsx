import React, { useState, useRef, useEffect } from "react";
import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    BookOpen,
    Users,
    Trophy,
    Target,
    BarChart3,
    GraduationCap,
    School,
    Building2,
    Briefcase,
    Zap,
    Star,
    Award,
} from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileSubMenu, setMobileSubMenu] = useState(null);
    const dropdownRef = useRef(null);

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

    // ===================== Dropdown Menus =====================
    const dropdownMenus = {
        solutions: {
            title: "Solutions",
            sections: [
                {
                    header: "For Educators",
                    icon: GraduationCap,
                    items: [
                        { name: "Teachers Dashboard", icon: BookOpen, desc: "Manage classes and assignments", href: "/teacher-dashboard" },
                        { name: "Create Quizzes", icon: Target, desc: "Build custom assessments", href: "/create-quiz" },
                        { name: "Track Progress", icon: BarChart3, desc: "Monitor student performance", href: "/track-progress" },
                        { name: "Lesson Plans", icon: BookOpen, desc: "Curriculum resources", href: "/lesson-plans" },
                    ],
                },
                {
                    header: "For Administrators",
                    icon: Building2,
                    items: [
                        { name: "District Dashboard", icon: School, desc: "School-wide analytics", href: "/district-dashboard" },
                        { name: "Manage Schools", icon: Building2, desc: "Multi-school oversight", href: "/manage-schools" },
                        { name: "Reports & Insights", icon: BarChart3, desc: "Data-driven decisions", href: "/reports" },
                        { name: "Professional Development", icon: Users, desc: "Teacher training", href: "/development" },
                    ],
                },
                {
                    header: "For Students",
                    icon: Users,
                    items: [
                        { name: "Practice Mode", icon: Target, desc: "Self-paced learning", href: "/practice-mode" },
                        { name: "Live Battles", icon: Zap, desc: "Real-time competitions", href: "/live-battles" },
                        { name: "Leaderboard", icon: Trophy, desc: "Global rankings", href: "/leaderboard" },
                        { name: "Achievements", icon: Award, desc: "Earn badges & rewards", href: "/achievements" },
                    ],
                },
            ],
        },
        resources: {
            title: "Resources",
            sections: [
                {
                    header: "Learning Materials",
                    icon: BookOpen,
                    items: [
                        { name: "Quiz Library", icon: BookOpen, desc: "10,000+ ready-made quizzes", href: "/quiz-library" },
                        { name: "Subject Collections", icon: Star, desc: "Organized by topic", href: "/subject-collections" },
                        { name: "Common Core Aligned", icon: Target, desc: "Standards-based content", href: "/common-core" },
                        { name: "International Curriculum", icon: GraduationCap, desc: "Global standards", href: "/international-curriculum" },
                    ],
                },
                {
                    header: "Support & Training",
                    icon: Users,
                    items: [
                        { name: "Getting Started", icon: Zap, desc: "Quick start guide", href: "/getting-started" },
                        { name: "Video Tutorials", icon: BookOpen, desc: "Step-by-step guides", href: "/tutorials" },
                        { name: "Help Center", icon: Users, desc: "FAQs & documentation", href: "/help-center" },
                        { name: "Contact Support", icon: Users, desc: "24/7 assistance", href: "/contact-support" },
                    ],
                },
            ],
        },
        pricing: {
            title: "Pricing",
            sections: [
                {
                    header: "Plans",
                    icon: Briefcase,
                    items: [
                        { name: "Individual Teacher", icon: Users, desc: "Free forever", href: "/pricing/teacher" },
                        { name: "School Plan", icon: School, desc: "For entire schools", href: "/pricing/school" },
                        { name: "District Plan", icon: Building2, desc: "Multi-school licensing", href: "/pricing/district" },
                        { name: "Enterprise", icon: Briefcase, desc: "Custom solutions", href: "/pricing/enterprise" },
                    ],
                },
            ],
        },
    };

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Success Stories", href: "#stories" },
    ];

    // ===================== JSX =====================
    return (
        <nav className="sticky top-0 z-50 bg-[#3B132A] text-[#F3EFDA] backdrop-blur-sm border-b border-[#F3EFDA]/20 shadow-xl">
            <div className="max-w-[95%] xl:max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-18">
                    {/* ===== Logo ===== */}
                    <h1 className="text-xl sm:text-2xl font-bold tracking-wide hover:text-[#F3EFDA]/90 transition-colors duration-200">
                        BattleIQ 🔥
                    </h1>

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
                                                                        <a
                                                                            href={item.href}
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
                                                                        </a>
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
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#F3EFDA]/80 hover:text-[#F3EFDA] px-3 py-2 rounded-md text-sm font-medium hover:bg-[#F3EFDA]/10 transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* ===== Desktop Buttons ===== */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button className="border border-[#F3EFDA] text-[#F3EFDA] px-4 py-2 rounded-lg text-sm hover:bg-[#F3EFDA]/10 transition-all duration-200">
                            Sign In
                        </button>
                        <button className="bg-[#F3EFDA] text-[#3B132A] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#F3EFDA]/90 hover:shadow-lg transition-all duration-200">
                            Get Started
                        </button>
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
                <div className="px-4 py-3 space-y-2">
                    {Object.entries(dropdownMenus).map(([key, menu]) => (
                        <div key={key}>
                            <button
                                onClick={() =>
                                    setMobileSubMenu(mobileSubMenu === key ? null : key)
                                }
                                className="w-full flex justify-between items-center text-[#F3EFDA]/90 px-3 py-2 rounded-md hover:bg-[#F3EFDA]/10 text-sm font-medium transition-all duration-200"
                            >
                                <span>{menu.title}</span>
                                <ChevronRight
                                    className={`w-4 h-4 transition-transform duration-200 ${mobileSubMenu === key ? "rotate-90" : ""}`}
                                />
                            </button>

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
                                                    <a
                                                        key={idx}
                                                        href={item.href}
                                                        className="block text-[#F3EFDA]/70 hover:text-[#F3EFDA] text-xs py-1 transition-colors duration-150"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-[#F3EFDA]/80 hover:text-[#F3EFDA] px-3 py-2 rounded-md text-sm hover:bg-[#F3EFDA]/10 transition-all duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Buttons */}
                <div className="px-4 py-3 border-t border-[#F3EFDA]/20 space-y-2">
                    <button className="w-full border border-[#F3EFDA] text-[#F3EFDA] py-2 rounded-md text-sm hover:bg-[#F3EFDA]/10 transition-all duration-200">
                        Sign In
                    </button>
                    <button className="w-full bg-[#F3EFDA] text-[#3B132A] py-2 rounded-md text-sm font-semibold hover:bg-[#F3EFDA]/90 transition-all duration-200">
                        Get Started
                    </button>
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