import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleGptSearchView } from '../utils/GptSlice';
import Shimmer from './Shimmer';

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredMovies = movies?.filter((movie) => movie.poster_path) || [];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };
  const handleMovieClick =(movieid)=>{
    navigate(`/movie/${movieid}`)
    dispatch(toggleGptSearchView());
  }

  if (filteredMovies.length === 0) {
    return <Shimmer/>;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <h1 className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4 hover:text-gray-300 transition-colors duration-200">
          {title}
        </h1>

        <div className="relative group/main">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 p-2 z-10 rounded-full hidden group-hover/main:block"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          {/* Movie Scroll Container */}
          <div
            ref={scrollRef}
            className="flex space-x-0.5 overflow-x-scroll scrollbar-hide pb-6 scroll-smooth"
          >
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={()=>handleMovieClick(movie.id)}
                className="min-w-[180px] md:min-w-[200px] lg:min-w-[240px] transform transition-transform duration-300 hover:scale-110 hover:z-10 cursor-pointer"
              >
                  <MovieCard posterPath={movie.poster_path} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 p-2 z-10 rounded-full hidden group-hover/main:block"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;