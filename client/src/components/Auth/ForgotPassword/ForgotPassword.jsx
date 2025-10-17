import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import { Link } from "react-router-dom";

const Toast = ({ message, type, onClose }) => (
    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
    >
        <span className="text-[#F3EFDA] font-medium">{message}</span>
        <button onClick={onClose} className="text-[#F3EFDA] hover:text-white text-xl">×</button>
    </motion.div>
);

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [toast, setToast] = useState(null);

    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, 50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, -50]);

    const showToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const handleSubmit = () => {
        if (!email) {
            showToast('Please enter your email address', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        showToast('Password reset link sent to your email!', 'success');
    };

    return (
        <div className="min-h-screen bg-[#3B132A] relative overflow-hidden flex items-center justify-center p-4">
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

            {/* Animated Geometric Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleLeft }}
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleRight }}
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20"
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${30 + i * 10}%`
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>

            {/* Forgot Password Form Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="bg-[#3B132A]/80 backdrop-blur-xl border-2 border-[#F3EFDA]/20 rounded-2xl p-8 shadow-2xl">
                    {/* Back Button */}
                    <button className="flex items-center gap-2 text-[#F3EFDA]/70 hover:text-[#F3EFDA] transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Login</span>
                    </button>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-block p-4 bg-[#F3EFDA]/10 rounded-full mb-4"
                        >
                            <Mail className="w-8 h-8 text-[#F3EFDA]" />
                        </motion.div>
                        <h1 className="text-3xl font-bold text-[#F3EFDA] mb-2">Forgot Password?</h1>
                        <p className="text-[#F3EFDA]/60">No worries, we'll send you reset instructions</p>
                    </div>

                    <div className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label className="block text-[#F3EFDA] text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg pl-12 pr-4 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/30 focus:outline-none focus:border-[#F3EFDA]/60 focus:shadow-lg focus:shadow-[#F3EFDA]/10 transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="button"
                            onClick={handleSubmit}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#F3EFDA] text-[#3B132A] font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#F3EFDA]/20 hover:shadow-xl hover:shadow-[#F3EFDA]/30 transition-all"
                        >
                            <Send className="w-5 h-5" />
                            Send Reset Link
                        </motion.button>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-[#F3EFDA]/60">
                            Remember your password?{" "}
                            <Link
                                to="/login"
                                className="text-[#F3EFDA] hover:underline font-medium cursor-pointer"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPassword;