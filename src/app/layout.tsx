'use client'

import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Footer from '@/components/common/footer';
import { Box, Container } from '@mui/system';
import { Stack } from '@mui/material';
import Header from '@/components/common/header';
import { SWRConfig } from 'swr';
import axiosClient from '../../api-client/axios-client';

// export const metadata = {
//   title: 'Next.js App Router + Material UI v5',
//   description: 'Next.js App Router + Material UI v5',
// };

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <ThemeRegistry>
            <Stack minHeight={'100vh'}>
              <Header />
              <Box component={'main'} flexGrow={1}>
                {children}
              </Box>
              <Footer />
            </Stack>
          </ThemeRegistry>
        </SWRConfig>
      </body>
    </html>
  );
}
