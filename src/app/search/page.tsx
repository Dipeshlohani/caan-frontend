// Import statements...
'use client'
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Button, TextField, Typography } from '@mui/material';
import Layout from '@/components/layout';
import CallToAction from '@/components/cta';
import SearchPageStyles from '@/components/search/search.module.css'; 

const SearchContainer = styled(Box)(SearchPageStyles.searchContainer);

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Assuming searchResults is an array
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = () => {
    // Perform the search based on the query
    console.log('Searching for:', searchQuery);
    // Add your search logic here

    // Example: Assuming search results are found
    const mockSearchResults = ['Result 1', 'Result 2', 'Result 3'];
    setSearchResults(mockSearchResults);
    setShowSearchResults(true);
  };

  const handlePagination = (pageNumber) => {
    // Handle pagination logic, e.g., fetching new search results for the selected page
    console.log('Selected page:', pageNumber);
  };

  return (
    <Layout>
      <CallToAction />
      {/* SearchContainer to center the search design on the page */}
      <SearchContainer>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4}>
          <TextField
            id="search"
            label="Search Now..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ marginTop: 2, marginBottom: 2 }}
            className={SearchPageStyles.searchInput}
          />
          <Button variant="contained" color="primary" onClick={handleSearch} sx={{ marginTop: 2 }} className={SearchPageStyles.searchButton}>
            Search Now
          </Button>
          <Typography>
            <div>
              Showing search results for - Civil Airlines
            </div>
          </Typography>
          {/* Box 1 */}
          <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/images/your-image-filename.jpg" // Update the path to your image
              alt="Civil Airlines Image"
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the styles as needed
            />
            <div>
              Civil Airlines is the highway of the best thing in Nepal in 2023.
            </div>
          </div>
          {/* Box 2 */}
          <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/images/your-audit-image.jpg" // Update the path to your audit image
              alt="Audit Image"
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the styles as needed
            />
            <div>
              The existence of independent external audit, and the accompanying
              potential for scrutiny improves performance.
            </div>
          </div>
          {/* Add more grid items for each text and image */}
          {/* Box 3 */}
          <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/images/your-image-filename.jpg" // Update the path to your image
              alt="Civil Airlines Image"
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the styles as needed
            />
            <div>
              Your Text Here
            </div>
          </div>
          {/* Box 4 */}
          <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/images/your-audit-image.jpg" // Update the path to your audit image
              alt="Audit Image"
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the styles as needed
            />
            <div>
              Your Text Here
            </div>
          </div>
          {/* Box 5 */}
          <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/images/your-image-filename.jpg" // Update the path to your image
              alt="Civil Airlines Image"
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the styles as needed
            />
            <div>
              Your Text Here
            </div>
          </div>
          {/* Box 6 */}
          <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/images/your-audit-image.jpg" // Update the path to your audit image
              alt="Audit Image"
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the styles as needed
            />
            <div>
              Your Text Here
            </div>
          </div>
          {/* Box 7 */}
          <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/images/your-image-filename.jpg" // Update the path to your image
              alt="Civil Airlines Image"
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the styles as needed
            />
            <div>
              Your Text Here
            </div>
          </div>
          {/* Box 8 */}
          <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/images/your-audit-image.jpg" // Update the path to your audit image
              alt="Audit Image"
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the styles as needed
            />
            <div>
              Your Text Here
            </div>
          </div>
          {/* Box 9 */}
          <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <img
              src="/images/your-image-filename.jpg" // Update the path to your image
              alt="Civil Airlines Image"
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the styles as needed
            />
            <div>
              Your Text Here
            </div>
          </div>
        </Box>
        {/* Display search results */}
        {searchResults.map((result, index) => (
          <Typography key={index} sx={{ marginTop: 2 }}>
            {result}
          </Typography>
        ))}
        {/* Other components or content */}
        <Box display="flex" justifyContent="center" marginTop={2}>
          {[1, 2, 3, 4, 5].map((pageNumber) => (
            <Button key={pageNumber} onClick={() => handlePagination(pageNumber)}>
              {pageNumber}
            </Button>
          ))}
          <Button onClick={() => handlePagination('next')}>Next &gt;&gt;</Button>
        </Box>
      </SearchContainer>
    </Layout>
  );
};

export default SearchPage;
