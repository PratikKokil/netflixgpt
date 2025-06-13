import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
import GptSearch from './gptSearch';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import { useHorrorMovies } from '../hooks/useHorrorMovies';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useHorrorMovies();

  return (
    <div >
      <Header/>

      {showGptSearch ? <GptSearch/>:
       <>
      <MainContainer/>
      <SubContainer/>
      </>}


      
    </div>
  )
}

export default Browse
