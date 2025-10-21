const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Database connection
const database = require('./database/db');

// ✅ CORS Configuration
app.use(
    cors({
        origin: [
            'https://battle-iq.vercel.app',
            'http://localhost:5173'
        ],
        credentials: true,
    })
);

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
database();

// ✅ Simple test routes
app.get('/', (req, res) => {
    res.send('Welcome to BattleIQ API 🚀');
});

app.get('/api/test', (req, res) => {
    res.json({
        message: 'Backend is running successfully ✅',
        status: 'OK',
    });
});

module.exports = app;
