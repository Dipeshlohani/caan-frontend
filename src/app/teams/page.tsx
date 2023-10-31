'use client';
import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/teams?populate=*")
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
    <Grid container spacing={2}>
      {teamData.map((teamItem, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          onMouseEnter={() => setHoveredMember(index)}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
            <img src={`http://localhost:1337${teamItem.attributes.img_url.data.attributes.url}`} alt="image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <Typography variant="h5" style={{ color: 'black', textAlign: 'center' }}>
            {teamItem.attributes.name}
          </Typography>
          <Typography variant="subtitle1" style={{ color: 'blue', textAlign: 'center' }}>
            {teamItem.attributes.designation}
          </Typography>
          {hoveredMember === index && (
            <ul style={{ color: 'black', textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ fontWeight: 'bold' }}>Roles:</li>
              {teamItem.attributes.role.map((goalItem) => (
                <li key={goalItem.id}>{goalItem.name}</li>
              ))}
            </ul>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default OurTeam;



// pagination = http://localhost:1337/api/our-teams?populate=TeamImage&pagination[page]=1&pagination[pageSize]=2