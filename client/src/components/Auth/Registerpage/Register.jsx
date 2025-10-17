import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, UserPlus, Phone, Globe, ChevronDown } from 'lucide-react';

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

const countries = [
    { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸' },
    { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧' },
    { name: 'Canada', code: 'CA', dialCode: '+1', flag: '🇨🇦' },
    { name: 'Australia', code: 'AU', dialCode: '+61', flag: '🇦🇺' },
    { name: 'India', code: 'IN', dialCode: '+91', flag: '🇮🇳' },
    { name: 'Germany', code: 'DE', dialCode: '+49', flag: '🇩🇪' },
    { name: 'France', code: 'FR', dialCode: '+33', flag: '🇫🇷' },
    { name: 'Japan', code: 'JP', dialCode: '+81', flag: '🇯🇵' },
    { name: 'China', code: 'CN', dialCode: '+86', flag: '🇨🇳' },
    { name: 'Brazil', code: 'BR', dialCode: '+55', flag: '🇧🇷' },
    { name: 'Mexico', code: 'MX', dialCode: '+52', flag: '🇲🇽' },
    { name: 'Russia', code: 'RU', dialCode: '+7', flag: '🇷🇺' },
    { name: 'South Korea', code: 'KR', dialCode: '+82', flag: '🇰🇷' },
    { name: 'Italy', code: 'IT', dialCode: '+39', flag: '🇮🇹' },
    { name: 'Spain', code: 'ES', dialCode: '+34', flag: '🇪🇸' },
    { name: 'Netherlands', code: 'NL', dialCode: '+31', flag: '🇳🇱' },
    { name: 'Singapore', code: 'SG', dialCode: '+65', flag: '🇸🇬' },
    { name: 'UAE', code: 'AE', dialCode: '+971', flag: '🇦🇪' },
    { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: '🇸🇦' },
    { name: 'Turkey', code: 'TR', dialCode: '+90', flag: '🇹🇷' },
];

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [toast, setToast] = useState(null);
    const [errors, setErrors] = useState({});

    const [selectedCountry, setSelectedCountry] = useState(countries[4]); // India default
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState('');

    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState(countries[4]); // India default

    const { scrollY } = useScroll();
    const yCircleLeft = useTransform(scrollY, [0, 300], [0, 50]);
    const yCircleRight = useTransform(scrollY, [0, 300], [0, -50]);

    const showToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const validatePassword = (pwd) => {
        const validations = {
            length: pwd.length >= 8,
            uppercase: /[A-Z]/.test(pwd),
            lowercase: /[a-z]/.test(pwd),
            number: /[0-9]/.test(pwd),
            special: /[@#$!%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd),
            noSpaces: !/\s/.test(pwd)
        };
        return validations;
    };

    const handlePasswordChange = (e) => {
        const pwd = e.target.value;
        setFormData({ ...formData, password: pwd });

        if (pwd) {
            const validations = validatePassword(pwd);
            const newErrors = {};

            if (!validations.length) newErrors.length = 'Must be at least 8 characters';
            if (!validations.uppercase) newErrors.uppercase = 'Must include uppercase letter';
            if (!validations.lowercase) newErrors.lowercase = 'Must include lowercase letter';
            if (!validations.number) newErrors.number = 'Must include a number';
            if (!validations.special) newErrors.special = 'Must include special character';
            if (!validations.noSpaces) newErrors.spaces = 'No spaces allowed';

            setErrors(newErrors);
        } else {
            setErrors({});
        }
    };

    const handleSubmit = () => {
        if (!formData.fullName) {
            showToast('Please enter your full name', 'error');
            return;
        }

        if (!formData.email) {
            showToast('Please enter your email', 'error');
            return;
        }

        if (!formData.password) {
            showToast('Please enter your password', 'error');
            return;
        }

        const validations = validatePassword(formData.password);
        const isValid = Object.values(validations).every(v => v === true);

        if (!isValid) {
            showToast('Password does not meet requirements', 'error');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }

        if (!formData.phoneNumber) {
            showToast('Please enter your phone number', 'error');
            return;
        }

        showToast('Registration successful!', 'success');
    };

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(countrySearch.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#3B132A] relative overflow-hidden flex items-center justify-center p-4 py-12">
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

            {/* Register Form Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-2xl"
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
                            <UserPlus className="w-8 h-8 text-[#F3EFDA]" />
                        </motion.div>
                        <h1 className="text-3xl font-bold text-[#F3EFDA] mb-2">Create Account</h1>
                        <p className="text-[#F3EFDA]/60">Join us today and get started</p>
                    </div>

                    <div className="space-y-5">
                        {/* Full Name */}
                        <div>
                            <label className="block text-[#F3EFDA] text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg pl-12 pr-4 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/30 focus:outline-none focus:border-[#F3EFDA]/60 focus:shadow-lg focus:shadow-[#F3EFDA]/10 transition-all"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[#F3EFDA] text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg pl-12 pr-4 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/30 focus:outline-none focus:border-[#F3EFDA]/60 focus:shadow-lg focus:shadow-[#F3EFDA]/10 transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Country Selection */}
                        <div>
                            <label className="block text-[#F3EFDA] text-sm font-medium mb-2">
                                Country
                            </label>
                            <div className="relative">
                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40 z-10" />
                                <button
                                    type="button"
                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                    className="w-full bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg pl-12 pr-12 py-3 text-[#F3EFDA] text-left focus:outline-none focus:border-[#F3EFDA]/60 focus:shadow-lg focus:shadow-[#F3EFDA]/10 transition-all flex items-center justify-between"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-xl">{selectedCountry.flag}</span>
                                        <span>{selectedCountry.name}</span>
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-[#F3EFDA]/40" />
                                </button>

                                {isCountryDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute top-full mt-2 w-full bg-[#3B132A] border-2 border-[#F3EFDA]/20 rounded-lg shadow-2xl z-50 max-h-60 overflow-hidden"
                                    >
                                        <div className="p-2">
                                            <input
                                                type="text"
                                                value={countrySearch}
                                                onChange={(e) => setCountrySearch(e.target.value)}
                                                placeholder="Search country..."
                                                className="w-full bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg px-3 py-2 text-[#F3EFDA] placeholder-[#F3EFDA]/30 focus:outline-none focus:border-[#F3EFDA]/60 text-sm"
                                            />
                                        </div>
                                        <div className="max-h-48 overflow-y-auto">
                                            {filteredCountries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setSelectedPhoneCountry(country);
                                                        setIsCountryDropdownOpen(false);
                                                        setCountrySearch('');
                                                    }}
                                                    className="w-full px-4 py-2 text-left hover:bg-[#F3EFDA]/10 text-[#F3EFDA] flex items-center gap-2 transition-colors"
                                                >
                                                    <span className="text-xl">{country.flag}</span>
                                                    <span>{country.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Phone Number with Country Code */}
                        <div>
                            <label className="block text-[#F3EFDA] text-sm font-medium mb-2">
                                Phone Number
                            </label>
                            <div className="flex gap-2">
                                <div className="relative w-32">
                                    <div className="w-full bg-[#3B132A]/30 border-2 border-[#F3EFDA]/10 rounded-lg px-3 py-3 text-[#F3EFDA] flex items-center justify-center gap-1 cursor-not-allowed opacity-75">
                                        <span>{selectedPhoneCountry.flag}</span>
                                        <span className="text-sm font-medium">{selectedPhoneCountry.dialCode}</span>
                                    </div>
                                </div>

                                <div className="relative flex-1">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                                    <input
                                        type="tel"
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value.replace(/\D/g, '') })}
                                        className="w-full bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg pl-12 pr-4 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/30 focus:outline-none focus:border-[#F3EFDA]/60 focus:shadow-lg focus:shadow-[#F3EFDA]/10 transition-all"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-[#F3EFDA] text-sm font-medium mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handlePasswordChange}
                                    className="w-full bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg pl-12 pr-12 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/30 focus:outline-none focus:border-[#F3EFDA]/60 focus:shadow-lg focus:shadow-[#F3EFDA]/10 transition-all"
                                    placeholder="Create a password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F3EFDA]/40 hover:text-[#F3EFDA]/80 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>

                            {formData.password && Object.keys(errors).length > 0 && (
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

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-[#F3EFDA] text-sm font-medium mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F3EFDA]/40" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className="w-full bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg pl-12 pr-12 py-3 text-[#F3EFDA] placeholder-[#F3EFDA]/30 focus:outline-none focus:border-[#F3EFDA]/60 focus:shadow-lg focus:shadow-[#F3EFDA]/10 transition-all"
                                    placeholder="Confirm your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F3EFDA]/40 hover:text-[#F3EFDA]/80 transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                                <p className="mt-2 text-xs text-red-400 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-red-400"></span>
                                    Passwords do not match
                                </p>
                            )}
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                className="w-4 h-4 mt-1 rounded border-[#F3EFDA]/40 bg-[#3B132A]/50 text-[#F3EFDA] focus:ring-[#F3EFDA]/50"
                            />
                            <span className="ml-2 text-sm text-[#F3EFDA]/70">
                                I agree to the{' '}
                                <button className="text-[#F3EFDA] hover:underline">Terms & Conditions</button>
                                {' '}and{' '}
                                <button className="text-[#F3EFDA] hover:underline">Privacy Policy</button>
                            </span>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="button"
                            onClick={handleSubmit}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#F3EFDA] text-[#3B132A] font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#F3EFDA]/20 hover:shadow-xl hover:shadow-[#F3EFDA]/30 transition-all"
                        >
                            <UserPlus className="w-5 h-5" />
                            Create Account
                        </motion.button>

                        {/* Divider */}
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#F3EFDA]/20"></div>
                            </div>
                            <div className="relative bg-[#3B132A] px-4">
                                <span className="text-sm text-[#F3EFDA]/60">Or continue with</span>
                            </div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-3 gap-3">
                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-2 bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg py-3 text-[#F3EFDA] hover:border-[#F3EFDA]/40 hover:bg-[#F3EFDA]/5 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </motion.button>

                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-2 bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg py-3 text-[#F3EFDA] hover:border-[#F3EFDA]/40 hover:bg-[#F3EFDA]/5 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                                </svg>
                            </motion.button>

                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-2 bg-[#3B132A]/50 border-2 border-[#F3EFDA]/20 rounded-lg py-3 text-[#F3EFDA] hover:border-[#F3EFDA]/40 hover:bg-[#F3EFDA]/5 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="#F3EFDA" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-[#F3EFDA]/60">
                            Already have an account?{' '}
                            <button className="text-[#F3EFDA] hover:underline font-medium">
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;