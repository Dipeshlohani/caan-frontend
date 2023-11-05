'use client';
import React, { useState } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const DocumentPage = () => {
  const [showBoxes1, setShowBoxes1] = useState(false);
  const [showBoxes2, setShowBoxes2] = useState(false);

  const handleAddClick1 = () => {
    setShowBoxes1(!showBoxes1);
  };

  const handleAddClick2 = () => {
    setShowBoxes2(!showBoxes2);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '50px',
          width: '700px',
          backgroundColor: 'white',
          border: '1px solid #BCBABA',
          padding: '0 20px',
          borderRadius: '8px',
          marginBottom: '10px',
        }}
      >
        <Typography variant="body1" sx={{ color: 'black' }}>Form category I</Typography>
        <IconButton onClick={handleAddClick1}>
          {showBoxes1 ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Box>

      {showBoxes1 && (
        <div>
          <Typography>
            {[1, 2, 3, 4, 5].map((boxNumber) => (
              <Box
                key={boxNumber}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '50px',
                  width: '670px',
                  backgroundColor: 'white',
                  border: '1px solid #BCBABA',
                  padding: '0 20px',
                  margin: '10px 0',
                  borderRadius: '8px',
                  marginBottom: '10px',
                }}
              >
                <Typography variant="body1" sx={{ color: 'black', marginRight: '20px' }}>{`Box ${boxNumber}`}</Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button variant="outlined" sx={{ marginRight: '20px', borderColor: 'white' }}>
                    View
                  </Button>
                  <div style={{ height: '22px', borderRight: '1px solid #2161CD', margin: '0 20px' }}></div>
                  <Button variant="outlined" sx={{ borderColor: 'white' }}>
                    Download
                  </Button>
                </div>
              </Box>
            ))}
          </Typography>
        </div>
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '50px',
          width: '700px',
          backgroundColor: 'white',
          border: '1px solid #BCBABA',
          padding: '0 20px',
          borderRadius: '8px',
          marginBottom: '10px',
        }}
      >
        <Typography variant="body1" sx={{ color: 'black' }}>Form category II</Typography>
        <IconButton onClick={handleAddClick2}>
          {showBoxes2 ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Box>

      {showBoxes2 && (
        <div>
          <Typography>
            {[1, 2, 3, 4, 5].map((boxNumber) => (
              <Box
                key={boxNumber}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '50px',
                  width: '670px',
                  backgroundColor: 'white',
                  border: '1px solid #BCBABA',
                  padding: '0 20px',
                  margin: '10px 0',
                  borderRadius: '8px',
                  marginBottom: '10px',
                }}
              >
                <Typography variant="body1" sx={{ color: 'black', marginRight: '20px' }}>{`Box ${boxNumber}`}</Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button variant="outlined" sx={{ marginRight: '20px', borderColor: 'white' }}>
                    View
                  </Button>
                  <div style={{ height: '22px', borderRight: '1px solid #2161CD', margin: '0 20px' }}></div>
                  <Button variant="outlined" sx={{ borderColor: 'white' }}>
                    Download
                  </Button>
                </div>
              </Box>
            ))}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default DocumentPage;



