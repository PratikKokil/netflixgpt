import React, { useEffect } from 'react'
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

 const useMovieTrailer=(movieId)=>{
    
    const dispatch =useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US';

    const getVideos =async() => {
      const data =await  fetch(url,options);
      const json = await data.json();
      const filteredData = json.results.filter((videos)=>videos.type =="Trailer")
      const trailer = filteredData.length ? filteredData[0]: json.results[0];
      dispatch(addTrailerVideo(trailer));
      
    }
    useEffect(()=>{
     getVideos();
    },[])
  }

  export default useMovieTrailer;