import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import Layout from "@/components/layout";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CallToAction from '@/components/cta';

const ContactUsPage = () => {
  return (
    <Layout>
      <Container>
        <Grid container spacing={3}>
          {/* Left Column - Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ padding: 3, height: '100%', margin: '30px 0' }}>
              <Typography variant="h2" gutterBottom >
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
                <Button variant="contained" color="primary" sx={{ marginTop: 2, float: 'right' }}>
                  Send Now <ArrowForwardIcon sx={{ fontSize: '20px' }} />
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PlaceIcon sx={{ color: "#2161CD" }} />
                <Typography sx={{ lineHeight: '1.5' }}>Sinamangal, Airport Side, Bagmati Province, Nepal</Typography>

              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneOutlinedIcon sx={{ color: "#2161CD" }} />
                <Typography sx={{ lineHeight: '3.5' }}>0123-45678</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <MailOutlinedIcon sx={{ color: "#2161CD" }} />
                <Typography sx={{ lineHeight: '3.5' }}>contact@website.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LanguageOutlinedIcon sx={{ color: "#2161CD" }} />
                <Typography sx={{ lineHeight: '3.5' }}>www.website.com</Typography>
              </Box>
            </Paper>
            <Paper elevation={1} sx={{ padding: 3, margin: 3 }}>
              <Typography variant="h5" gutterBottom>
                Follow Us
              </Typography>
              {/* Add social media logos or icons here */}
              {/* Example: */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FacebookIcon style={{ backgroundColor: 'blue', color: 'white', padding: '5px', borderRadius: '50%', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: 'white', borderRadius: '50%', width: '100%', height: '100%' }}></div>
                </FacebookIcon>
                <TwitterIcon style={{ backgroundColor: 'blue', color: 'white', padding: '5px', borderRadius: '50%', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: 'white', borderRadius: '50%', width: '100%', height: '100%' }}></div>
                </TwitterIcon>
                <InstagramIcon style={{ backgroundColor: 'blue', color: 'white', padding: '5px', borderRadius: '50%', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: 'white', borderRadius: '50%', width: '100%', height: '100%' }}></div>
                </InstagramIcon>
                {/* Add more social media logos */}
              </Box>


            </Paper>
          </Grid>



        </Grid>

  

export default ContactUsPage;

        {/* Google Map */}
        <Box sx={{ mt: 3 }}>
          {/* Embed Google Map here */}
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0, margin: "50px 0" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28261.153619257002!2d85.31669647431637!3d27.6973896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b4e8269a37%3A0xaeee50daced235d0!2scivil%20aviation%20authority%20of%20nepal!5e0!3m2!1sen!2snp!4v1703491017480!5m2!1sen!2snp"
            allowFullScreen
          />

        </Box>
      </Container>
      <CallToAction />
    </Layout>
  );
};

export default ContactUsPage;
