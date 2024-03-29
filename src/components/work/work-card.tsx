import { Chip, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Image from 'next/image';
import React from 'react'

interface WorkCardProps {
  work: IWork
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
        <Image src={work?.thumbnailUrl} width={246} height={180} layout='responsive' alt='work thumbnaiUrl' />
      </Box>
      <Box>
        <Typography variant='h4' fontWeight={'bold'}>{work.title}</Typography>
        <Stack direction={'row'} my={2}>
          <Chip color='secondary' label={new Date(Number.parseInt(work.createAt)).getFullYear()} size='small' />
          <Typography color={'GrayText'} ml={3}>{work.tagList.join(', ')}</Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
};

export default WorkCard;
