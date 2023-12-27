import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  Grid,
  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutUs = ({ about_us }) => {
  return (
    <Box
      sx={{
        pb: { xs: "3rem", md: "4.5rem" },
        pt: { xs: "4rem", md: "8.75rem" },
      }}
    >
      <Container maxWidth="lg">
        <Card>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5.5}>
              <img
                src={
                  "http://localhost:1337" +
                  about_us.img_url?.data.attributes.url
                }
                alt=""
                style={{
                  borderRadius: "0.938rem",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6.5}>
              <Box sx={{ mt: 3.25, mb: 2.5 }}>
                <Typography variant="h6" color="primary">
                  {about_us.title}
                </Typography>
                <Typography variant="h2">{about_us.subtitle}</Typography>
              </Box>
              <Typography variant="body2">{about_us.description}</Typography>
              <Stack direction="row" justifyContent="flex-end" sx={{ pt: 3 }}>
                <Button
                  href="/about-us"
                  variant="text"
                  endIcon={<ArrowForwardIcon />}
                >
                  Read More
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutUs;
