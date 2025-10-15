import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState('next');

    const testimonials = [
        {
            quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop",
        },
        {
            quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
        },
        {
            quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
        },
        {
            quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop",
        },
        {
            quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3540&auto=format&fit=crop",
        },
    ];

    const nextTestimonial = () => {
        if (!isAnimating) {
            setDirection('next');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                setIsAnimating(false);
            }, 500);
        }
    };

    const prevTestimonial = () => {
        if (!isAnimating) {
            setDirection('prev');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                setIsAnimating(false);
            }, 500);
        }
    };

    const goToTestimonial = (index) => {
        if (!isAnimating && index !== currentIndex) {
            setDirection(index > currentIndex ? 'next' : 'prev');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
            }, 500);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="min-h-screen bg-[#F3EFDA] py-12 sm:py-20 px-4 relative overflow-hidden">
            <style>{`
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(100px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-100px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideOutLeft {
                    from { opacity: 1; transform: translateX(0); }
                    to { opacity: 0; transform: translateX(-100px); }
                }
                @keyframes slideOutRight {
                    from { opacity: 1; transform: translateX(0); }
                    to { opacity: 0; transform: translateX(100px); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-slide-in-right { animation: slideInRight 0.5s ease-out; }
                .animate-slide-in-left { animation: slideInLeft 0.5s ease-out; }
                .animate-slide-out-left { animation: slideOutLeft 0.5s ease-out; }
                .animate-slide-out-right { animation: slideOutRight 0.5s ease-out; }
                .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>

            {/* Background Circles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full border-2 border-[#3B132A]/8" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border-2 border-[#3B132A]/8" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-[#3B132A] animate-fade-in-up">
                    What Our Clients Say
                </h2>

                {/* Main Content */}
                <div className="relative">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#3B132A]/10 rounded-3xl blur-2xl transform scale-95" />
                                <img
                                    key={`img-${currentIndex}`}
                                    src={testimonials[currentIndex].src}
                                    alt={testimonials[currentIndex].name}
                                    className={`relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl ${isAnimating
                                        ? direction === 'next' ? 'animate-slide-out-left' : 'animate-slide-out-right'
                                        : direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                                        }`}
                                />
                                <div className="absolute -top-6 -right-6 animate-float">
                                    <div className="bg-[#3B132A] rounded-2xl p-4 shadow-xl">
                                        <Quote className="w-8 h-8 text-[#F3EFDA]" fill="#F3EFDA" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <div
                                key={`content-${currentIndex}`}
                                className={
                                    isAnimating
                                        ? direction === 'next' ? 'animate-slide-out-left' : 'animate-slide-out-right'
                                        : direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                                }
                            >
                                <p className="text-lg sm:text-xl lg:text-2xl text-[#3B132A] mb-8 leading-relaxed italic">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div className="mb-8">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[#3B132A] mb-2">
                                        {testimonials[currentIndex].name}
                                    </h3>
                                    <p className="text-base sm:text-lg text-[#3B132A]/70">
                                        {testimonials[currentIndex].designation}
                                    </p>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <button
                                    onClick={prevTestimonial}
                                    disabled={isAnimating}
                                    className="bg-[#3B132A] hover:bg-[#3B132A]/90 text-[#F3EFDA] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                <div className="flex gap-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToTestimonial(index)}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                                ? 'w-8 h-3 bg-[#3B132A]'
                                                : 'w-3 h-3 bg-[#3B132A]/30 hover:bg-[#3B132A]/50'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextTestimonial}
                                    disabled={isAnimating}
                                    className="bg-[#3B132A] hover:bg-[#3B132A]/90 text-[#F3EFDA] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Preview */}
                <div className="mt-10 sm:mt-16 flex justify-center gap-3 sm:gap-4 overflow-x-auto overflow-y-visible pb-6 pt-2">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            aria-label={`View ${testimonial.name}'s testimonial`}
                            className={`flex-shrink-0 transition-all duration-300 rounded-2xl border-4 
        ${index === currentIndex
                                    ? 'border-[#3B132A] scale-110 shadow-lg shadow-[#3B132A]/40'
                                    : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                                }`}
                            style={{
                                overflow: 'visible',  // <-- ensures border or glow is visible
                            }}
                        >
                            <img
                                src={testimonial.src}
                                alt={testimonial.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                            />
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Testimonials;