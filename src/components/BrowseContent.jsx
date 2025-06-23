import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import { useHorrorMovies } from '../hooks/useHorrorMovies';

const BrowseContent = () => {
  // Fetch all movie data
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useHorrorMovies();

  return (
    <div>
      <MainContainer/>
      <SubContainer/>
    </div>
  )
}

export default BrowseContent