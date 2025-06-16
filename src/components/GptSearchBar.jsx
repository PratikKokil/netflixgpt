import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/googleGenAi'
import ai from '../utils/googleGenAi'
import { options } from '../utils/constant'
import { addGptMovieResults } from '../utils/GptSlice'

const GptSearchBar = () => {
   const langKey= useSelector((store=>store.configure.language))
   const searchText = useRef(null);
   const dispatch = useDispatch();

  const searchMovieTMDB=async(movieName)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', options)
    const json = await data.json();
    const movieList= json.results;
    const filteredData = movieList.filter(movie=> movie.original_title = movieName && movie.poster_path)
    return filteredData;
  }
  const handleGptSearch= async()=>{

       const query = "Act as a movie recommendation system do not provide year of released or any other information and suggest some movies for the query: "+
       searchText?.current.value + 
       "Strictly give me response with , comma seperated like the example result given ahead.Example Result: Golmal, Krish, Gadar,Sholay"
         
       const response = await ai.models.generateContent({
         model: "gemini-2.0-flash",
          contents: query,
         });
      // if(!response){
      //   // <Error/>
      // }      
       console.log(response.text)
       const movieList = response.text.split(",");
       const promiseArray=movieList.map(movie=>searchMovieTMDB(movie));
      
       const tmdbResults = await Promise.all(promiseArray);
       console.log(tmdbResults);
       const filteredTmdbResults = tmdbResults.filter(movie=>movie.original_language="hi")
       console.log(filteredTmdbResults);
       dispatch(addGptMovieResults({movieNames:movieList,gptMovieResults:filteredTmdbResults}))
  }
  
  return (
    <div className="p-24 flex justify-center">
      <input 
        className='bg-gray-900 text-white w-[50%] px-6 py-4 text-lg rounded-l-2xl border border-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300' 
        ref={searchText}
        type='text'
        placeholder={lang[langKey].gptPlaceholder}
      />
      <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-r-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center' onClick={handleGptSearch}>
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        {lang[langKey].search}
      </button>
    </div>
  )
}


export default GptSearchBar