import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const SummaryCard = ({ detail }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <img src={`http://localhost:1337` + detail.attributes?.img_url.data.attributes.url} alt="Civil Aviation Safety" style={{ width: '100%', height: 'auto', margin: '30px 0' }} />
      </Grid>

      {/* Right Column - Summary Rows with Headings and Descriptions */}
      <Grid item xs={12} md={4}>
        <Box sx={{ padding: 3, height: 'auto', margin: '60px 0' }}>
          {detail.attributes?.summary.map(item => (
            <Box sx={{ marginBottom: 2 }}>
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
  )
}

export default SummaryCard