import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react'
import WorkCard from './work-card';

interface WorkListProps {
  workList: IWork[]
}

const WorkList: React.FC<WorkListProps> = ({ workList }) => {
  if (workList.length === 0) return null;
  return (
    <Box>
      {workList.map(work => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  );
};

export default WorkList;
