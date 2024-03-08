const express = require('express');
const pool = require('../db'); // Adjust the path based on your structure
const router = express.Router();

// Add a new car
router.post('/cars', async (req, res) => {
    try {
        const { make, model, startYear, endYear } = req.body;
        const newCar = await pool.query(
            'INSERT INTO Cars (make, model, startYear, endYear) VALUES ($1, $2, $3, $4) RETURNING *',
            [make, model, startYear, endYear]
        );
        res.json(newCar.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all cars
router.get('/cars', async (req, res) => {
    try {
        const allCars = await pool.query('SELECT * FROM Cars');
        res.json(allCars.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
