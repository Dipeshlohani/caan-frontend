import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Card,
  IconButton,
  Container,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import PlaneIcon1 from '../../assets/Icons/planeIcon1';
import DesktopIcon from '../../assets/Icons/desktopIcon';
import ServerIcon from '../../assets/Icons/serverIcon';
import PlaneIcon2 from '../../assets/Icons/planeIcon2';
import ArrowRightIcon from '../../assets/Icons/arrowRightIcon';

const data = [
  { icon: <PlaneIcon1 />, title: 'Air Traffic System' },
  { icon: <DesktopIcon />, title: 'Airport Info System' },
  { icon: <ServerIcon />, title: 'Central Navigation System' },
  { icon: <PlaneIcon2 />, title: 'Search And Rescue' },
  { icon: <PlaneIcon1 />, title: 'Air Traffic System' },
  { icon: <DesktopIcon />, title: 'Airport Info System' },
  { icon: <ServerIcon />, title: 'Central Navigation System' },
  { icon: <PlaneIcon2 />, title: 'Search And Rescue' },
];
const Functions = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{ mt: '-91px', px: { xs: 2, md: 0 } }}
        >
          <Swiper
            keyboard={true}
            modules={[Navigation, Keyboard]}
            loop
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="navSwiper"
            navigation={{
              nextEl: '.swiper-button-next',
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="iconCard">
                  <Box>{item.icon}</Box>
                  <Typography variant="h5">{item.title}</Typography>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton
            className="swiper-button-next"
            size="large"
            style={{ position: 'relative' }}
          >
            <ArrowRightIcon />
          </IconButton>
        </Stack>
      </Container>
    </div>
  );
};

export default Functions;
