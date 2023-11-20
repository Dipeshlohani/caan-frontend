import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import Layout from "@/components/layout";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'; import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const ContactUsPage = () => {
  return (
    <Layout>
      <Container>
        <Grid container spacing={3}>
          {/* Left Column - Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ padding: 3, height: '100%' }}>
              <Typography variant="h2" gutterBottom>
                Contact Us
              </Typography>
              <form>
                <TextField label="Full Name" fullWidth margin="normal" />
                <TextField label="Contact Number" fullWidth margin="normal" />
                <TextField label="Email Address" fullWidth margin="normal" />
                <TextField
                  label="Message, Query, Feedback, or Concern"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                />
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Right Column - Contact Details and Social Media */}
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ padding: 3, margin: 3 }}>
              <Typography variant="h5" gutterBottom>
                Contact Details
              </Typography>
              <Typography><PlaceIcon /> Sinamangal, Airport Side, Bagmati Province, Nepal</Typography>
              <Typography><PhoneOutlinedIcon /> 0123-45678</Typography>
              <Typography><MailOutlinedIcon /> contact@website.com</Typography>
              <Typography><LanguageOutlinedIcon /> www.website.com</Typography>
            </Paper>
            <Paper elevation={1} sx={{ padding: 3, margin: 3 }}>
              <Typography variant="h5" gutterBottom>
                Follow Us
              </Typography>
              {/* Add social media logos or icons here */}
              {/* Example: */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                {/* Add more social media logos */}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Google Map */}
        <Box sx={{ mt: 3 }}>
          {/* Embed Google Map here */}
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?..."
            allowFullScreen
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactUsPage;
