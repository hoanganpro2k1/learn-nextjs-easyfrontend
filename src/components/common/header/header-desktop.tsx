'use client'

import { Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import { ROUTE_LIST } from './routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const HeaderDesktop: React.FC = ({ }) => {
  const pathName = usePathname()
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction={'row'} justifyContent={'flex-end'}>
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref style={{ textDecoration: 'none' }}>
              <Typography sx={{ mr: 2, fontWeight: '500' }} className={clsx({ active: pathName === route.path })}>{route.label}</Typography>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderDesktop;
