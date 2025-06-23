import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addMovieDetails } from "../utils/moviesSlice";
import { useEffect } from "react";
const useMovieDetails =(movieId)=>{
    const dispatch = useDispatch();
    const getMovieDetails =async()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/'+movieId+'?language=en-US', options)
        const json = await data.json();
        dispatch(addMovieDetails(json));
        // console.log(json);
    }
    useEffect(()=>{
       getMovieDetails()
    },[])
}

export default useMovieDetails;