'use client';
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Layout from "@/components/layout"
import CallToAction from "@/components/cta";

const OurTeam = () => {
  const [teamData, setTeamData] = useState({
    FirstLevel: [],
    SecondLevel: [],
    ThirdLevel: [],
    FourthLevel: []
  });
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/team-page?populate[0]=FirstLevel.duties&populate[1]=FirstLevel.img_url&populate[2]=SecondLevel.duties&populate[3]=SecondLevel.img_url&populate[4]=ThirdLevel.duties&populate[5]=ThirdLevel.img_url&populate[6]=FourthLevel.duties&populate[7]=FourthLevel.img_url")
      .then((response) => response.json())
      .then((data) => {
        setTeamData(data.data.attributes);
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
    <Layout>
      <StyledContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{
          color: "black",
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "35px 0",
        }}>
          Our Team
        </Typography>
        <Grid container spacing={6} sx={{
          padding: "5px 0", position: "relative",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          margin: "10 auto",
        }}>
          {teamData.FirstLevel?.map((teamItem, index) => (
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
                    src={`http://localhost:1337${teamItem.img_url.data.attributes.url}`}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Typography variant="h5" sx={{ color: "black", marginTop: 2 }}>
                  {teamItem.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#2161CD",
                    fontWeight: 'bold',
                    fontSize:'14px',
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic'}}>
                  {teamItem.designation}
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
                    {teamItem.duties.map((goalItem) => (
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
        <Grid container spacing={6} sx={{ padding: "55px 0", position: "relative", margin: "9 auto", }}>
          {teamData.SecondLevel?.map((teamItem, index) => (
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
                    src={`http://localhost:1337${teamItem.img_url.data.attributes.url}`}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Typography variant="h5" sx={{ color: "black", marginTop: 2 }}>
                  {teamItem.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#2161CD",
                    fontWeight: 'bold',
                    fontSize:'14px',
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic'}}>
                  {teamItem.designation}
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
                    {teamItem.duties.map((goalItem) => (
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
        <Grid container spacing={6} sx={{
          padding: "5px 0", position: "relative", margin: "10 auto", justifyContent: "center", // Center horizontally
          alignItems: "center",
        }}>
          {teamData.ThirdLevel?.map((teamItem, index) => (
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
                    src={`http://localhost:1337${teamItem.img_url.data.attributes.url}`}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Typography variant="h5" sx={{ color: "black", marginTop: 2 }}>
                  {teamItem.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#2161CD",
                    fontWeight: 'bold',
                    fontSize:'14px',
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic'}}>
                  {teamItem.designation}
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
                    {teamItem.duties.map((goalItem) => (
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
        <Grid container spacing={6} sx={{
          padding: "55px 0", position: "relative", margin: "10 auto", justifyContent: "center", // Center horizontally
          alignItems: "center",
        }}>
          {teamData.FourthLevel?.map((teamItem, index) => (
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
                    src={`http://localhost:1337${teamItem.img_url.data.attributes.url}`}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Typography variant="h5" sx={{ color: "black", marginTop: 2 }}>
                  {teamItem.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#2161CD",
                    fontWeight: 'bold',
                    fontSize:'14px',
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic'
                    }}>
                  {teamItem.designation}
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
                    {teamItem.duties.map((goalItem) => (
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
      <CallToAction />
    </Layout>
  );
};

export default OurTeam;