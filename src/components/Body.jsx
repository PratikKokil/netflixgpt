// Body.js - Main routing component
import Login from './Login';
import Header from './Header';
import BrowseContent from './BrowseContent';
import GptSearch from './GptSearch';
import MovieInfo from './MovieInfo';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Layout component for routes that need header
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/",
    element: <AppLayout />, // Layout with header
    children: [
      {
        path: "browse",
        element: <BrowseContent />
      },
      {
        path: "search", 
        element: <GptSearch />
      },
      {
        path: "movie/:movieid",
        element: <MovieInfo />
      }
    ]
  }
]);

const Body = () => {
  return <RouterProvider router={approuter} />;
};

export default Body;