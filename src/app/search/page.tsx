'use client';
import React from 'react';
import { Container, Grid, Paper, Typography, Box, Divider, Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Layout from "@/components/layout";
import CallToAction from '@/components/cta';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch';

const searchClient = instantMeiliSearch(
  'http://localhost:7700/', // Host
  'a63da4928426f12639e19d62886f621130f3fa9ff3c7534c5d179f0f51c4f303', // API key
  {}
)

const Search = () => {
  return (
    <Layout>
      <InstantSearch indexName="activity" searchClient={searchClient}>
        <SearchBox />
        <Stats />
        <Hits hitComponent={Hit} />
      </InstantSearch>
      <CallToAction />
    </Layout>
  );
};

function Hit(props) {
  return (
    <div key={props.hit.id}>
      {props.hit.name}
    </div>
  );
}

export default Search;
