import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import BattleIq from "@/components/Video/BattleIq.mp4";
const VideoSection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#3B132A] to-[#2A0E1F] overflow-hidden">
            {/* Simple Geometric Background */}
            <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />
                <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFDA] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        See How It Works
                    </motion.h2>

                    <motion.p
                        className="text-[#F3EFDA]/70 text-base sm:text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Discover how our platform transforms learning into an engaging and interactive experience
                    </motion.p>
                </div>

                {/* Video Container */}
                <motion.div
                    className="relative max-w-5xl w-full mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <button
                        type="button"
                        aria-label="Play video"
                        className="group relative w-full cursor-pointer border-0 bg-transparent p-0"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=1920&h=1080&fit=crop"
                            alt="Platform introduction video"
                            width={1920}
                            height={1080}
                            className="w-full min-h-[300px] sm:min-h-[400px] aspect-video object-cover rounded-2xl shadow-2xl transition-all duration-200 ease-out group-hover:brightness-[0.8]"
                        />
                        <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                            <div className="bg-[#FF1493]/10 flex size-28 items-center justify-center rounded-full backdrop-blur-md">
                                <div className="relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-[#FF1493]/30 to-[#FF1493] shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
                                    <Play
                                        className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                                        style={{
                                            filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </button>
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                                setIsVideoOpen(false);
                            }
                        }}
                        onClick={() => setIsVideoOpen(false)}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md hover:bg-neutral-900/70 transition-colors cursor-pointer"
                            >
                                <X className="size-5" />
                            </motion.button>
                            <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                                <iframe
                                    src={BattleIq}
                                    title="Platform introduction video"
                                    className="size-full rounded-2xl"
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VideoSection;