import { Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Link from 'next/link';
import React from 'react'
import PostCard from './post-card';

const RecentPosts: React.FC = () => {
  const postList: IPost[] = [
    {
      id: '1',
      title: 'Making a design system from scratch',
      publishedDate: '1693198257349',
      tagList: ['Design', 'Pattern'],
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: '1693198257349',
      tagList: ['Figma', 'Icon Design'],
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]
  return (
    <Box component={'section'} bgcolor={'secondary.light'} pt={2} pb={4}>
      <Container>
        <Stack direction={'row'} mb={2} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems={'center'}>
          <Typography variant='h5'>Recent Posts</Typography>
          <Link href={'/blog'} style={{ textDecoration: 'none' }}>
            <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>View all</Typography>
          </Link>
        </Stack>

        <Stack
          spacing={3}
          direction={{
            xs: 'column',
            md: 'row'
          }}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              }
            }
          }}
        >
          {postList.map(post => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default RecentPosts;
