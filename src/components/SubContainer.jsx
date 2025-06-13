import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

function SubContainer() {
    const movies = useSelector(store => store.movies)
      const langKey= useSelector((store=>store.configure.language))

    return (
        movies.nowPlayingMovies && (
            <div className='bg-black min-h-screen'>
                <div className='-mt-32 md:-mt-52 relative z-20 pb-10'>
                    <div className='pt-4 space-y-2 md:space-y-4'>
                        <MovieList title={lang[langKey].nowPlaying} movies={movies.nowPlayingMovies}/>
                        <MovieList title={lang[langKey].trendingMovies} movies={movies.trendingMovies}/>
                        <MovieList title={lang[langKey].popularOnNetflix} movies={movies.popularMovies}/>
                        <MovieList title={lang[langKey].upcomingMovies} movies={movies.upcomingMovies}/>
                        <MovieList title={lang[langKey].horrorMovies} movies={movies.horrorMovies}/>
                    </div>
                </div>
            </div>
        )
    )
}

export default SubContainer