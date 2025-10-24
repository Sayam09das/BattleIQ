const User = require('../models/userModels');
const sendEmail = require('../utils/sendEmail');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// ===== HELPER: Generate Secure Verification Token =====
const generateVerificationToken = () => crypto.randomBytes(32).toString('hex');

// ===== LOGIN RATE LIMITER =====
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many login attempts, please try again later.',
});

// ===== REGISTER USER =====
exports.registerUser = [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 6, max: 12 }).withMessage('Password must be 6-12 characters'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { name, email, password, country, phoneNumber } = req.body;
        const normalizedEmail = email.toLowerCase();

        try {
            const existing = await User.findOne({ email: normalizedEmail });
            if (existing) return res.status(409).json({ message: 'Email already exists' });

            const hashedPassword = await bcrypt.hash(password, 12);
            const verificationToken = generateVerificationToken();
            const tokenExpires = Date.now() + 24 * 60 * 60 * 1000;

            const newUser = new User({
                name,
                email: normalizedEmail,
                password: hashedPassword,
                country,
                phoneNumber,
                isVerified: false,
                verificationToken,
                tokenExpires
            });

            await newUser.save();

            const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}&email=${encodeURIComponent(normalizedEmail)}`;
            await sendEmail(email, 'Verify your email', `Hi ${name},\n\nClick the link below to verify your email:\n\n${verificationLink}\n\nThis link expires in 24 hours.`);

            res.status(201).json({
                message: 'Registration successful. Please check your email to verify your account.'
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }
];

// ===== VERIFY EMAIL =====
exports.verifyEmail = async (req, res) => {
    const { token, email } = req.query;
    if (!token || !email) return res.status(400).json({ message: 'Invalid verification link' });

    try {
        const decodedEmail = decodeURIComponent(email).toLowerCase();
        const user = await User.findOne({ email: decodedEmail, verificationToken: token });

        if (!user) {
            const alreadyVerifiedUser = await User.findOne({ email: decodedEmail });
            if (alreadyVerifiedUser && alreadyVerifiedUser.isVerified) {
                // User already verified: generate JWT + set cookie
                const jwtToken = jwt.sign(
                    { id: alreadyVerifiedUser._id, name: alreadyVerifiedUser.name, email: alreadyVerifiedUser.email },
                    process.env.JWT_SECRET,
                    { expiresIn: process.env.JWT_EXPIRATION || '1h' }
                );
                res.cookie('authToken', jwtToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'None',
                    maxAge: 3600000,
                });
                return res.status(200).json({
                    message: 'Email already verified successfully.',
                    token: jwtToken,
                    user: {
                        id: alreadyVerifiedUser._id,
                        name: alreadyVerifiedUser.name,
                        email: alreadyVerifiedUser.email,
                        phoneNumber: alreadyVerifiedUser.phoneNumber,
                        country: alreadyVerifiedUser.country
                    }
                });
            }
            return res.status(400).json({ message: 'Invalid token or email' });
        }

        if (user.isVerified) return res.status(400).json({ message: 'Email already verified' });
        if (user.tokenExpires < Date.now()) return res.status(400).json({ message: 'Token expired. Please register again.' });

        user.isVerified = true;
        user.verificationToken = undefined;
        user.tokenExpires = undefined;
        await user.save();

        // Generate JWT + set cookie
        const jwtToken = jwt.sign(
            { id: user._id, name: user.name, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION || '1h' }
        );

        res.cookie('authToken', jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'None',
            maxAge: 3600000,
        });

        res.status(200).json({
            message: 'Email verified successfully!',
            token: jwtToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                country: user.country
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// ===== LOGIN USER =====
exports.loginUser = [
    loginLimiter,
    body('email').isEmail().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { email, password } = req.body;
        const normalizedEmail = email.toLowerCase();

        try {
            const user = await User.findOne({ email: normalizedEmail });
            if (!user) return res.status(404).json({ message: 'User not found' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

            if (!user.isVerified) return res.status(403).json({ message: 'Email not verified.' });

            const token = jwt.sign(
                { id: user._id, name: user.name, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRATION || '1h' }
            );

            // ✅ Set JWT cookie for login
            res.cookie('authToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'None',
                maxAge: 3600000,
            });

            res.status(200).json({
                message: 'Login successful',
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    country: user.country
                }
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }
];


// ===== LOGOUT USER =====
exports.logoutUser = async (req, res) => {
    try {
        res.clearCookie('authToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        });

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};




// ===== FORGOT PASSWORD =====
exports.forgotPassword = [
    body('email').isEmail().withMessage('Valid email required'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { email } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(404).json({ message: 'User not found' });

            const otp = generateOtp();
            const otpExpires = Date.now() + 5 * 60 * 1000;

            user.otp = otp;
            user.otpExpires = otpExpires;
            await user.save();

            const subject = `Schedulo Password Reset – OTP Inside`;
            const text = `
Hi ${user.name},

🛡️ Your password reset OTP is: ${otp}  
⏳ It expires in 5 minutes.

Click to reset: https://schedulo-task.app/reset-password

If you didn’t request this, ignore this email.

— The Schedulo Team
            `;

            // await sendEmail(email, subject, text);
            res.status(200).json({ message: 'OTP sent to email' });

        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }
];

// ===== VERIFY OTP =====
exports.verifyOtp = [
    body('email').isEmail().withMessage('Valid email required'),
    body('otp').isLength({ min: 4, max: 12 }).withMessage('OTP must be 4–12 digits'),

    async (req, res) => {
        const { email, otp } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ message: 'User not found' });


            if (String(user.otp) !== String(otp)) {
                return res.status(400).json({ message: 'Invalid OTP' });
            }

            if (Date.now() > user.otpExpires) {
                return res.status(400).json({ message: 'OTP has expired' });
            }

            user.otp = null;
            user.otpExpires = null;
            user.resetVerified = true;
            await user.save();

            res.status(200).json({ message: 'OTP verified. Proceed to reset password.' });

        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }
];





// ===== RESEND OTP =====
exports.resendOtp = [
    body('email').isEmail().withMessage('Valid email required'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { email } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(404).json({ message: 'User not found' });

            const otp = generateOtp();
            const otpExpires = Date.now() + 5 * 60 * 1000;

            user.otp = otp;
            user.otpExpires = otpExpires;
            await user.save();

            const subject = 'Schedulo – Resend OTP';
            const text = `
Hi ${user.name},

🔁 Your new OTP is: ${otp}  
⏳ It expires in 5 minutes.

Use it to verify your account or reset your password.

— The Schedulo Team
            `;

            // await sendEmail(email, subject, text);
            res.status(200).json({ message: 'New OTP sent successfully to your email' });

        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }
];

exports.resetPassword = [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user || !user.resetVerified) {
                return res.status(400).json({ message: 'User not verified for reset' });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            user.password = hashedPassword;
            user.resetVerified = false;
            await user.save();

            res.status(200).json({ message: 'Password has been reset successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }
];

exports.getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('name email createdAt');
        if (!user) return res.status(404).json({ message: 'User not found' });

        const avatar = user.name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();

        res.status(200).json({
            user: {
                name: user.name,
                email: user.email,
                avatar,
                joinDate: new Date(user.createdAt).toLocaleString('default', {
                    month: 'long',
                    year: 'numeric'
                })
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};