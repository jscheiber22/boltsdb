import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import { Grid, Typography } from '@mui/material';

function Home() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    make: '',
    model: '',
    startYear: '',
    endYear: '',
  });

  // Fetch cars on component mount
  useEffect(() => {
    fetchCars();
  }, []);

  // Fetch cars from the backend
  const fetchCars = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URI + '/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_API_URI + '/api/cars', newCar);
      fetchCars(); // Refresh the list of cars
      setNewCar({ make: '', model: '', startYear: '', endYear: '' }); // Reset form
    } catch (error) {
      console.error('Error adding new car:', error);
    }
  };

  return (
    <Grid container spacing={2}>
        <Grid item xs={0} md={3}>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h2" textAlign={"center"} marginTop={"2%"}>
          Find Your Car
        </Typography>
        <Typography variant='body1' textAlign={"center"}>

        </Typography>
          <SearchBar />
          <div className="App">
            {/* <h1>Car Information</h1>
            <form onSubmit={handleSubmit}>
              <input
                name="make"
                value={newCar.make}
                onChange={handleChange}
                placeholder="Make"
                required
              />
              <input
                name="model"
                value={newCar.model}
                onChange={handleChange}
                placeholder="Model"
                required
              />
              <input
                name="startYear"
                value={newCar.startYear}
                onChange={handleChange}
                placeholder="Start Year"
                required
              />
              <input
                name="endYear"
                value={newCar.endYear}
                onChange={handleChange}
                placeholder="End Year"
                required
              />
              <button type="submit">Add Car</button>
            </form> */}

            <h2>List of Cars</h2>
            <ul>
              {cars.map((car) => (
                <li key={car.carId}>{`${car.make} ${car.model} (${car.startYear} - ${car.endYear})`}</li>
              ))}
            </ul> 
          </div>
          </Grid> 
          <Grid item xs={0} md={3}>
          </Grid>
    </Grid>
  );
}

export default Home;