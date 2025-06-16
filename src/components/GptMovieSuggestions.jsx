import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = ()=> {

const {gptMovieResults,gptSearchMovies}= useSelector(store=>store.gpt);

    if(!gptSearchMovies){
    return null;
     }
   return(
    <>
    {gptSearchMovies.map((movieName,index)=> <MovieList key={movieName} title={movieName} movies={gptMovieResults[index]}/>)}
    </>
   )

}

export default GptMovieSuggestions;
