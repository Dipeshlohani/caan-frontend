import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e3f0ff',
        py: '50px',
        marginTop: '100px',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
          spacing={2}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            mx: { xs: '2rem', sm: '5rem', md: '0' },
          }}
        >
          <Typography variant="h3">
            Get all the latest news, updates and documents delivered directly to
            your inbox instantly
          </Typography>
          <Link href={'/contact-us'}>
            <Button variant="contained" color="primary">
              Contact Us
              {/* Subscribe to ANSSD */}
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
