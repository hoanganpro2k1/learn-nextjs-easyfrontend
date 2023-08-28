import React from 'react';
import { Box, Container } from '@mui/system';
import HeroSection from '@/components/home/hero';
import RecentPosts from '@/components/home/recent-posts';
import FeaturedWorks from '@/components/home/featured-works';
import Seo from '@/components/common/seo';

export default function HomePage () {
  return (
    <Box>
      <Seo data={{
        title: '',
        description: '',
        url: '',
        thumbnailUrl: ''
      }} />
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  );
}
