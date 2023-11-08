import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  Container,
  Grid,
} from '@mui/material';

import colors from '../../assets/theme/base/colors';

const OurMedias = ({ media }) => {
  media = media[0];
  return (
    <Box
      sx={{
        pb: { xs: '4rem', md: '6.313rem' },
        pt: { xs: '3rem', md: '4.313rem' },
        backgroundColor: colors.primary.main,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="column"
          spacing={0}
          sx={{ pb: { xs: 4.5, md: 6.5 }, textAlign: 'center' }}
        >
          <Typography variant="h6" color="white">
            OUR GALLERY
          </Typography>
          <Typography variant="h2" color="white">
            Our Pictures & Media
          </Typography>
        </Stack>
        <Grid
          container
          rowSpacing={{ xs: 3, md: 5 }}
          columnSpacing={{ xs: 2.5, md: 4 }}
        >
          {media?.img_url?.data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ p: 0 }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={'http://localhost:1337' + item.attributes.url}
                  alt="image"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMedias;
