import React from 'react';
import { Container, Typography } from '@mui/material';

const TermsOfUse = () => {
  return (
    <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Terms of Use
      </Typography>
      <Typography paragraph>
        Welcome to boltsdb.com. By accessing or using boltsdb.com, you agree to be bound by these terms of use ("Terms"). If you do not agree to all of these Terms, do not use this website.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Use of Site
      </Typography>
      <Typography paragraph>
        This website is offered for informational purposes only. boltsdb.com grants you a limited license to access and make personal use of this site and not to download (other than page caching) or modify it, or any portion of it, except with express written consent of boltsdb.com.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Intellectual Property
      </Typography>
      <Typography paragraph>
        All content included on this site, such as text, graphics, logos, button icons, images, and software, is the property of boltsdb.com or its content suppliers and protected by international copyright laws.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Disclaimer of Warranties and Limitation of Liability
      </Typography>
      <Typography paragraph>
        This site is provided on an "as is" and "as available" basis. boltsdb.com makes no representations or warranties of any kind, express or implied, as to the operation of this site or the information, content, materials, or products included on this site. You expressly agree that your use of this site is at your sole risk.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Governing Law
      </Typography>
      <Typography paragraph>
        These Terms and your use of the website are governed by the laws of the country of operation, without regard to its conflict of law principles.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Changes to Terms of Use
      </Typography>
      <Typography paragraph>
        boltsdb.com reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms at any time. It is your responsibility to check these Terms periodically for changes.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Contact Information
      </Typography>
      <Typography paragraph>
        If you have any questions or suggestions about these Terms, please contact us at admin@boltsdb.com.
      </Typography>
    </Container>
  );
};

export default TermsOfUse;
