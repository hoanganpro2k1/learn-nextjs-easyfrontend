import React from 'react'
import { Button, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Image from 'next/image';
import avatar from '../../../public/avatar.png'

const HeroSection = () => {
  return (
    <Box component={'section'} pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography component={'h1'} variant='h3' fontWeight={'700'} mb={{ xs: 3.5, md: 5 }}>
              Hi, I am John, <br />
              Creative Technologist
            </Typography>
            <Typography mb={{ xs: 3.5, md: 5 }} color={'text.primary'}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button size='large' variant='contained'>Download Resume</Button>
          </Box>
          <Box sx={{ minWidth: 240, boxShadow: '-5px 13px', color: 'secondary.light', borderRadius: '50%' }}>
            <Image src={avatar} alt='avatar' />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
