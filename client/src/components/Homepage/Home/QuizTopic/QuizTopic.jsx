import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { X, Play, Trophy, Clock, Brain, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Import quiz topics data
import quizTopics from "@/data/quizTopics.json";

const QuizTopic = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const handleQuizClick = (topic) => {
        setSelectedQuiz(topic);
    };

    const closeModal = () => {
        setSelectedQuiz(null);
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case "Easy": return "bg-green-500";
            case "Medium": return "bg-yellow-500";
            case "Hard": return "bg-red-500";
            default: return "bg-gray-500";
        }
    };

    return (
        <section className="py-16 sm:py-20 bg-[#3B132A] relative overflow-hidden">
            {/* Creative Geometric Background */}
            <div className="absolute inset-0">
                {/* Large Circle - Top Left */}
                <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />

                {/* Large Circle - Bottom Right */}
                <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />

                {/* Medium Circle - Top Right */}
                <div className="absolute top-40 right-20 sm:top-32 sm:right-40 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border-2 border-[#F3EFDA]/5" />

                {/* Medium Circle - Bottom Left */}
                <div className="absolute bottom-40 left-20 sm:bottom-32 sm:left-40 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border-2 border-[#F3EFDA]/5" />
            </div>

            <div className="w-full text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFDA] mb-4">
                    Quiz Topics
                </h2>
                <p className="text-[#F3EFDA]/70 mb-12 text-sm sm:text-base">
                    Choose your challenge and test your knowledge
                </p>

                {/* Swiper Navigation Buttons */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#F3EFDA]/20 hover:bg-[#F3EFDA]/40 p-2 rounded-full shadow-md"
                >
                    <ChevronLeft size={28} className="text-[#F3EFDA]" />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#F3EFDA]/20 hover:bg-[#F3EFDA]/40 p-2 rounded-full shadow-md"
                >
                    <ChevronRight size={28} className="text-[#F3EFDA]" />
                </button>
                <Swiper
                    modules={[Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 25,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full"
                >
                    {quizTopics.map((topic) => (
                        <SwiperSlide key={topic.id} className="!w-72 sm:!w-80">
                            <div
                                onClick={() => handleQuizClick(topic)}
                                className="bg-[#F3EFDA] rounded-xl shadow-lg shadow-[#F3EFDA]/20 overflow-hidden hover:shadow-2xl hover:shadow-[#F3EFDA]/40 transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 border-[#F3EFDA]/30"
                            >
                                <div className="relative">
                                    <img
                                        src={topic.image}
                                        alt={topic.title}
                                        className="w-full h-48 sm:h-56 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B132A]/80 to-transparent"></div>
                                    <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#3B132A] text-[#F3EFDA] text-base sm:text-lg font-bold px-5 py-2 rounded-lg shadow-lg">
                                        {topic.title}
                                    </span>
                                </div>
                                <p className="p-4 text-sm sm:text-base text-[#3B132A]/80 font-medium">
                                    {topic.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal - Split Design */}
            {selectedQuiz && (
                <div className="fixed inset-0 bg-[#3B132A]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-5xl w-full shadow-2xl shadow-[#F3EFDA]/30 transform animate-scale-in overflow-hidden flex flex-col md:flex-row max-h-[90vh]">

                        {/* Left Side - Content */}
                        <div className="flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl sm:text-4xl font-bold text-[#3B132A] mb-3">
                                        {selectedQuiz.title} Quiz
                                    </h3>
                                    <span className={`${getDifficultyColor(selectedQuiz.difficulty)} text-white text-sm font-semibold px-3 py-1 rounded-full inline-block`}>
                                        {selectedQuiz.difficulty}
                                    </span>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="bg-gray-200 text-[#3B132A] p-2 rounded-full hover:bg-gray-300 transition-all duration-300 hover:scale-110 cursor-pointer md:hidden"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <p className="text-[#3B132A]/70 text-base sm:text-lg mb-6 leading-relaxed">
                                {selectedQuiz.description}
                            </p>

                            {/* Features List */}
                            {selectedQuiz.features && selectedQuiz.features.length > 0 && (
                                <div className="space-y-3 mb-8">
                                    {selectedQuiz.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-[#3B132A]/80 text-sm sm:text-base">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Quiz Stats */}
                            <div className="grid grid-cols-3 gap-3 mb-6 bg-[#F3EFDA]/30 p-4 rounded-lg">
                                <div className="text-center">
                                    <Brain className="w-6 h-6 mx-auto mb-1 text-[#3B132A]" />
                                    <p className="text-xs text-[#3B132A]/60 uppercase">Questions</p>
                                    <p className="text-lg font-bold text-[#3B132A]">{selectedQuiz.questions || 20}</p>
                                </div>
                                <div className="text-center">
                                    <Clock className="w-6 h-6 mx-auto mb-1 text-[#3B132A]" />
                                    <p className="text-xs text-[#3B132A]/60 uppercase">Duration</p>
                                    <p className="text-lg font-bold text-[#3B132A]">{selectedQuiz.duration || '10 mins'}</p>
                                </div>
                                <div className="text-center">
                                    <Trophy className="w-6 h-6 mx-auto mb-1 text-[#3B132A]" />
                                    <p className="text-xs text-[#3B132A]/60 uppercase">Points</p>
                                    <p className="text-lg font-bold text-[#3B132A]">{(selectedQuiz.questions || 20) * 10}</p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button className="w-full bg-[#FF1493] text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-[#FF1493]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF1493]/50 cursor-pointer flex items-center justify-center gap-2">
                                <Play size={20} />
                                Start Quiz Now
                            </button>
                        </div>

                        {/* Right Side - Visual Preview */}
                        <div className="md:w-2/5 bg-gradient-to-br from-[#A8D5E2] to-[#95C7D9] p-6 relative hidden md:flex flex-col justify-center items-center">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 bg-white text-[#3B132A] p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 cursor-pointer shadow-md"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Preview */}
                            <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-6 w-full max-w-xs transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src={selectedQuiz.image}
                                    alt={selectedQuiz.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 bg-white">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Preview</div>
                                    <div className="font-bold text-[#3B132A] text-lg">{selectedQuiz.title}</div>
                                    <div className="text-sm text-gray-600 mt-1">Ready to challenge yourself?</div>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                                <div className="bg-white/90 backdrop-blur rounded-lg p-3 text-center shadow-md">
                                    <div className="text-2xl font-bold text-[#FF1493]">{selectedQuiz.questions || 20}</div>
                                    <div className="text-xs text-gray-600">Total Questions</div>
                                </div>
                                <div className="bg-white/90 backdrop-blur rounded-lg p-3 text-center shadow-md">
                                    <div className="text-2xl font-bold text-[#3B132A]">{(selectedQuiz.questions || 20) * 10}</div>
                                    <div className="text-xs text-gray-600">Max Points</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scale-in {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }
            `}</style>
        </section>
    );
};

export default QuizTopic;