const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
require('dotenv').config();

// Database connection
const database = require('./database/db');

const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const countryRoutes = require('./routes/countryRoutes');

// ✅ CORS Configuration
app.use(
    cors({
        origin: [
            "https://battle-iq.vercel.app",
            "http://localhost:5173"
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

// ✅ Handle preflight requests
app.options("*", cors());


// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

// Connect to MongoDB
database();

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use('/api/countries', countryRoutes);


module.exports = app;
