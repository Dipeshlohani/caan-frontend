"use client";
import React from "react";
import ActivityBox from "./ActivityBox";
import { Box, Container } from "@mui/material";
import Activities from "./Activities";
import NewsLetter from "./NewsLetter";
// import Footer from "./Footer";

const Home = () => {
  return (
    <Box>
      <ActivityBox />
      <Container maxWidth="lg">
        <Activities />
      </Container>
      <NewsLetter />
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;
