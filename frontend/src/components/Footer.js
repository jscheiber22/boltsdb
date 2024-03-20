import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Container maxWidth="lg" sx={{ borderTop: 1, borderColor: 'divider', paddingTop: '1%' }}>
          <Typography variant="caption" align="center" gutterBottom color={"gray"}>
            boltsdb.com endeavors to provide accurate torque values for every vehicle with the utmost precision. The data presented on this website is compiled through community contributions and may not undergo rigorous accuracy verification, which could lead to potential inaccuracies. It is recommended that users exercise due diligence and caution in the application of information obtained from this website. For all vehicle maintenance or repair tasks, reliance should be placed on official documentation provided by the manufacturer. boltsdb.com expressly disclaims all liability for any inaccuracies or omissions on this website, and shall not be liable for any damages or losses arising from the use or reliance on the information provided herein.
            © {new Date().getFullYear()} boltsdb.com. All rights reserved.
          </Typography>
          <Box mt={2} textAlign="center">
            <Link href="/privacy-policy" color="inherit">Privacy Policy</Link> | 
            <Link href="/terms-of-use" color="inherit"> Terms of Use</Link> | 
            <Link href="/contact" color="inherit">Contact Us</Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
