'use client'
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Button, TextField, Typography } from '@mui/material';
import Layout from '@/components/layout';
import CallToAction from '@/components/cta';
import SearchPageStyles from '@/components/search/search.module.css';
import Pagination from '@mui/material/Pagination';
import { InputAdornment } from '@mui/material';


const SearchContainer = styled(Box)(SearchPageStyles.searchContainer);

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Add your search logic here
    console.log('Searching for:', searchQuery);
    // Example: Set state or perform other actions based on the search query
  };
  return (
    <Layout>
      <CallToAction />

      {/* SearchContainer to center the search design on the page */}
      <SearchContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            marginBottom: '10px',
          }}
        >
           <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          ></Box>
         <TextField
              id="search"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ width: '50%', marginRight: '10px' }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ width: '80px', height: '40px', borderRadius: '0' }}
            >
              Search Now
            </Button>
          </Box>


        {/* Text above search results */}
        <Typography
          sx={{
            marginTop: -10,
            width: '476px',
            height: '29px',
            fontSize: '24px',
            marginRight: '30px',
            textAlign: 'center',
            textDecoration: 'underline',
            marginBottom: '30px',
            
          }}
        >
  
 
  Showing search results for - Civil Airlines
</Typography>

        {/* Text 1 */}
        <Typography sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '25px',
          letterSpacing: '0em',
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '10px', // Adjust as needed
        }}>
          Civil Airlines is the highway of the best thing in Nepal in 2023.
        </Typography>

        {/* Image 1 */}
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
          <img
            src="rectangle.png" // Replace with the actual image path
            alt="Civil Airlines Image"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>

        {/* Repeat the above structure for Text 2 to Text 9 */}
        {/* Text 2 */}
        <Typography sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '25px',
          letterSpacing: '0em',
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '30px', // Adjust as needed
        }}>
          The existence of independent external audit, and the accompanying potential for scrutiny improves performance.
        </Typography>

        {/* Image 2 */}
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <img
            src="Rectangle 171.png" // Replace with the actual image path
            alt="Audit Image"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <Typography sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '25px',
          letterSpacing: '0em',
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '30px', 
           // Adjust as needed
        }}>
          Pellentesque eget fringilla quam. In sit amet auctor dui, at dictum quam. Cras nisl ligula, dapibus eu lorem vitae, porttitor tincidunt eros.
        </Typography>

        {/* Image 2 */}
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <img
  src="Rectangle 172.png"
  alt="Rectangle Image"
  style={{ maxWidth: '100px', maxHeight: '100px' }}
/>

        </div>
        <Typography sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '25px',
          letterSpacing: '0em',
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '30px',  // Adjust as needed
        }}>
          
          Quisque gravida augue in lacus eleifend, id bibendum enim viverra. Ut vel pharetra arcu, id consectetur quam

        </Typography>

        {/* Image 2 */}
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <img
            src= "Rectangle 173.png"// Replace with the actual image path
            alt="Audit Image"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <Typography sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '25px',
          letterSpacing: '0em',
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '30px',  // Adjust as needed
        }}>
          Morbi vitae libero non libero scelerisque sollicitudin vel eu eros. Pellentesque lobortis urna sit amet purus laoreet pellentesque
        </Typography>

        {/* Image 2 */}
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <img
            src="Rectangle 174.png" // Replace with the actual image path
            alt="Audit Image"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <Typography sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '25px',
          letterSpacing: '0em',
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '30px',  // Adjust as needed
        }}>
          Civil Airlines is the highway of the best thing in Nepal in 2023

        </Typography>

        {/* Image 2 */}
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <img
            src="Rectangle 175.png" // Replace with the actual image path
            alt="Audit Image"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <Typography sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '25px',
          letterSpacing: '0em',
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '30px',  // Adjust as needed
        }}>
          Quisque pretium, est vitae tempor pharetra, ex mauris aliquet enim, et lacinia enim nisl a urna.

        </Typography>

        {/* Image 2 */}
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <img
            src="Rectangle 176.png" // Replace with the actual image path
            alt="Audit Image"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <Typography sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '25px',
          letterSpacing: '0em',
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '30px',  // Adjust as needed
        }}>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
        </Typography>

        {/* Image 2 */}
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <img
            src="Rectangle 177.png" // Replace with the actual image path
            alt="Audit Image"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination count={5} color="primary" />
        </Box>
      </SearchContainer>
    </Layout>
  );
};

export default SearchPage;