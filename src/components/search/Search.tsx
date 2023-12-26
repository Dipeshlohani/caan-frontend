import React, { useState } from 'react'
import styles from "./search.module.css";
import { LuSearch } from 'react-icons/lu';
import { Box, Button, TextField, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform your custom search logic using searchQuery
    // Update your search results accordingly
    console.log('Performing search for:', searchQuery.hit);
  };
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mt={5} mb={3}>
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
    </Box>
  )
}

export default Search;
