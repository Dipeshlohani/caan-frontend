'use client';
import React, { useState } from 'react';
import { Container, Typography, Box, Divider, Button, TextField, Paper } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Layout from "@/components/layout";
import CallToAction from '@/components/cta';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { InstantSearch } from 'react-instantsearch';
import { useHits } from 'react-instantsearch';

import SearchBar from "./SearchBar"

import SearchIcon from '@mui/icons-material/Search';

const searchClient = instantMeiliSearch(
  'http://localhost:7700/', // Host
  'SDj-iFrEiDstQrijYQoHdyk2aKxT8rpvONyME24a-kk', // API key
  {
  }
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
          <SearchBar />
          {/* Search Results Header */}
          <Typography variant="h5" gutterBottom>
            Showing search results for - Civil Airlines section
          </Typography>
          {/* Search Results */}
          <Paper elevation={0} sx={{ p: 2 }}>
            <CustomHits />
          </Paper>

          {/* Dotted Divider Line */}
          <Divider sx={{ mb: 2 }} />
        </InstantSearch>
      </Container>
      <CallToAction />
    </Layout>
  );
};

function CustomHits(props) {
  const { hits, sendEvent } = useHits(props);
  return (
    <ol style={{ textDecoration: 'none' }}>
      {hits.map((hit) => (
        <>
          <Box display="flex" alignItems="center" mb={2}>
            <img src={'http://localhost:1337' + hit?.img_url?.url} alt="Result 1" style={{ width: 100, height: 90, marginRight: 2 }} />
            <Typography variant="body1" sx={{ p: 3 }}>
              {hit.description?.substr(0, 150)}
            </Typography>
            {/* Divider Line */}
          </Box>
          <Divider sx={{ my: 2 }} />
        </>

      ))}
    </ol>
  );
}

export default Search;
