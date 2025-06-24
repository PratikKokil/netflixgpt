import React from 'react'
import { Poster_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath){
    return null;
  }
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img alt='Movie_Poster' src={Poster_CDN_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard