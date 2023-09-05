import React from 'react'
import useSWR from 'swr';

interface StudentDetailtProps {
  studentId: string
}

const StudentDetailt: React.FC<StudentDetailtProps> = ({ studentId }) => {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`)
  return (
    <div>StudentDetailt: {data?.name || '--'}</div>
  );
};

export default StudentDetailt;
