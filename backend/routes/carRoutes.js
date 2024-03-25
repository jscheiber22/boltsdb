const express = require('express');
const pool = require('../db');
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


// Route to fetch all car makes
router.get('/cars/makes', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT DISTINCT Make FROM Cars ORDER BY Make');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// Route to fetch all models of a given make
router.get('/:make/models', async (req, res) => {
    const make = req.params.make;
    try {
      const { rows } = await pool.query('SELECT DISTINCT Model FROM Cars WHERE Make = $1 ORDER BY Model', [make]);
      res.json(rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


// Route to fetch all year ranges of a given make and model 
router.get('/:make/:model/dates', async (req, res) => {
  const { make, model } = req.params;
  try {
    const query = `
      SELECT StartYear || '-' || EndYear AS YearRange
      FROM Cars
      WHERE Make = $1 AND Model = $2
      ORDER BY StartYear, EndYear
    `;
    const { rows } = await pool.query(query, [make, model]);
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
