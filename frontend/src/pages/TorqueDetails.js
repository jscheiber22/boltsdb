import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

const TorqueDetails = () => {
  const { make, model, startYear, endYear } = useParams();
  const [bolts, setBolts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/car-details/${make}/${model}/${startYear}/${endYear}`);
        setBolts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    fetchData();
  }, [make, model, startYear, endYear]);

  return (
    <Container maxWidth="md" style={{marginTop: "2%"}}>
      <Typography variant="h3" gutterBottom>
        {make} {model} ({startYear}-{endYear}) Details
      </Typography>
      <Grid container spacing={2} marginTop={"2%"}>
        {bolts.length ? (
          bolts.map((bolt, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {bolt.name.toUpperCase()}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Torque: {bolt.torquerating} {bolt.torqueunit}
                  </Typography>
                  <Typography variant="body2">
                    Torque (Nm): {bolt.torquenm}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No bolt details available.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default TorqueDetails;
