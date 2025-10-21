const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send("Backend server is running Sayam Das!");
});

app.get('sayam', (req, res) => {
    res.send("Hello Sayam Das!");
});

module.exports = app;
