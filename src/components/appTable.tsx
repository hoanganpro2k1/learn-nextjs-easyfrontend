'use client'

import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

interface IProps {
  blogs?: IBlog[]
}

const AppTable: React.FC<IProps> = (props: IProps) => {
  const { blogs } = props;

  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} padding={'10px'}>
        <Typography variant='h5'>Table Blogs</Typography>
        <Button variant='contained' color='success'>Add New</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Desc</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs?.map((item) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell scope="right">{item.id}</TableCell>
                <TableCell align="left">{item.title}</TableCell>
                <TableCell align="left">{item.desc}</TableCell>
                <TableCell align="left">

                  <Link href={`/blogs/${item?.id}`}>
                    <Button variant='contained' color='primary'>
                      View
                    </Button>
                  </Link>

                  <Button
                    variant='contained'
                    color='warning'
                    sx={{ margin: '0 10px' }}
                  >
                    Edit
                  </Button>
                  <Button variant='contained' color='error'>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AppTable;
