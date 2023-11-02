'use client';
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/teams?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setTeamData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const StyledContainer = styled(Container)({
    paddingLeft: "250px",
    paddingRight: "250px",
    font: "inter",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <StyledContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>
        <div
          style={{
            color: "black",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "35px 0",
          }}
        >
          Our Team
        </div>
      </Typography>
      <Grid container spacing={6} sx={{ padding: "5px 0", position: "relative" }}>
        {teamData.map((teamItem, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={teamItem.id}
            onMouseEnter={() => setHoveredMember(teamItem)}
            onMouseLeave={() => setHoveredMember(null)}
            sx={{ position: "relative" }}
          >
            <Box
              sx={{
                border: "1px solid #C7C7C7",
                padding: 5,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                width: "180px",
                height: "180px",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto",
                }}
              >
                <img
                  src={`http://localhost:1337${teamItem.attributes.img_url.data.attributes.url}`}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Typography variant="h5" sx={{ color: "black", marginTop: 2 }}>
                {teamItem.attributes.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "blue" }}>
                {teamItem.attributes.designation}
              </Typography>
            </Box>
            {hoveredMember === teamItem && (
              <Box
                sx={{
                  boxShadow: "0px 2px 15px 0px #00000040",
                  padding: 2,
                  marginTop: 1,
                  borderRadius: 4,
                  position: "absolute",
                  top: "70px",
                  left: "230px",
                  backgroundColor: "white",
                  width: "200px",
                  zIndex: 9999,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#2161CD", padding: "0px" }}
                >
                  Duties & Roles
                </Typography>
                <ul
                  style={{
                    color: "black",
                    listStyle: "none",
                    padding: "0px 10px",
                    listStyleType: "disc",
                  }}
                >
                  {teamItem.attributes.role.map((goalItem) => (
                    <li key={goalItem.id} style={{ padding: 1 }}>
                      {goalItem.name}
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default OurTeam;


{/* <Box sx={{ border: "1px solid #C7C7C7", padding: 5, borderRadius: 4, display: "flex", flexDirection: "column", alignItems: "center", position: 'relative', width: '180px', height: '180px' }}>
<div style={{ width: "100px", height: "100px", borderRadius: "50%", overflow: "hidden", margin: "0 auto"}}>
  <img src={`http://localhost:1337${teamItem.attributes.img_url.data.attributes.url}`} alt="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>
<Typography variant="h5" sx={{ color: "black", marginTop: 2 }}>
  {teamItem.attributes.name}
</Typography>
<Typography variant="subtitle1" sx={{ color: "blue" }}>
  {teamItem.attributes.designation}
</Typography>
</Box> */}
// pagination = http://localhost:1337/api/our-teams?populate=TeamImage&pagination[page]=1&pagination[pageSize]=2