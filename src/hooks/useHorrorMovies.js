import { options } from '../utils/constant'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addHorrorMovies } from '../utils/moviesSlice'

 export const useHorrorMovies = ()=>{
    
    const dispatch = useDispatch();
    const horrorMovies = useSelector(store=>store.movies.horrorMovies)

    const getHorrorMovies= async()=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=horror&include_adult=false&language=en-US&page=1', options)
        const json = await data.json();
        dispatch(addHorrorMovies(json.results))
      }

   useEffect(()=>{
    !horrorMovies && getHorrorMovies();
    },[])
}