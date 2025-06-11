import { options } from '../utils/constant'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  addPopularMovies } from '../utils/moviesSlice'

 export const usePopularMovies= ()=>{
    
    const dispatch = useDispatch();

    const getPopularMovies= async()=>{

       const url = 'https://api.themoviedb.org/3/movie/popular?page=1';
        const data = await fetch(url,options);
        console.log(data)
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
      }

   useEffect(()=>{
     getPopularMovies();
    },[])
}