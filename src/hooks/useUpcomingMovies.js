import { options } from '../utils/constant'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addUpcomingMovies } from '../utils/moviesSlice'

 export const useUpcomingMovies = ()=>{
    
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies)

    const getUpcomingMovies= async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
      }

   useEffect(()=>{
    !upcomingMovies && getUpcomingMovies();
    },[])
}