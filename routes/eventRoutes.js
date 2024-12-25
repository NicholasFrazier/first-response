const express = require('express');
const router = express.Router();

// Example in-memory event list (replace with database logic)
let events = [
    { id: 1, name: 'Music Festival', location: 'Downtown', date: '2024-01-01' }
];

// Fetch all events
router.get('/', (req, res) => {
    res.json(events);
});

// Create a new event
router.post('/', (req, res) => {
    const event = req.body;

    // Assign a new ID to the event
    event.id = events.length + 1;
    events.push(event);

    res.status(201).json(event);
});

module.exports = router;
