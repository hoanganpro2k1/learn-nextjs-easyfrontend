import React from 'react';
import { Box, Container } from '@mui/system';
import HeroSection from '@/components/home/hero';
import RecentPosts from '@/components/home/recent-posts';

export default function HomePage () {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  );
}
