import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const featuredCard = ({ detail }) => {
  console.log(detail.detail, '=-');

  return (
    <Grid container spacing={3} >
      {/* Left Column */}
      {detail.attributes.Featured.map(item => (
        <Grid item xs={12} md={6}>
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
  )
}

export default featuredCard