import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
    const footerLinks = {
        column1: [
            { label: 'School & District', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'For Business', href: '#' },
            { label: 'About us', href: '#' },
            { label: 'Webinars', href: '#' },
            { label: 'Help Center', href: '#' }
        ],
        column2: [
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Careers', href: '/careers' },
            { label: 'Press Kit', href: '/press-kit' },
            { label: 'Affiliate Program', href: '/affiliate' }
        ]

    }

    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
        { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
        { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
        { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
    ]

    return (
        <footer className="relative bg-[#3B132A] text-[#F3EFDA] overflow-hidden">
            {/* Geometric Background Circles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border-2 border-[#F3EFDA]/8" />
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border-2 border-[#F3EFDA]/8" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                    {/* Logo and Accessibility */}
                    <div className="md:col-span-3">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-[#F3EFDA] mb-1">BattleIQ </h2>
                            <p className="text-[#F3EFDA]/70 text-sm">formerly Quizizz</p>
                        </div>

                        <button className="flex items-center gap-2 text-[#F3EFDA] hover:text-[#F3EFDA]/80 transition-colors">
                            <div className="w-10 h-10 bg-[#F3EFDA] rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#3B132A]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                </svg>
                            </div>
                            <span className="font-medium">Accessibility</span>
                        </button>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-3">
                        <ul className="space-y-3">
                            {footerLinks.column1.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-[#F3EFDA]/90 hover:text-[#F3EFDA] transition-colors text-base"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-3">
                        <ul className="space-y-3">
                            {footerLinks.column2.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-[#F3EFDA]/90 hover:text-[#F3EFDA] transition-colors text-base"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* App Store Buttons */}
                    <div className="md:col-span-3 space-y-4">
                        <a
                            href="#"
                            className="block bg-[#F3EFDA] hover:bg-[#FFFDF6] transition-colors rounded-lg p-3"
                        >
                            <div className="flex items-center gap-3">
                                <svg className="w-8 h-8 text-[#3B132A]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[#3B132A]/70 text-xs">GET IT ON</p>
                                    <p className="text-[#3B132A] font-semibold text-lg leading-tight">Google Play</p>
                                </div>
                            </div>
                        </a>

                        <a
                            href="#"
                            className="block bg-[#F3EFDA] hover:bg-[#FFFDF6] transition-colors rounded-lg p-3"
                        >
                            <div className="flex items-center gap-3">
                                <svg className="w-8 h-8 text-[#3B132A]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[#3B132A]/70 text-xs">Download on the</p>
                                    <p className="text-[#3B132A] font-semibold text-lg leading-tight">App Store</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#F3EFDA]/20 my-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-[#F3EFDA]/70 text-sm">
                        <p>2025 Quizizz Inc. <span className="italic">(DBA BattleIQ )</span></p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 bg-[#F3EFDA] hover:bg-[#FFFDF6] text-[#3B132A] rounded-full flex items-center justify-center transition-colors"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer