import React from 'react'
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { format } from 'date-fns'
import { Stack } from '@mui/system';

interface PostCardProps {
  post: IPost
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <Typography variant='h5' fontWeight={'bold'}>{post.title}</Typography>
        <Stack direction={'row'} my={2}>
          <Typography variant='body1' >
            {format(Number(post.publishedDate), 'dd MMM yyyy')}
          </Typography>
          <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
          <Typography variant='body1'>
            {post.tagList.join(', ')}
          </Typography>
        </Stack>

        <Typography variant='body2'>{post.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
