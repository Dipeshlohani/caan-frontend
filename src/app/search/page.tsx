"use client";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import Layout from "@/components/layout";
import CallToAction from "@/components/cta";
import SearchPageStyles from "@/components/search/search.module.css";
import Pagination from "@mui/material/Pagination";
import { InputAdornment } from "@mui/material";

const SearchContainer = styled(Box)(SearchPageStyles.searchContainer);

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Add your search logic here
    console.log("Searching for:", searchQuery);
    // Example: Set state or perform other actions based on the search query
  };

  const data = [
    { image: "a.png", text: "Civil Airlines is the highway of the best thing in Nepal in 2023" },
    { image: "b.png", text: "The existence of independent external audit, and the accompanying potential for scrutiny improves performance" },
    { image: "c.png", text: "Pellentesque eget fringilla quam. In sit amet auctor dui, at dictum quam. Cras nisl ligula, dapibus eu lorem vitae, porttitor tincidunt eros." },
    { image: "d.png", text: "Quisque gravida augue in lacus eleifend, id bibendum enim viverra. Ut vel pharetra arcu, id consectetur quam" },
    { image: "e.png", text: "Morbi vitae libero non libero scelerisque sollicitudin vel eu eros. Pellentesque lobortis urna sit amet purus laoreet pellentesque" },
    { image: "f.png", text: "Civil Airlines is the highway of the best thing in Nepal in 2023" },
    { image: "g.png", text: "Quisque pretium, est vitae tempor pharetra, ex mauris aliquet enim, et lacinia enim nisl a urna." },
    { image: "h.png", text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos" },
  ];
  return (
    <Layout>
      <Container>
        {/* SearchContainer to center the search design on the page */}
        <SearchContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: "50vh",
              margin: "1px 0px 0px 0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            ></Box>
            <TextField
              id="search"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ width: "50%", marginRight: "10px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ width: "80px", height: "40px", borderRadius: "0" }}
            >
              Search Now
            </Button>
          </Box>

          {/* Text above search results */}
          <Typography
            sx={{
              marginTop: -10,
              width: "476px",
              height: "29px",
              fontSize: "25px",
              marginRight: "10px",
              textAlign: "center",
              marginBottom: "20px",
              borderBottom: "1px dashed #ccc",
              mb: 2,
            }}
          >
            Showing search results for - Civil Airlines
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px'}}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {data.map((item, index) => (
                  <li key={index}>
                    <img
                      src={item.image}
                      alt={`Image ${index}`}
                      style={{
                        maxWidth: "200px",
                        maxHeight: "87px",
                        margin: "0 60px 0 0",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul style={{ padding: " 0 0 0 0 ", listStyleType: "none" }}>
                {data.map((item, index) => (
                  <li style={{ padding: "30px 0 0 0 " }} key={index}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: "25px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        margin: "30px 0 0 0",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Pagination count={5} color="primary" />
          </Box>
        </SearchContainer>
      </Container>
      <CallToAction />
    </Layout>
  );
};
export default SearchPage;
