import React from 'react';
import { Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography paragraph>
        At boltsdb.com, we are committed to maintaining the trust and confidence of all visitors to our web site. In particular, we want you to know that boltsdb.com is not in the business of selling, renting or trading email lists with other companies and businesses for marketing purposes.
      </Typography>
      <Typography paragraph>
        In this Privacy Policy, we’ve provided detailed information on when and why we collect personal information, how we use it, the limited conditions under which we may disclose it to others, and how we keep it secure.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        No Collection of Personal Data
      </Typography>
      <Typography paragraph>
        boltsdb.com does not collect or store any personal data from our users. Our website is designed to present information to the user without the need for personal data collection.
      </Typography>
      <Typography paragraph>
        As we do not collect any personal information, we also do not share any personal information with third parties nor do we store information we collect about your visit to this website for use other than to analyze content performance through the use of cookies, which you can turn off at anytime by modifying your Internet browser's settings.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography paragraph>
        If you have any questions about this Privacy Policy, please contact us via email at admin@boltsdb.com.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
