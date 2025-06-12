import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import { useHorrorMovies } from '../hooks/useHorrorMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useHorrorMovies();
  return (
    <div >
      <Header/>
      <MainContainer/>
      <SubContainer/>
    </div>
  )
}

export default Browse
