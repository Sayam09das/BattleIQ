import React, { useState } from 'react';
import axios from 'axios';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

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

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [toast, setToast] = useState(null);
    const [errors, setErrors] = useState({});

    const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, 50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, -50]);

    const showToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) return showToast('Please enter your email', 'error');
        if (!password) return showToast('Please enter your password', 'error');

        try {
            const response = await axios.post(
                `${VITE_API_URL}/auth/login`,
                { email, password },
                { withCredentials: true } // ✅ allows cookie-based auth
            );

            if (response.data.success) {
                showToast('Login successful!', 'success');
                localStorage.setItem("token", response.data.token); // if JWT is returned
                setTimeout(() => navigate('/dashboard'), 2000); // redirect after success
            } else {
                showToast(response.data.message || 'Login failed', 'error');
            }
        } catch (error) {
            console.error('Error during login:', error);
            const msg = error.response?.data?.message || 'Server error occurred';
            showToast(msg, 'error');
        }
    };
    return (
        <div className="min-h-screen bg-[#3B132A] relative overflow-hidden flex items-center justify-center p-4">
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

            {/* Animated Geometric Background */}
            <div className="absolute inset-0">
                {/* Large Circle - Top Left */}
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

                {/* Large Circle - Bottom Right */}
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

                {/* Floating particles */}
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

            {/* Login Form Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="bg-[#3B132A]/80 backdrop-blur-xl border-2 border-[#F3EFDA]/20 rounded-2xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-block p-4 bg-[#F3EFDA]/10 rounded-full mb-4"
                        >
                            <Lock className="w-8 h-8 text-[#F3EFDA]" />
                        </motion.div>
                        <h1 className="text-3xl font-bold text-[#F3EFDA] mb-2">Welcome Back</h1>
                        <p className="text-[#F3EFDA]/60">Sign in to continue</p>
                    </div>

                    {/* Form */}
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

                        {/* Password Field */}
                        <div>
                            <label className="block text-[#F3EFDA] text-sm font-medium mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="w-full bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg pl-12 pr-12 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/30 focus:outline-none focus:border-[#F3EFDA]/60 focus:shadow-lg focus:shadow-[#F3EFDA]/10 transition-all"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F3EFDA]/40 hover:text-[#F3EFDA]/80 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>

                            {/* Password Requirements */}
                            {password && Object.keys(errors).length > 0 && (
                                <div className="mt-3 space-y-1">
                                    {Object.values(errors).map((error, idx) => (
                                        <p key={idx} className="text-xs text-red-400 flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-red-400"></span>
                                            {error}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-[#F3EFDA]/40 bg-[#3B132A]/50 text-[#F3EFDA] focus:ring-[#F3EFDA]/50"
                                />
                                <span className="ml-2 text-sm text-[#F3EFDA]/70">Remember me</span>
                            </label>

                            <Link
                                to="/forgot-password"
                                className="text-sm text-[#F3EFDA]/70 hover:text-[#F3EFDA] transition-colors cursor-pointer"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="button"
                            onClick={handleSubmit}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#F3EFDA] text-[#3B132A] font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#F3EFDA]/20 hover:shadow-xl hover:shadow-[#F3EFDA]/30 transition-all cursor-pointer"
                        >
                            <LogIn className="w-5 h-5" />
                            Sign In
                        </motion.button>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-[#F3EFDA]/60">
                            Don't have an account?{' '}
                            <Link to="/register">
                                <button className="text-[#F3EFDA] hover:underline font-medium cursor-pointer">
                                    Sign Up
                                </button>
                            </Link>

                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;