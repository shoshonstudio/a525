import { Loader2 } from 'lucide-react'
import React from 'react'

const LoadingPage = () => {

    new Promise((res) => setTimeout(res, 2000));

  return (
    <main className='grid place-items-center h-screen'>
        <Loader2 className="animate-spin text-white w-10 h-10" />
        <h1 className='text-white'>Loading...</h1>
        <p className='text-white'>Please wait a moment</p>
    </main>
  )
}

export default LoadingPage