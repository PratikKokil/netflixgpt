import { options } from '../utils/constant'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrendingMovies } from '../utils/moviesSlice'

 export const useTrendingMovies = ()=>{
    
    const dispatch = useDispatch();
    const trendingMovies =useSelector(store=>store.movies.trendingMovies)

    const getTrendingMovies= async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results))
      }

   useEffect(()=>{
    !trendingMovies && getTrendingMovies();
    },[])
}