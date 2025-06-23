import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-l w-1/4'>{overview}</p>
      <div className=''>
        <button  className='bg-white px-12 py-2 text-xl text-black rounded-lg hover:opacity-80 cursor-pointer ' > ▶️Play</button>
        <button className='mx-2 bg-gray-500 px-12 py-2 text-white text-xl rounded-sm opacity-50  hover:opacity-80 cursor-pointer ' >More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle