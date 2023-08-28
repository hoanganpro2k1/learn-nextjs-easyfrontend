'use client'

import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Footer from '@/components/common/footer';
import { Box, Container } from '@mui/system';
import { Stack } from '@mui/material';
import Header from '@/components/common/header';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry>
          <Stack minHeight={'100vh'}>
            <Header />
            <Box component={'main'} flexGrow={1}>
              {children}
            </Box>
            <Footer />
          </Stack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
