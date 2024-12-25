const express = require('express');
const router = express.Router();

// Register a new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Placeholder logic (replace with real authentication logic)
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    res.status(201).json({ message: 'User registered successfully' });
});

// Log in a user
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Placeholder logic (replace with real authentication logic)
    if (username === 'admin' && password === 'password') {
        res.status(200).json({ message: 'Login successful', token: 'mock-jwt-token' });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

module.exports = router;
