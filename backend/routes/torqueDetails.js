const express = require('express');
const pool = require('../db'); // Adjust the path based on your structure
const router = express.Router();

// Route to get car details for a specific make, model, and year range
router.get('/car-details/:make/:model/:startYear/:endYear', async (req, res) => {
    const { make, model, startYear, endYear } = req.params;
  
    try {
      const query = `
        SELECT b.Name, b.TorqueRating, b.TorqueUnit, b.TorqueNm
        FROM Bolts b
        JOIN CarLocationBolts clb ON b.BoltID = clb.BoltID
        JOIN CarLocations cl ON cl.CarLocationID = clb.CarLocationID
        JOIN Cars c ON c.CarID = cl.CarID
        WHERE c.Make = $1 AND c.Model = $2 AND c.StartYear = $3 AND c.EndYear = $4
        ORDER BY b.Name ASC;
      `;
      const { rows } = await pool.query(query, [make, model, startYear, endYear]);
      res.json(rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;
