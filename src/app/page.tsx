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
        title: 'NextJS Tutorials | Easy Frontend',
        description: 'Step by step tutorials to build a full CRUD website using NextJS for beginners',
        url: 'https://learn-nextjs-easyfrontend.vercel.app/',
        thumbnailUrl: ''
      }} />
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  );
}
