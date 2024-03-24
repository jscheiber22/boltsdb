import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useHistory

const Browse = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [models, setModels] = useState([]);
  const [dateRanges, setDateRanges] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState(''); // State to track the selected model
  const navigate = useNavigate(); // Instantiate useHistory

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URI + '/api/cars/makes');
        setManufacturers(
          response.data.map(function(make) {
            return make['make'];
        }));
      } catch (error) {
        console.error("Failed to fetch manufacturers:", error);
      }
    };

    fetchManufacturers();
  }, []);

  const handleManufacturerClick = async (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    try {
      const response = await axios.get(process.env.REACT_APP_API_URI + `/api/${manufacturer}/models`);
      setModels(
        response.data.map(function(model) {
          return model['model'];
      }));
      setDateRanges([]); // Clear any previous date ranges
      setSelectedModel(''); // Clear any previously selected model
    } catch (error) {
      console.error(`Failed to fetch models for ${manufacturer}:`, error);
    }
  };

  const handleModelClick = async (model) => {
    setSelectedModel(model);
    try {
      const response = await axios.get(process.env.REACT_APP_API_URI + `/api/${selectedManufacturer}/${model}/dates`);
      console.log(response.data);
      setDateRanges(response.data.map(function(years) {
        return years['yearrange'];
    }));
    } catch (error) {
      console.error(`Failed to fetch date ranges for ${model}:`, error);
    }
  };

  const handleDateRangeClick = (dateRange) => {
    const startYear = dateRange.split('-')[0];
    const endYear = dateRange.split('-')[1];
    navigate(`/${selectedManufacturer}/${selectedModel}/${startYear}/${endYear}`); // Redirect to the new URL
  };

  return (
    <Grid container spacing={2} marginTop={"1%"}>
        <Grid item xs={1} md={3}>
        </Grid>
        <Grid item xs={10} md={6}>
            <Typography variant='h4' textAlign={"center"}>Make</Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 2, // Adjust the gap between items as needed
                p: 2, // Padding around the grid
            }}>
                {manufacturers.map((manufacturer, index) => (
                <Button key={index} variant="contained" onClick={() => handleManufacturerClick(manufacturer)}>
                    {manufacturer}
                </Button>
                ))}
            </Box>

      {selectedManufacturer && (
        <>
          <Typography variant='h4' textAlign={"center"} style={{marginTop: "20px"}}>
            <strong>{selectedManufacturer}</strong> Models
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 2,
            p: 2,
          }}>
            {models.map((model, index) => (
              <Button key={index} variant="contained" onClick={() => handleModelClick(model)}>
                {model}
              </Button>
            ))}
          </Box>
        </>
      )}
      {selectedModel && dateRanges.length > 0 && (
        <>
          <Typography variant='h4' textAlign={"center"} style={{marginTop: "20px"}}>
            Generations
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 2,
            p: 2,
          }}>
            {dateRanges.map((dateRange, index) => (
              <Button key={index} variant="contained" onClick={() => handleDateRangeClick(dateRange)}>
                {dateRange}
              </Button>
            ))}
          </Box>
        </>
      )}
      </Grid>
    </Grid>
  );
};

export default Browse;
