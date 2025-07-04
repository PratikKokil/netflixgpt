import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

  const MainContainer = () => {
   const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
   if(!movies) return
   const mainMovie= movies[0];
   const{original_title,overview,id}=mainMovie;
  return (
    <div>
      <div className="pt-35 bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview}/>
      </div>
     <VideoBackground movieId ={id}/>
    </div>
  );
};

export default MainContainer;
