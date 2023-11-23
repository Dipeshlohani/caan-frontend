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
  const items = ["a.png", "b.png", "c.png","d.png","e.png","f.png","g.png","h.png"];
  const text = [
    "Civil Airlines is the highway of the best thing in Nepal in 2023",
    " The existence of independent external audit, and the accompanying potential for scrutiny improves performance  ",
    "Pellentesque eget fringilla quam. In sit amet auctor dui, at dictum quam. Cras nisl ligula, dapibus eu lorem vitae, porttitor tincidunt eros.",
    "Quisque gravida augue in lacus eleifend, id bibendum enim viverra. Ut vel pharetra arcu, id consectetur quam.",
    "Morbi vitae libero non libero scelerisque sollicitudin vel eu eros. Pellentesque lobortis urna sit amet purus laoreet pellentesque.",
    "Civil Airlines is the highway of the best thing in Nepal in 2023",
    "Quisque pretium, est vitae tempor pharetra, ex mauris aliquet enim, et lacinia enim nisl a urna.",
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
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
              marginRight: "30px",
              textAlign: "center",
              marginBottom: "50px",
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
            <div style={{display: 'flex', alignItems: 'center', gap: '20px' }}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                  <li key={index}>
                    {
                      <img
                        src={item} // Replace with the actual image path
                        alt="Civil Airlines Image"
                        style={{
                          maxWidth: "200px",
                          maxHeight: "87px",
                          margin: "0 60px 0 0",
                        }}
                      />
                    }
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul style={{ padding: " 0 0 0 0 ", listStyleType: "none" }}>
                {text.map((text, textindex) => (
                  <li style={{ padding: "30px 0 0 0 " }} key={textindex}>
                    {
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0em",
                          textAlign: "center",
                          margin: "30px 0 0 0",
                          // Adjust as needed
                        }}
                      >
                        {text}
                      </Typography>
                    }
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
