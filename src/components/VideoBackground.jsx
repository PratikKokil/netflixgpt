import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({movieId}) {
      useMovieTrailer(movieId);
       const trailerVideo = useSelector(store =>store.movies?.trailerVideo);
       
  return (
   
    <div className="w-full aspect-video">
        <iframe className='w-full aspect-video'  
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; encrypted-media;" >
         </iframe>
    </div>
  )
}


export default VideoBackground
