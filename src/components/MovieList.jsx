// import React from 'react'
// import MovieCard from './MovieCard'
// import { useSelector } from 'react-redux'

// const MovieList = ({title,movies}) => {
//   const filteredMovies = movies?.filter((movie=>movie.poster_path)) ||[];
//   if(filteredMovies.length == null){
//     return(
//       <div>Loading.....</div>
//     )
//   }
//   return (

//       <div className='px-6'>
//             <h1 className='text-3xl py-4 text-white'>{title}</h1>
//         <div className='flex overflow-x-scroll'>
        
//         <div className='flex'>
//             {filteredMovies.length>0 &&
//             filteredMovies.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path} />) 
//             } 
          
//         </div>
//         </div>
        
//     </div>
//   )
// }

// export default MovieList


import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    const filteredMovies = movies?.filter((movie=> movie.poster_path ))||[] ;
    if(filteredMovies.length === null){
      return(
       <div>Loading.....</div>
      )
    }
   
    return (
        <div className='px-4 md:px-12 mt-4 space-y-8'>
            <div>
                <h1 className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4 hover:text-gray-300 transition-colors duration-200'>
                    {title}
                </h1>
                <div className='relative group/main'>
                    <div className='flex space-x-0.5 overflow-x-scroll scrollbar-hide pb-6 group-hover/main:overflow-x-auto'>
                        {filteredMovies.length>0 &&
                            filteredMovies.map(movie => (
                                <div key={movie.id} className='min-w-[180px] md:min-w-[200px] lg:min-w-[240px] transform transition-transform duration-300 hover:scale-110 hover:z-10 cursor-pointer'>
                                    <MovieCard posterPath={movie.poster_path} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieList