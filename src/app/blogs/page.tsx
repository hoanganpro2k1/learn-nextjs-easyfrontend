'use client'

import AppTable from '@/components/appTable';
import React from 'react'
import useSWR from 'swr';

interface pageProps {

}

const BlogsPage: React.FC<pageProps> = ({ }) => {
  const fetcher = (url: string) => fetch(url)
    .then((res) => res.json())
    .then((data) => data.posts)

  const { data, error, isLoading } = useSWR<IBlog[]>(
    "http://localhost:3000/api/blogs",
    fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  }
  );

  if (isLoading) return <div>loading...</div>
  console.log(data)
  return (
    <div>
      <AppTable blogs={data} />
    </div>
  );
};

export default BlogsPage;
