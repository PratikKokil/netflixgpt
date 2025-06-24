import { useParams } from "react-router-dom"
import VideoBackground from "./VideoBackground";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { Poster_CDN_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const MovieInfo = () => {
    const { movieid } = useParams();
    const movieDetails = useSelector(store=>store.movies.movieDetails)
    useMovieDetails(movieid);

    if(!movieDetails){
        return (
            <Shimmer/>
        )
    }

    return (
        
        <div className="relative min-h-screen ">
            {/* Background */}
            <div
            className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                "url('https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg')",
            }}
            ></div>
            
            {/* Video Section */}
            <div className="pt-40 md:pt-0">
            <VideoBackground movieId={movieid} />
            </div>
            {/* Movie Info Section */}
        <div className="flex flex-col md:flex-row items-start gap-10 px-8 py-12 text-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg     mx-auto">
        {/* Movie Details Section */}
        <div className="w-full md:w-3/4">
            <h1 className="text-4xl font-extrabold mb-4 text-yellow-300">
            {movieDetails?.original_title}
            </h1>

            <p className="text-lg leading-relaxed mb-4 text-gray-200">
            {movieDetails?.overview}
            </p>

            <p className="mb-2">
            <span className="font-semibold text-gray-300">Release Date:</span>{" "}
            {movieDetails?.release_date}
            </p>

            <p className="mb-2">
            <span className="font-semibold text-gray-300">Runtime:</span>{" "}
            {movieDetails?.runtime} mins
            </p>

            <div className="my-4">
            <span className="font-semibold text-gray-300">Genres:</span>{" "}
            {movieDetails?.genres.map((genre) => (
                <span
                key={genre.id}
                className="inline-block bg-gray-800 text-sm px-3 py-1 rounded-full mr-2 mt-2 border border-gray-600"
                >
                {genre.name}
                </span>
            ))}
            </div>

            <p className="text-lg mt-4">
            <span className="font-semibold text-gray-300">Rating:</span>{" "}
            <span className="text-green-400 font-bold">{movieDetails?.vote_average ? movieDetails?.vote_average?.toFixed(1) : "Not available"}</span>
            </p>
        </div>

        {/* Movie Poster */}
        <div className="w-48 flex-shrink-0">
            <img
            className="w-full h-auto rounded-xl shadow-2xl border border-gray-600"
            alt="Movie_Poster"
            src={Poster_CDN_URL + movieDetails?.poster_path}
            />
        </div>
        </div>

        </div>
);
    
}
export default MovieInfo;



