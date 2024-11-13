import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center'>
      <div className="bg-gray-200 shadow-md w-[500px] py-10 px-6 text-center rounded-md">
        <h1 className='text-3xl mb-5 font-bold'>Welcome</h1>
        <p className='mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores doloremque temporibus dolor quasi laboriosam culpa quidem iste aliquam hic amet.</p>
        <Link to="/quiz" className='bg-red-600 px-8 py-3 rounded-full text-white'>Start</Link>
      </div>
    </section>
  )
}

export default Welcome