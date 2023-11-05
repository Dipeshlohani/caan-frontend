<<<<<<< HEAD
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
=======
'use client';
import CardSlider from "../../components/slider";
import { Card } from "@/components/card/dashboard/Card";
import { TbPlaneTilt } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { CiServer } from "react-icons/ci";


const sampleData = [
  { Icon: TbPlaneTilt, title: "Air Traffic System" },
  { Icon: RiComputerLine, title: "Airport Info System" },
  { Icon: CiServer, title: "Central Navigation System" },
  { Icon: FaPlaneDeparture, title: "Search And Rescue" },
  { Icon: TbPlaneTilt, title: "Something Traffic System" },
  { Icon: TbPlaneTilt, title: "Next Traffic System" },
]
export default function Activities() {
  return (
    <>
      <CardSlider>
        {
          sampleData.map(item => (
            <Card key={item.title} Icon={item.Icon} title={item.title} />
          ))
        }
      </CardSlider>
      <style jsx global>{`
        @import "~slick-carousel/slick/slick.css"; 
        @import "~slick-carousel/slick/slick-theme.css";
       
         `}
      </style>
    </>
  )
}
>>>>>>> 292b7c6a680a79919be369d91b7ff94baae2cfe2
