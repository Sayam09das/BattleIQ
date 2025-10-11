import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const PrivacyRating = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        // Animate percentage counter
        let current = 0;
        const target = 90;
        const increment = 2;
        const duration = 2000;
        const steps = target / increment;
        const stepDuration = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setPercentage(target);
                clearInterval(timer);
            } else {
                setPercentage(current);
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#3B132A] relative overflow-hidden flex items-center justify-center p-4 sm:p-8">
            <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-10px) rotate(12deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(243, 239, 218, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(243, 239, 218, 0.5);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out 0.3s both;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .button-hover {
          transition: all 0.3s ease;
        }

        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(243, 239, 218, 0.4);
        }

        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }

        .card-3d:hover {
          transform: rotateY(5deg) rotateX(5deg);
        }
      `}</style>

            {/* Simple Geometric Background */}
            <div className="absolute inset-0">
                {/* Large Circle - Top Left */}
                <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />

                {/* Large Circle - Bottom Right */}
                <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />
            </div>

            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
                {/* Left Content */}
                <div className={`flex-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#F3EFDA]">
                        Get verified student data protection
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl mb-8 text-[#F3EFDA]/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        We're committed to responsible technology that puts educator and student privacy first. With enterprise-grade security, comprehensive data protection, and signed agreements that ensure your information remains yours.
                    </p>

                    <button className="bg-[#F3EFDA] hover:bg-[#F3EFDA]/90 text-[#3B132A] font-semibold px-8 py-4 rounded-lg text-lg button-hover animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        Learn more
                    </button>
                </div>

                {/* Right Card */}
                <div className={`flex-1 flex items-center justify-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                    <div className="relative">
                        {/* Shield Icon */}
                        <div className="absolute -top-8 -right-8 animate-float z-20">
                            <div className="bg-[#F3EFDA] rounded-2xl p-4 shadow-2xl animate-glow">
                                <Shield className="w-8 h-8 text-[#3B132A]" />
                            </div>
                        </div>

                        {/* Main Card */}
                        <div className="bg-[#F3EFDA] rounded-3xl p-8 sm:p-12 shadow-2xl card-3d relative">
                            <div className="relative z-10">
                                <div className="text-center mb-6">
                                    <div className="text-7xl sm:text-8xl font-bold text-[#3B132A] mb-2 animate-scale-in">
                                        {percentage}%
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-bold text-[#3B132A]">
                                        Privacy Rating
                                    </div>
                                </div>

                                <div className="text-lg sm:text-xl text-[#3B132A]/80 mb-6 text-center">
                                    Ranked by Common Sense
                                </div>

                                {/* Verification Badge */}
                                <div className="flex items-center justify-center gap-4 animate-pulse-custom">
                                    <div className="bg-[#3B132A] rounded-full p-6 shadow-xl">
                                        <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#F3EFDA]" strokeWidth={3} />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs sm:text-sm text-[#3B132A]/70 font-semibold">common sense privacy</div>
                                        <div className="text-xl sm:text-2xl font-bold text-[#3B132A]">VERIFIED</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Glow Elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F3EFDA] rounded-full opacity-10 blur-2xl animate-pulse-custom"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F3EFDA] rounded-full opacity-10 blur-2xl animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyRating;