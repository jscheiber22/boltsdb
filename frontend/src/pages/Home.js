import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import { Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    make: '',
    model: '',
    startYear: '',
    endYear: '',
  });
  const [searchResults, setSearchResults] = useState([]);

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
        <Grid item xs={1} md={3}>
        </Grid>
        <Grid item xs={10} md={6}>
        <div style={{marginTop: "2%"}}></div>
        <Typography variant='h2' textAlign={"center"}>
          Welcome to boltsDB!
        </Typography>
        <Typography variant='h4' textAlign={"center"} marginBottom={"2%"}>
        your go-to source for automotive torque specifications.
        </Typography>
        <Typography variant='body1' textAlign={"center"} marginBottom={"5%"}>
          Our platform offers an intuitive and efficient way to find precise torque specs for any vehicle. At boltsDB, we ensure you have all the torque specs at your fingertips, making your automotive projects smoother and more reliable. Perfect for both professionals and enthusiasts, boltsDB is the key to accurate and hassle-free vehicle maintenance and repair.
        </Typography>
        <Typography variant="h2" textAlign={"center"} marginTop={"10%"} marginBottom={"1%"}>
          Find Your Car
        </Typography>
          <SearchBar onSearchResults={setSearchResults} />
          <Typography variant='body1' textAlign={"center"} marginTop={"1%"}>
          Start by using the search bar to quickly locate your car's make, model, and year, or browse through our extensive database to find exactly what you need.
          </Typography>

          { searchResults.length > 0 &&
          <Paper elevation={3} sx={{ margin: '20px', padding: '20px' }}>
            <List component="nav" aria-label="car links">
              {searchResults.map((car) => {
                const { carid, make, model, startyear, endyear } = car;
                const linkPath = `/${make}/${model}/${startyear}/${endyear}`;

                return (
                  <Link to={linkPath} key={carid} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem>
                      <ListItemText primary={`${make} ${model} (${startyear} - ${endyear})`} />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Paper>
          }

          {/* <div className="App"> */}
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

            {/* <h2>List of Cars</h2>
            <ul>
              {cars.map((car) => (
                <li key={car.carId}>{`${car.make} ${car.model} (${car.startYear} - ${car.endYear})`}</li>
              ))}
            </ul> 
          </div> */}
          </Grid> 
          <Grid item xs={0} md={3}>
          </Grid>
    </Grid>
  );
}

export default Home;