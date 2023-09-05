'use client'

import StudentDetailt from '@/components/swr/StudentDetailt';
import React from 'react'

interface pageProps {

}

const Swr: React.FC<pageProps> = ({ }) => {
  return (
    <div>
      <h1>Swr page</h1>
      <ul>
        <li>
          <StudentDetailt studentId='lea319jollj7y1rs' />
        </li>
        <li>
          <StudentDetailt studentId='lea319jollj7y1rs' />
        </li>
        <li>
          <StudentDetailt studentId='lea319jollj7y1rs' />
        </li>
      </ul>
    </div>
  );
};

export default Swr;
