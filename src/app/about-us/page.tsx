'use client';
import React, { useEffect, useState } from "react";
import { styled, ThemeProvider, createTheme } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import SubsribeBanner from "@/components/subscribe";
import CallToAction from "@/components/cta";
import Layout from "@/components/layout";

import { Seaweed_Script, Rammetto_One } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const seaweed_script = Seaweed_Script({ weight: '400', subsets: ['latin'] })
const rammetto_one = Rammetto_One({ weight: '400', subsets: ['latin'] })

const StyledContainer = styled(Container)({
  paddingLeft: '250px', // Add space on the left
  paddingRight: '250px',
  font: 'inter',
});

const AboutUs = () => {
  const [teamData, setTeamData] = useState([]);
  const [aboutUsData, setAboutUsData] = useState({
    chairman_img_url: "",
    chairman_msg: "",
    chairman_name: '',
    description: "",
    mission: "",
    goal: "",
    title: "",
    vision: "",
    img_url: ""
  });
  const [hoveredMember, setHoveredMember] = useState(null);
  useEffect(() => {
    fetch("http://localhost:1337/api/about-us?populate=*")
      .then(res => res.json())
      .then((aboutUsData) => {
        setAboutUsData({
          chairman_img_url: 'http://localhost:1337' + aboutUsData.data.attributes.chairman_img_url.data.attributes.url,
          chairman_msg: aboutUsData.data.attributes.chairman_msg,
          chairman_name: aboutUsData.data.attributes.chairman_name,
          description: aboutUsData.data.attributes.description,
          mission: aboutUsData.data.attributes.mission,
          goal: aboutUsData.data.attributes.goal,
          title: aboutUsData.data.attributes.title,
          vision: aboutUsData.data.attributes.vision,
          img_url: 'http://localhost:1337' + aboutUsData.data.attributes.img_url.data.attributes.url
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("http://localhost:1337/api/teams?populate=*&pagination[page]=1&pagination[pageSize]=8")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of team items
        setTeamData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Layout>
      <StyledContainer >
        <Grid container spacing={2} sx={{ padding: '70px 0' }}>
          <Grid item xs={12} sm={6} md={4}>
            <img src={aboutUsData.img_url} alt="image" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <Typography variant="h4" sx={{ marginBottom: '10px', color: 'black', font: '24px', weight: 'bold', }}>
              {aboutUsData.title}
            </Typography>

            <Typography variant="body1" sx={{ color: 'black', lineHeight: '38px' }}>
              {aboutUsData.description}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: '35px 0' }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ margin: 1, border: "1px solid #C7C7C7", padding: 2, borderRadius: '9px', height: '330px' }}>
              <Typography variant="h6" sx={{ color: "black", fontWeight: '750' }}>Our Mission</Typography>
              <Typography variant="body1" sx={{ color: "black", lineHeight: '41.28px', padding: '20px 0px' }}>{aboutUsData.mission}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ margin: 1, border: "1px solid #C7C7C7", padding: 2, borderRadius: '9px', height: '330px' }}>
              <Typography variant="h6" sx={{ color: "black", fontWeight: '750' }}>Our Vision</Typography>
              <Typography variant="body1" sx={{ color: "black", lineHeight: '41.28px', padding: '20px 0px' }}>{aboutUsData.vision}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ margin: 1, border: "1px solid #C7C7C7", padding: 2, borderRadius: '9px', height: '330px' }}>
              <Typography variant="h6" sx={{ color: "black", fontWeight: '750' }}>Our Goal</Typography>
              <Typography variant="body1" sx={{ color: "black", lineHeight: '41.28px', padding: '20px 0px' }}>{aboutUsData.goal}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: '35px 0' }}>
          <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" sx={{ marginBottom: '10px', color: 'black', fontWeight: 'bold' }}>
              Message from Department Head
            </Typography>
            <Typography
                className={rammetto_one.className}
                sx={{
                  fontFamily: 'Rammetto One',
                  fontWeight: '600', 
                  fontSize: '90px', 
                  color: '#DFDDDD',
                  marginBottom: '-40px'
                }}
              >
                “
              </Typography>

            <Typography variant="body1" sx={{ color: 'black', lineHeight: '41.28px' }}>
              {aboutUsData.chairman_msg}
            </Typography>
            <Typography className={seaweed_script.className} variant="subtitle1" sx={{ position: 'relative', right: '-330px', color: '#9C9C9C', fontFamily: 'Seaweed Script', fontSize: '25px', padding: '40px 300px' }}>
             <>-</> {aboutUsData.chairman_name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} style={{ position: 'relative', padding: '70px 0' }}>
            <div style={{ background: '#2161CD',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', width: '100%', height: 'auto', position: 'absolute', zIndex: -1, borderRadius: '9px', padding: '230px 0' }} />
            <img src={aboutUsData.chairman_img_url} alt="image" style={{ width: '100%', height: '560px', position: 'relative', top: '-100px' }} />
          </Grid>
        </Grid>


        <Typography style={{ color: 'black', fontSize: '40px', fontWeight: 'bold', textAlign: 'center', padding: '35px 0' }}>
          Our Team
        </Typography>


        <Grid container spacing={6} sx={{ padding: '5px 0', position: 'relative' }}>
          {teamData.map((teamItem, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              sx={{ position: 'relative' }}
            >
              <Box sx={{ border: "1px solid #C7C7C7",height:"210px",width: "200px", padding: 5, borderRadius: 4, display: "flex", flexDirection: "column", alignItems: "center", position: 'relative' }}>
                <div style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", margin: "0 auto" }}>
                  <img src={`http://localhost:1337${teamItem.attributes.img_url.data.attributes.url}`} alt="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <Typography variant="h5" sx={{ color: "black", marginTop: 2 }}>
                  {teamItem.attributes.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    marginTop: '4px',
                    color: "#2161CD",
                    fontWeight: 'normal',
                    fontSize:'16px',
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic',
                    letterSpacing: '0.05rem'
                  }}
                >
                  {teamItem.attributes.designation}
                </Typography>

              </Box>
              {hoveredMember === index && (
                <Box
                  sx={{
                    boxShadow: '0px 2px 15px 0px #00000040',
                    padding: 2,
                    marginTop: 1,
                    borderRadius: 4,
                    position: 'absolute',
                    top: '70px',
                    left: '230px',
                    backgroundColor: 'white',
                    width: '200px',
                    zIndex: 9999 // Set a high zIndex value
                  }}
                >
                  <Typography variant="body1" sx={{ color: "#2161CD", padding: '0px' }}>Duties & Roles</Typography>
                  <ul style={{ color: "black", listStyle: "none", padding: '0px 10px', listStyleType: 'disc' }}>
                    {teamItem.attributes.role.map((goalItem) => (
                      <li key={goalItem.id} style={{ padding: 1 }}>{goalItem.name}</li>
                    ))}
                  </ul>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
      <CallToAction />
    </Layout >
  );
};

export default AboutUs;