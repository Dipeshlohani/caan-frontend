'use client';
import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, Box, Divider, Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Layout from "@/components/layout";
import CallToAction from '@/components/cta';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PrintIcon from '@mui/icons-material/Print';

const CivilAviationSafetyPage = () => {
  const [detail, setDetail] = useState({
    attributes: {
      title: "",
      Featured: [],
      KeyFacts: "",
      contents: [],
      img_url: {},
      stats: [],
      summary: [],
      FeaturedDetail: []
    }
  });
  const scrollToBookmark = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  };

  useEffect(() => {
    fetch('http://localhost:1337/api/detail-pages?populate=*')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setDetail(data.data[0]);
      })
  }, [])

  return (
    <Layout>
      <Container>
        {/* Title */}
        <Typography variant="h1" gutterBottom sx={{ marginTop: 4, fontWeight: 500, }}>
          {detail.attributes.title}
        </Typography>

        {/* Two Columns */}
        <Grid container spacing={3}>
          {/* Left Column - Image */}
          <Grid item xs={12} md={8}>
            <img src={`http://localhost:1337` + detail.attributes.img_url?.data?.attributes.url} alt="Civil Aviation Safety" style={{ width: '100%', height: 'auto', margin: '30px 0' }} />
          </Grid>

          {/* Right Column - Summary Rows with Headings and Descriptions */}
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: 3, height: 'auto', margin: '60px 0' }}>
              {detail.attributes.summary.map((item, index) => (
                <Box sx={{ marginBottom: 2 }} key={index}>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant='body2'>
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Line Separator */}
        <Divider sx={{ my: 3 }} />

        {/* Summary and Recommendations */}
        <Grid container spacing={3}>
          {/* Left Column - Content */}
          <Grid item xs={12} md={8} >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, margin: "20px 0" }}>
              Summary and Recommendations
            </Typography>
            {/*  */}
            {/* Content goes here */}

            <Box bgcolor="#EFEFEF" p={3} id="summary">
              <Grid container spacing={3} >
                {/* Left Column */}
                {detail.attributes.Featured.map((item, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box bgcolor="#2161CD" p={2} sx={{ borderRadius: 2 }}>
                      <Typography variant="h5" color="white">
                        {item.question}
                      </Typography>
                    </Box>
                    <Box p={2}>
                      {/* Bullet Points and Texts */}
                      <Typography variant="body1" sx={{ lineHeight: 2, fontWeight: 'light', }}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                          {item.answers}
                        </ReactMarkdown>
                      </Typography>
                      {/* Add more bullet points and texts as needed */}
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Button */}
              <Button variant="contained" sx={{ marginTop: 2, bgcolor: '#2161CD', color: 'white', width: '50%' }}>
                Expand Audit Snapshot
              </Button>
            </Box>

            <Box bgcolor="#EFEFEF" p={3} id="summary">
              <Grid container spacing={3}>
                {/* Left Column */}
                {detail.attributes.FeaturedDetail.map((item, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box bgcolor="#2161CD" p={2} sx={{ borderRadius: 2 }}>
                      <Typography variant="h5" color="white">
                        {item.title}
                      </Typography>
                    </Box>
                    <Box p={2}>
                      {/* Bullet Points and Texts */}
                      <Typography variant="body1" sx={{ lineHeight: 2, fontWeight: 'light', }}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                          {item.description}
                        </ReactMarkdown>
                      </Typography>
                    </Box>
                  </Grid>
                ))}
                {/* Right Column */}

              </Grid>
              {/* key facts */}
              <Grid item>
                <Box bgcolor="#2161CD" p={2} sx={{ width: '42%', borderRadius: 2 }}>
                  <Typography variant="h5" color="white">
                    Key facts
                  </Typography>
                </Box>
                <Box p={2}>
                  {/* Bullet Points and Texts */}
                  <Typography variant="body1" sx={{ lineHeight: 2, fontWeight: 'light', }}>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                      {detail.attributes.KeyFacts}
                    </ReactMarkdown>
                  </Typography>
                </Box>
              </Grid>
              {/* Stats Circles */}
              <Grid container spacing={3} mt={3}>
                {detail.attributes.stats.map((item, index) => (
                  <Grid item xs={12} md={4} p={5} key={index}>
                    <Paper elevation={3} sx={{ backgroundColor: '#2161CD', color: 'white', padding: 3, textAlign: 'center', borderRadius: '50%', height: '150px' }}>
                      {/* Your stat goes here */}
                      <Typography variant="h4" sx={{ mt: 6, fontSize: 42 }}>
                        {item.stat}
                      </Typography>
                    </Paper>
                    {/* Small description below the circle */}
                    <Typography variant="body2" sx={{ textAlign: 'center', p: 4 }}>
                      {item.description}
                    </Typography>
                  </Grid>
                ))}
              </Grid>

              {/* Divider Line */}
              <Divider sx={{ my: 1 }} />

              {/* Download and Print Options */}
              <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={6} md={3} sx={{ textAlign: 'center' }}>
                  <IconButton color="primary">
                    <NoteAddIcon />
                  </IconButton>
                  <Typography variant="body2">
                    Download File
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3} sx={{ textAlign: 'center' }}>
                  <IconButton color="primary">
                    <PrintIcon />
                  </IconButton>
                  <Typography variant="body2">
                    Print Document
                  </Typography>
                </Grid>
              </Grid>
              {/* Button */}
              <Button variant="contained" fullWidth sx={{ marginTop: 2, bgcolor: '#2161CD', color: 'white' }}>
                Collapse Audit Snapshot
              </Button>
            </Box>

            {detail.attributes.contents.map((item, index) => (
              <div key={index}>
                <Typography variant="h6" id={item.id}>
                  {item.title}
                </Typography>
                <Typography sx={{ lineHeight: 2, fontWeight: 'light', marginBottom: 5 }}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {item.description}
                  </ReactMarkdown>
                </Typography>
              </div>
            ))}
          </Grid>

          {/* Right Column - Navigation Panel */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 4, height: 'auto', background: '#EFEFEF', position: 'sticky', top: '90px' }}>
              <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
                Contents
              </Typography>
              {/* Dotted Divider */}
              <Box sx={{ borderBottom: '1px dashed #ccc', mb: 2 }} />
              {/* Table of Contents Links */}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {detail.attributes.contents?.map((item, index) => (
                  <div key={index}>
                    <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', lineHeight: 2, fontWeight: 'light', }}>
                      <span>{item.title}</span>
                      <IconButton onClick={() => scrollToBookmark(item.id)} color="primary" sx={{ marginLeft: 'auto' }}>
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Typography>
                    <Divider sx={{ marginBottom: 2, color: 'black' }} />
                  </div>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container >
      <CallToAction />
    </Layout >
  );
};

export default CivilAviationSafetyPage;
