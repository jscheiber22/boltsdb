import { Grid, Typography } from '@mui/material';
import React from 'react'

const AboutUs = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={1} md={3}>
            </Grid>
            <Grid item xs={10} md={6}>
                <Typography variant="h2" marginTop={"2%"} align='center'>boltsDB</Typography>

                <Typography variant="h5" marginTop={"1%"} align='center'>Welcome to <a href="https://github.com/jscheiber22/boltsdb">boltsDB</a>, your go-to source for automotive torque specifications. Our platform offers an intuitive and efficient way to find precise torque specs for any vehicle, ensuring you have all the torque specs at your fingertips. Perfect for both professionals and enthusiasts, boltsDB is the key to accurate and hassle-free vehicle maintenance and repair.</Typography>
                
                <Typography variant="h4" marginTop={"2%"} marginBottom={"1%"}>Description</Typography>
                
                <Typography variant="body1">boltsDB is a comprehensive platform designed to simplify the process of finding automotive torque specifications. With a React frontend, Express backend, and PostgreSQL database, this application combines modern technologies to provide a seamless user experience.</Typography>
                
                <Typography variant="h4" marginTop={"2%"} marginBottom={"1%"}>Key Features:</Typography>
                
                <Typography variant="body1">
                - <strong>Intuitive Search:</strong> Start by using the search bar to quickly locate your car's make, model, and year. This feature ensures that you can find the exact torque specifications you need without navigating through cumbersome menus or databases.<br></br>
                - <strong>Extensive Database:</strong> Browse through our comprehensive database to find torque specs for a wide range of vehicles. Our platform is designed to be a one-stop solution for all your torque specification needs.<br></br>
                - <strong>User-Friendly Interface:</strong> The website is built with ease of use in mind. Whether you're a professional mechanic or an automotive enthusiast, you'll find boltsDB to be an invaluable tool in your arsenal.<br></br>
                </Typography>

                <Typography variant="h4" marginTop={"2%"}>How to Use boltsDB</Typography>
                
                <Typography variant="h5" marginTop={"1%"} marginBottom={"1%"}>Using boltsDB is straightforward. Here's how you can get started:</Typography>
                
                1. <strong>Visit the Website:</strong> (You're already here!) to access the platform.<br></br>
                2. <strong>Find Your Car:</strong> Use the search bar to enter your car's make, model, and year. Alternatively, you can browse our database to explore the available torque specifications.<br></br>
                3. <strong>Access Torque Specs:</strong> Once you've found your car, the website will display all the relevant torque specifications. These are carefully curated and regularly updated to ensure accuracy and reliability.<br></br>
                
                <Typography variant="h4" marginTop={"2%"} marginBottom={"1%"}>Why boltsDB?</Typography>
                
                - <strong>Saves Time:</strong> Quickly find the torque specs you need without the hassle of flipping through manuals or searching multiple websites.<br></br>
                - <strong>Accuracy:</strong> Our database is meticulously maintained to ensure that you get the most accurate and up-to-date information.<br></br>
                - <strong>Convenience:</strong> Accessible from anywhere, boltsDB is designed to be your portable guide to automotive torque specifications.<br></br>
            </Grid>
        </Grid>
    )
}

export default AboutUs;
