import React, { useEffect, useRef, useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useInstantSearch, useSearchBox } from 'react-instantsearch';

const SearchBar = (props) => {
  const { query, refine } = useSearchBox(props);
  const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);

  const isSearchStalled = status === 'stalled';

  function setQuery(newQuery) {
    setInputValue(newQuery);
    refine(newQuery);
  }


  return (
    <Grid>
      <Box display="flex" alignItems="center" justifyContent="space-between" mt={5} mb={3}>
        <TextField
          label="Search now"
          variant="outlined"
          placeholder="Search now"
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          type="search"
          value={inputValue}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}
          autoFocus
          fullWidth
          InputProps={{ endAdornment: <SearchIcon color="primary" /> }}
        />
        <Button variant="contained" color="primary" sx={{ marginLeft: 2 }} onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();

          if (inputRef.current) {
            inputRef.current.blur();
          }
        }}
          onReset={(event) => {
            event.preventDefault();
            event.stopPropagation();

            setQuery('');

            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}>
          Search Now
        </Button>
      </Box>
      <Grid>
        <Typography variant="h5" gutterBottom>
          Showing search results for - {inputValue}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchBar;