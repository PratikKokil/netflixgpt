import { options } from '../utils/constant'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

 export const useNowPlayingMovies = ()=>{
    
    const dispatch = useDispatch();
    const nowplayingMovies = useSelector(store=>store.movies.nowplayingMovies)

    const getNowPlayingmovies= async()=>{
        const url = 'https://api.themoviedb.org/3/movie/now_playing?&page=1';
        const data = await fetch(url,options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
      }

   useEffect(()=>{
     !nowplayingMovies && getNowPlayingmovies();
    },[])
}