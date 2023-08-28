import { Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react'
import WorkList from '../work/work-list';

const FeaturedWorks: React.FC = () => {
  const workList: IWork[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      createAt: '1693198257349',
      updateAt: '1693198257349',
      tagList: ['Dashboard'],
      shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      fullDescription: '',
      thumbnailUrl: 'https://res.cloudinary.com/dgdrdmgbx/image/upload/v1693208045/lear-nextjs/image3_au9sg6.jpg'
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      createAt: '1693198257349',
      updateAt: '1693198257349',
      tagList: ['Illustration'],
      shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      fullDescription: '',
      thumbnailUrl: 'https://res.cloudinary.com/dgdrdmgbx/image/upload/v1693208045/lear-nextjs/image1_zzrrz0.jpg'
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      createAt: '1693198257349',
      updateAt: '1693198257349',
      tagList: ['Typography'],
      shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      fullDescription: '',
      thumbnailUrl: 'https://res.cloudinary.com/dgdrdmgbx/image/upload/v1693208045/lear-nextjs/image2_ylodj9.jpg'
    },
  ]
  return (
    <Box component={'section'} pt={2} pb={4}>
      <Container>
        <Typography variant='h5' mb={4}>Featured Works</Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
};

export default FeaturedWorks;
