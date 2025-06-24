import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function VideoTitle({title,overview}) {
  const movieId = useSelector(store => store.movies?.trailerVideo?.id);
  const navigate = useNavigate();
  const handlePlayButton =(movieId)=>{
       navigate(`/movie/${movieId}`)
}
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-lg md:text-6xl font-bold'>{title}</h1>
      <p className=' hidden md:block py-6 text-l w-1/4'>{overview}</p>
      <div className=''>
        <button onClick={()=>handlePlayButton(movieId)} className='bg-white mt-2  px-1.5 md:px-12 py-1 md:py-2 text-md md:text-xl text-black rounded-lg hover:opacity-80 cursor-pointer ' > ▶️Play</button>
        <button onClick={()=>handlePlayButton(movieId)} className='mx-2 text-white bg-gray-500 px-1.5 md:px-12 py-1 md:py-2  md:text-xl rounded-sm opacity-50  hover:opacity-80 cursor-pointer ' >More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle