'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'

const Home: React.FC = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then(res => res.json())
      .then(data => console.log('data:', data))
  }, [])
  return (
    <div>
      <div>Hello</div>
      <Link href="/about">About page</Link>
    </div>
  )
}

export default Home
