'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Button, Grid, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CallToAction from '@/components/cta';
import Subscribe from '@/components/subscribe/Subscribe';
import Layout from '@/components/layout';
interface Document {
  id: number;
  name: string;
  file_url: {
    data: {
      url: string;
    };
  };
}
interface FileUrl {
  data: {
    url: string;
  }
}

interface Document {
  id: number;
  name: string;
  file_url: FileUrl;
}
interface DocumentCategory {
  id: number;
  attributes: {
    name: string;
    document: Document[];
  };
  showBoxes?: boolean;
}

const importantLinks = [
  "Operation & Safety",
  "Personal Licensing",
  "Who We Are",
  "Rules & Regulations",
  "E-Services & Forms",
];

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
  const handleViewClick = (fileUrl: string) => {
    window.open(fileUrl, '_blank');
  };
  const handleDownloadClick = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleAddClick = (index: number) => {
    const updatedCategories = [...documentCategories];
    updatedCategories[index].showBoxes = !updatedCategories[index].showBoxes;
    setDocumentCategories(updatedCategories);
  };
  return (
    <Layout>
      <Grid container spacing={3} sx={{ padding: '10px 180px' }}>
        <Grid item xs={8} sx={{ flexBasis: '65%' }}>

          {documentCategories.map((category, index) => (
            <div key={category.id}>
              <Box
                sx={{
                  display: 'flex',
                  color: '#2161cd',
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
                <Typography variant="body1" sx={{ color: '#2161cd' }}>{category.attributes.name}</Typography>
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
                      <Typography sx={{ color: 'black', marginRight: '20px', fontSize: '14px' }}>{document.name}</Typography>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button sx={{ marginRight: '20px', borderColor: 'white' }} onClick={() => handleViewClick(`http://localhost:1337` + document.file_url.data.attributes.url)}>
                          View
                        </Button>
                        <div style={{ height: '22px', borderRight: '1px solid #2161CD', margin: '0 20px' }}></div>
                        <Button onClick={() => handleDownloadClick(`http://localhost:1337` + document.file_url.data.attributes.url, document.name)} sx={{ borderColor: 'white' }}>
                          Download
                        </Button>
                      </div>
                    </Box>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Grid>
        <Grid item xs={4} sx={{ flexBasis: '35%' }}>
          <Box sx={{ width: '250px', height: 'auto', padding: '20px', border: '1px solid black', borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom>
              Important Links
            </Typography>
            {importantLinks.map((link) => (
              <>
                <Box key={link} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: "10px 0", fontWeight: 'bold' }}>
                  <Typography variant="body1">{link}</Typography>
                  <div>{`>`}</div>
                </Box>
                <Divider sx={{ width: '100%', mb: '10px' }} />
              </>
            ))}
          </Box>
        </Grid>
      </Grid>
      <CallToAction />
    </Layout>
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
