'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
interface Document {
  id: number;
  name: string;
  file_url: {
    data: {
      url: string;
    };
  };
}
interface DocumentCategory {
  id: number;
  attributes: {
    name: string;
    document: Document[];
  };
  showBoxes?: boolean;
}
const DocumentPage = () => {
  const [documentCategories, setDocumentCategories] = useState<DocumentCategory[]>([]);
  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(`http://localhost:1337/api/document-categories?populate[0]=document&populate[1]=document.file_url`)
      .then((response) => response.json())
      .then((data) => {
        setDocumentCategories(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const handleAddClick = (index: number) => {
    const updatedCategories = [...documentCategories];
    updatedCategories[index].showBoxes = !updatedCategories[index].showBoxes;
    setDocumentCategories(updatedCategories);
  };
  return (
    <div>
      {documentCategories.map((category, index) => (
        <div key={category.id}>
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
            <Typography variant="body1" sx={{ color: 'black' }}>{category.attributes.name}</Typography>
            <IconButton onClick={() => handleAddClick(index)}>
              {category.showBoxes ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          {category.showBoxes && (
            <div>
              {category.attributes.document.map((document) => (
                <Box
                  key={document.id}
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
                  <Typography variant="body1" sx={{ color: 'black', marginRight: '20px' }}>{document.name}</Typography>
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
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default DocumentPage;

async function getData() {
  var options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'Authorization': `bearer ${process.env.API_KEY}`
    }
  }
  let url = `${process.env.HOST}/api/document-categories?populate[0]=document&populate[1]=document.file_url`
  console.log(url);
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
