const express = require('express');
const pool = require('../db');
const router = express.Router();

// Add a new bolt
router.post('/bolts', async (req, res) => {
    try {
        const { name, torqueRating, torqueUnit } = req.body;
        const newBolt = await pool.query(
            'INSERT INTO Bolts (name, torqueRating, torqueUnit) VALUES ($1, $2, $3) RETURNING *',
            [name, torqueRating, torqueUnit]
        );
        res.json(newBolt.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all bolts
router.get('/bolts', async (req, res) => {
    try {
        const allBolts = await pool.query('SELECT * FROM Bolts');
        res.json(allBolts.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
