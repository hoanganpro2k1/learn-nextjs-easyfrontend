'use client'

import { Container, Stack, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { ROUTE_LIST } from './routes';
import Link from 'next/link';

const HeaderDesktop: React.FC = ({ }) => {
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction={'row'} justifyContent={'flex-end'}>
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref style={{ textDecoration: 'none' }}>
              <MuiLink sx={{ mr: 2 }}>{route.label}</MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderDesktop;
