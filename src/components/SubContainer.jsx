import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SubContainer() {
    const movies = useSelector(store => store.movies)

    return (
        movies.nowPlayingMovies && (
            <div className='bg-black min-h-screen'>
                <div className='-mt-32 md:-mt-52 relative z-20 pb-10'>
                    <div className='pt-4 space-y-2 md:space-y-4'>
                        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                        <MovieList title={"Trending Now"} movies={movies.trendingMovies}/>
                        <MovieList title={"Popular on Netflix"} movies={movies.popularMovies}/>
                        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
                        <MovieList title={"Horror Movies"} movies={movies.horrorMovies}/>
                    </div>
                </div>
            </div>
        )
    )
}

export default SubContainer