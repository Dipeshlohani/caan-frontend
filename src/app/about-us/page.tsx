'use client';
import React, { useEffect, useState } from "react";
import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';

const Container = styled('div')({
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
    Promise.all([
    fetch("http://localhost:1337/api/about-us?populate=*"),
    fetch("http://localhost:1337/api/teams?populate=*")
  ])
      .then((responses) => Promise.all(responses.map((res => res.json())))
      .then(([aboutUsData, teamsData]) => {

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
      }));

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
<Container >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <img src={aboutUsData.img_url} alt="image" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
          <Typography variant="h4" sx={{ marginBottom: '10px', color:'black', font:'24px', weight:'bold',}}>
            {aboutUsData.title}
          </Typography> 
          
          <Typography variant="body1" sx={{color:'black'}}>
            {aboutUsData.description}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="h6" sx={{color:'black'}}>Our Mission</Typography>
            <Typography variant="body1" sx={{color:'black'}}>{aboutUsData.mission}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="h6" sx={{color:'black'}}>Our Vision</Typography>
            <Typography variant="body1" sx={{color:'black'}}>{aboutUsData.vision}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="h6" sx={{color:'black'}}>Our Goal</Typography>
            <Typography variant="body1" sx={{color:'black'}}>{aboutUsData.goal}</Typography>
          </div>
        </Grid>
      </Grid>

         <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ marginBottom: '10px', color: 'black', fontWeight: 'bold' }}>
          Message from Our Head
        </Typography>
        <Typography variant="body1" sx={{ color: 'black' }}>
          {aboutUsData.chairman_msg}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'black' }}>
          {aboutUsData.chairman_name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ background: '#2161CD', width: '100%', height: '100%', position: 'absolute', zIndex: -1 }} />
        <img src={aboutUsData.chairman_img_url} alt="image" style={{ width: '100%', height: 'auto' }} />
      </Grid>
    </Grid>

      <Typography variant="h2">
        Our Team
      </Typography>

      <Grid container spacing={2}>
        {teamData.map((teamItem, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
              <img src={`http://localhost:1337${teamItem.attributes.img_url.data.attributes.url}`} alt="image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <Typography variant="h5" sx={{ color: 'black' }}>
              {teamItem.attributes.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'blue' }}>
              {teamItem.attributes.designation}
            </Typography>
            {hoveredMember === index && (
              <ul style={{color:'black'}}>
               <div style={{color:'black'}}>Roles</div> 
                {teamItem.attributes.role.map((goalItem) => (
                  <li key={goalItem.id}>{goalItem.name}</li>
                ))}
              </ul>
            )}
          </Grid>
        ))}
      </Grid>


    </Container>
  );
};

export default AboutUs;