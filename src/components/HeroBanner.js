import React from 'react';
import{ Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/pexels-leonardho-2468339.jpg'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" className="introBaner"
        fontWeight="600"  sx={{fontSize: {lg: '54px', xs: '34px'}}}>
            Pakernia
        </Typography>
        <Typography fontWeight={700} className="introBaner2"
          sx={{fontSize: {lg: '44px', xs: '30px'}}}
        mb="23px" mt="30px"
        >
          Trenuj, Jedz<br/> Śpij
        </Typography>
        <Typography fontSize="22px" className="introBaner3"
        lineHeight="35px" mb={4}>
         powtórz ponownie
        </Typography>
        <Typography fontWeight={600}  className='pompa'
          color="#ff2625"
          sx={{
            display:{lg: 'block', xs: 'none'}
          }}
          fontSize="200px">
         POMPA
        </Typography>
        <Button variant="contained" color="error" href="#exercises"
        sx={{backgroundColor:"#ff2625", padding: '10px'}}>
          Wyszukaj ćwiczenia dla siebie
        </Button>
        <img style={{borderBottomLeftRadius: '10%'}}  src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
        
    </Box>
  )
}

export default HeroBanner