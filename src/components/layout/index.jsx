import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Header from '../header';
import Footer from '../footer';
import theme from '../../assets/theme/';
import footerRoutes from '../footer/footer.routes';

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Wrapper;
