'use client'

import { useAuth } from '@/hooks/use-auth';
import { Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ROUTE_LIST } from './routes';

const HeaderDesktop: React.FC = ({ }) => {
  const pathName = usePathname()
  const { profile } = useAuth();
  const isLoggedIn = Boolean(profile?.data?.username)
  const routeList = ROUTE_LIST.filter(route => !route.requireLogin || isLoggedIn)

  console.log('profile:', profile)

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction={'row'} justifyContent={'flex-end'}>
          {routeList.map((route) => (
            <Link key={route.path} href={route.path} passHref style={{ textDecoration: 'none' }}>
              <Typography sx={{ mr: 2, fontWeight: '500' }} className={clsx({ active: pathName === route.path })}>{route.label}</Typography>
            </Link>
          ))}

          {isLoggedIn && <Link href='/' passHref style={{ textDecoration: 'none' }}>
            <Typography sx={{ mr: 2, fontWeight: '500' }}>Logout</Typography>
          </Link>}

          {!isLoggedIn && <Link href='/login' passHref style={{ textDecoration: 'none' }}>
            <Typography sx={{ mr: 2, fontWeight: '500' }}>Login</Typography>
          </Link>}

        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderDesktop;
