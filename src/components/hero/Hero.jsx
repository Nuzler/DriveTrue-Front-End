import React from 'react'

const Hero = () => {
  return (
    <div className=' bg-amber-400 w-full h-[400px] flex justify-center pt-20  border-4  rounded-tl-full rounded-br-full border-amber-400  '>
      <div className='flex  flex-col justify-center items-center text-5xl px-3 sm:text-6xl lg:text-7xl xl:text-8xl '>
      <h1>Fast,Fresh & Ready</h1>
      <h1>When You Are</h1>
      <button class='bg-white my-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded-3xl w-[150px] shadow text-xl'>Order</button>
      </div>
    </div>
  )
}

export default Hero
