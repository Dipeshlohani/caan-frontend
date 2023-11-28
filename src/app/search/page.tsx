'use client';
import React, { useState } from 'react';
import { Container, Typography, Box, Divider, Button, TextField, Paper } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Layout from "@/components/layout";
import CallToAction from '@/components/cta';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { InstantSearch, Hits, Stats, SearchBox } from 'react-instantsearch';
import { useInstantSearch, useSearchBox } from 'react-instantsearch';

import SearchBar from "./SearchBar"

import SearchIcon from '@mui/icons-material/Search';

const searchClient = instantMeiliSearch(
  'http://localhost:7700/', // Host
  'SDj-iFrEiDstQrijYQoHdyk2aKxT8rpvONyME24a-kk', // API key
  {}
)

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    // Perform your custom search logic using searchQuery
    // Update your search results accordingly
    try {
      // Use the MeiliSearch client to perform a search
      const searchResults = await searchClient.search('activity', searchQuery);

      // Log the search results for now (you should update your state or do something meaningful)
      console.log('Search Results:', searchResults);
    } catch (error) {
      console.error('Error during search:', error.message);
      // Handle errors as needed
    }
  };

  return (
    <Layout>
      <Container>
        <InstantSearch indexName="activity" searchClient={searchClient}>
          {/* Search Bar */}
          {/* <SearchBox /> */}
          <SearchBar />
          {/* <Box display="flex" alignItems="center" justifyContent="space-between" mt={5} mb={3}>
            <TextField
              label="Search now"
              variant="outlined"
              placeholder="Search now"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{ endAdornment: <SearchIcon color="primary" onClick={handleSearch} /> }}
            />
            <Button variant="contained" color="primary" sx={{ marginLeft: 2 }} onClick={handleSearch}>
              Search Now
            </Button>
          </Box> */}
          {/* Search Results Header */}
          <Typography variant="h5" gutterBottom>
            Showing search results for - Civil Airlines section
          </Typography>
          {/* Search Results */}
          <Paper elevation={0} sx={{ p: 2 }}>
            <Stats />
            <Hits hitComponent={Hit} />
          </Paper>

          {/* Dotted Divider Line */}
          <Divider sx={{ mb: 2 }} />
        </InstantSearch>
      </Container>
      <CallToAction />
    </Layout>
  );
};

function Hit(props) {
  console.log(props);
  return (
    <div key={props.hit.id}>
      <Box display="flex" alignItems="center" mb={2}>
        <img src={'http://localhost:1337' + props.hit.img_url.url} alt="Result 1" style={{ width: 100, height: 100, marginRight: 2 }} />
        <Typography variant="body1">
          {props.hit.description.substr(0, 150)}
        </Typography>
      </Box>

      {/* Divider Line */}
      <Divider sx={{ my: 2 }} />
    </div>
  );
}

export default Search;
