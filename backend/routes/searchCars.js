const express = require('express');
const pool = require('../db'); // Adjust the path based on your structure
const router = express.Router();

const parseSearchInput = (input) => {
  const yearRegex = /\b(19|20)\d{2}\b/;
  const yearMatch = input.match(yearRegex);
  const year = yearMatch ? parseInt(yearMatch[0], 10) : null;

  let makeModelString = input.replace(yearRegex, '').trim();
  let [make, ...modelParts] = makeModelString.split(' ');
  let model = modelParts.join(' ');

  // Simple heuristic: if the first part is numeric, it's likely the year was at the start
  if (!isNaN(parseInt(make, 10))) {
    [make, ...modelParts] = modelParts;
    model = modelParts.join(' ');
  }

  return { year, make, model };
};

const searchCars = async (input) => {
  try {
    const { year, make, model } = parseSearchInput(input);

    if (!year || !make || !model) {
      console.log('Please ensure your search includes a make, model, and year.');
      return null;
    }

    const query = `
    SELECT * FROM Cars
    WHERE LOWER(Make) = LOWER($1) AND LOWER(Model) = LOWER($2) AND $3 BETWEEN StartYear AND EndYear    
    `;
    const values = [make, model, year];
    const result = await pool.query(query, values);

    if (result.rows.length > 0) {
      console.log('Search Results:', result.rows);
      return result.rows;
    } else {
      console.log('No cars found matching the criteria.');
      return null;
    }
  } catch (err) {
    console.error('Error executing search query:', err.message);
    return null;
  }
};

// Example usage
router.get('/searchCars', async(req, res) => {
  try{
    const { search } = req.query;
    console.log(search);
    const results = await searchCars(search);
    if (results){
      res.json(results);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
