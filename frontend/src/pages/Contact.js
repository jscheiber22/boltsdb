import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submission logic here
    console.log(contactForm);
    alert('Message submitted! We will get back to you soon.');
  };

  return (
    <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={contactForm.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
              value={contactForm.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body1" component="p" style={{ marginTop: '20px' }}>
        Email: [Your Email Here]
      </Typography>
      <Typography variant="body1" component="p">
        Phone: [Your Phone Number Here]
      </Typography>
      <Typography variant="body1" component="p">
        Address: [Your Address Here]
      </Typography>
    </Container>
  );
};

export default Contact;
