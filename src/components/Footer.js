import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/—Pngtree—gym logo png_7885369.png';

const Footer = () => (
  <Box mt="80px" mb="20px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="14px">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '101px' }} />
    </Stack>
  </Box>
);

export default Footer;