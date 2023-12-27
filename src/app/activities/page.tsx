"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import Activities from "./Activities";
import CallToAction from "@/components/cta";
import Layout from "@/components/layout";
// import Footer from "./Footer";

const Activity = () => {
  return (
    <Layout>
      {/* <ActivityBox /> */}
      <Container maxWidth="lg">
        <Activities />
      </Container>
      {/* <Footer /> */}
      <CallToAction />
    </Layout>
  );
};

export default Activity;
