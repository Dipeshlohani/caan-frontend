import React from "react";
import Link from "next/link";

import {
  Box,
  Container,
  Grid,
  Divider,
  Typography,
  Stack
} from "@mui/material";
import FacebookIcon from "../../assets/Icons/facebookIcon";
import TwitterIcon from "../../assets/Icons/twitterIcon";
import YoutubeIcon from "../../assets/Icons/youtubeIcon";
import LinkedInIcon from "../../assets/Icons/linkedinIcon";

const styles = {
  footerTextHeading: {
    color: "white",
  },
  footerTextAction: {
    color: "#e0e0e0",
    cursor: "pointer",
    lineHeight: "30px",
    fontWeight: "200",
    textDecoration:"none"

  },
  contentRow: {
    display: "flex",
    flexDirection: "column",
    "& .MuiButton-root": {
      justifyContent: "flex-start",
      width: '100%',
    },
  },
};

const GeneralFooter = () => {
  return (
    <>
      <Box
        style={{
          backgroundColor: "#2161cd",
        }}
        mt={5}
        pb={5}
      >
        <Container maxWidth="lg">
          <Grid container display="flex" pt={6} spacing={6}>
            <Grid item xs={12} md={4}>
              <Box
                display={{ xs: "flex", md: "block" }}
                flexDirection="column"
                alignItems="center"
              >
                <Box display="flex" alignItems="center" pb={2}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", lg: "flex" },
                      fontWeight: 700,
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    About ANSSD
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={styles.footerTextHeading}
                  style={{
                    lineHeight: "30px",
                    fontWeight: "200",
                    color: "#e0e0e0",
                  }}
                >
                  Mauris fringilla venenatis nisi nec ultrices. Nam iaculis tempus sem sit amet convallis. Sed vel sapien ultricies, congue lacus a, venenatis tortor.Ut non odio lacus.
                </Typography>
                <Stack direction="row" alignItems="center" spacing={4} pt={3}>
      <Box sx={{ bgcolor: 'white', borderRadius: '10%', padding: '5px' }}>
       <Link href="https://www.facebook.com" target="blank"><FacebookIcon /></Link> 
      </Box>
      <Box sx={{ bgcolor: 'white', borderRadius: '10%', padding: '5px' }}>
      <Link href="https://www.twitter.com" target="blank"> <TwitterIcon /></Link> 
      </Box>
      <Box sx={{ bgcolor: 'white', borderRadius: '10%', padding: '5px' }}>
       <Link href="https://www.youtube.com" target="blank">  <YoutubeIcon /></Link>
      </Box>
      <Box sx={{ bgcolor: 'white', borderRadius: '10%', padding: '5px' }}>
         <Link href="https://www.linkedin.com" target="blank"><LinkedInIcon />   </Link>

      </Box>
    </Stack>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              order={{ xs: 1, md: 2 }}
              display="flex"
              justifyContent="space-between"
              minWidth="800px"
             
            >
              <Grid container>
                <Grid item xs={6} md={4} sx={styles.contentRow}>
                  <Typography
                     pb={2}
                     variant="h6"
                     noWrap
                     component="a"
                     href="/"
                     sx={{
                       mr: 2,
                       display: { xs: 'none', lg: 'flex' },
                       fontWeight: 700,
                       color: 'white',
                       textDecoration: 'none',
                    }}
                  >
                    Most Viewed
                  </Typography>

                  <Typography variant="body1">
                  <Link href="/teams"  style={styles.footerTextAction }  >
                  Our Team
                  </Link>
                  </Typography>
                  <Typography variant="body1" >
                    <Link href="/about-us" style={styles.footerTextAction }>
                    Who we Are
                  </Link>
                  </Typography>
                  <Typography variant="body1" >
                    <Link href="/activities" style={styles.footerTextAction }>
                    What We Do
                  </Link>
                  </Typography>
                  <Typography variant="body1" >
                     <Link href="/safety" style={styles.footerTextAction }>
                     Operation & Safety
                  </Link>
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                     Personal Licensing
                   </Typography>
                </Grid>
                <Grid item xs={6} md={5} sx={styles.contentRow}>
                  <Typography
                    pb={2}
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", lg: "flex" },
                      fontWeight: 700,
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    About Website
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Copyright
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Privacy Policy
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Disclaimer
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Accessibility
                  </Typography>
                </Grid>

                <Grid item xs={6} md={3} sx={{marginLeft:'-100px', minWidth:'280px'}}>
      <Typography
        pb={2}
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', lg: 'flex' },
          fontWeight: 700,
          color: 'white',
          textDecoration: 'none',
        }}
      >
                    Documents
                  </Typography>
                  <Typography variant="body1" >
                    <Link href="/documents" style={styles.footerTextAction }>
                    Civil Aviation Act,2015
                  </Link>
                  </Typography>
                  <Typography variant="body1" >
                     <Link href="/documents" style={styles.footerTextAction }>
                     Civil Aviation Authority Act
                  </Link>
                  </Typography>
                  <Typography variant="body1" >
                    <Link href="/documents" style={styles.footerTextAction }>
                    Civil Aviation Security Rule 2016
                    </Link>
                  </Typography>
                  <Typography variant="body1" >
                     <Link href="/documents" style={styles.footerTextAction }>
                     Civil Aviation Security Rule - English 
                     </Link>
                  </Typography>
                  <Typography variant="body1" >
                    <Link href="/documents" style={styles.footerTextAction }>
                    Various SOPs 
                     </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#2161cd",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ paddingTop: "25px", paddingBottom: "40px" }}
        >
          <Divider sx={{ backgroundColor: "#fff" }} />
        </Container>
        <Typography
          pb={10}
          align="center"
          variant="body2"
          color="text.primary"
          sx={styles.footerTextHeading}
        >
          Copyright © 2023 - All Rights Reserved
        </Typography>
      </Box>
    </>
  );
};

export default GeneralFooter;
