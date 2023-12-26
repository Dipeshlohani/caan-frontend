'use client';
import React, { useState } from 'react';
import { Container, Typography, Box, Divider, Button, TextField, Paper } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Layout from "@/components/layout";
import CallToAction from '@/components/cta';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { InstantSearch, Index } from 'react-instantsearch';
import { useHits } from 'react-instantsearch';

import SearchBar from "./SearchBar"

import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const searchClient = instantMeiliSearch(
  'http://localhost:7700/', // Host
  'SDj-iFrEiDstQrijYQoHdyk2aKxT8rpvONyME24a-kk',
  {
    placeholderSearch: false,
    future: {
      preserveSharedStateOnUnmount: false
    }
  }
)

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState('activity');

  const handleIndexChange = (newIndex) => {
    setSelectedIndex(newIndex);
  };

  return (
    <Layout>
      <Container>
        <InstantSearch indexName={selectedIndex} searchClient={searchClient}>
          {/* Search Bar with Index Dropdown */}
          <SearchBar onIndexChange={handleIndexChange} />
          {/* Search Results Header */}

          {/* Search Results */}
          <Paper elevation={0} sx={{ p: 2 }}>
            <CustomHits />
          </Paper>
          <Index indexName="document-category">
            <CustomHits />
          </Index>
          <Index indexName="about-us">
            <CustomHits />
          </Index>
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

  const getLinkPath = (hit) => {
    if (hit._meilisearch_id.includes('activity')) {
      return `/activities/${hit.slug}`;
    }
    if (hit._meilisearch_id.includes('about-us')) {
      return `/about-us`;
    }
    if (hit._meilisearch_id.includes('document')) {
      return `/document`;
    }
  };

  console.log(hits, '=')
  return (
    <ol style={{ textDecoration: 'none' }}>
      {hits.map((hit) => (
        <Link href={getLinkPath(hit)} style={{ textDecoration: 'none' }}>
          <Box display="flex" alignItems="center" mb={2}>
            <img src={'http://localhost:1337' + hit?.img_url?.url} alt="Result 1" style={{ width: 100, height: 90, marginRight: 2 }} />
            <Typography variant="body1" sx={{ p: 3 }}>
              {hit.description ? hit.description?.substr(0, 150) : hit.name}
              {hit?.document?.map(doc => {
                <>{doc.name}</>
              })}
            </Typography>
            {/* Divider Line */}
          </Box>
          <Divider sx={{ my: 2 }} />
        </Link>
      ))
      }
    </ol >
  );
}

export default Search;
