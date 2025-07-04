import { options } from '../utils/constant'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addPopularMovies } from '../utils/moviesSlice'

 export const usePopularMovies= ()=>{
    
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies)

    const getPopularMovies= async()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options);
        const json = await data.json();
         dispatch(addPopularMovies(json.results))

      }

   useEffect(()=>{
    !popularMovies && getPopularMovies();
    },[])
}