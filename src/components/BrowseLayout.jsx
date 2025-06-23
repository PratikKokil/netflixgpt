import Header from './Header';
import { Outlet } from 'react-router-dom';
import GptSearch from './gptSearch';
import { useSelector } from 'react-redux';

const BrowseLayout = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch /> : <Outlet />}
    </div>
  );
};

export default BrowseLayout;