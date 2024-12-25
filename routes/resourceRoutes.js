const express = require('express');
const router = express.Router();

// Example in-memory resource list (replace with database logic)
let resources = [
    { id: 1, name: 'Ambulance', type: 'vehicle', status: 'available', location: 'Base' }
];

// Fetch all resources
router.get('/', (req, res) => {
    res.json(resources);
});

// Add a new resource
router.post('/', (req, res) => {
    const resource = req.body;

    // Assign a new ID to the resource
    resource.id = resources.length + 1;
    resources.push(resource);

    res.status(201).json(resource);
});

// Update resource details
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedResource = req.body;

    const resourceIndex = resources.findIndex(r => r.id == id);
    if (resourceIndex === -1) {
        return res.status(404).json({ error: 'Resource not found' });
    }

    resources[resourceIndex] = { ...resources[resourceIndex], ...updatedResource };
    res.json(resources[resourceIndex]);
});

// Delete a resource
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    resources = resources.filter(r => r.id != id);
    res.status(200).json({ message: 'Resource deleted' });
});

module.exports = router;
