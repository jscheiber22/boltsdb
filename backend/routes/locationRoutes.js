const express = require('express');
const pool = require('../db');
const router = express.Router();

// Add a new location
router.post('/locations', async (req, res) => {
    try {
        const { description } = req.body;
        const newLocation = await pool.query(
            'INSERT INTO Locations (description) VALUES ($1) RETURNING *',
            [description]
        );
        res.json(newLocation.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all locations
router.get('/locations', async (req, res) => {
    try {
        const allLocations = await pool.query('SELECT * FROM Locations');
        res.json(allLocations.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
