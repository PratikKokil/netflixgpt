import logo from '../utils/logo.png';
import userIcon from '../utils/Netflix-avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth'; 
import { auth } from '../utils/firebase';
import { removeUser, addUser } from '../utils/userSlice'; // Added addUser
import { useEffect } from 'react'; // Added useEffect
import { toggleGptSearchView } from '../utils/GptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configureSlice';
import lang from '../utils/languageConstants'

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langKey= useSelector((store=>store.configure.language))
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGptSearch=()=>{
    dispatch(toggleGptSearchView());
    if (showGptSearch){
      navigate('/browse')
    }
    else{
      navigate('/search')
    }
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return ()=> unsubscribe();
  }, []);


  return (
    <div className="w-full md:h-[80px] bg-gradient-to-b from-black/80 to-transparent px-10 md:py-4 flex flex-col md:flex-row md:justify-between items-center absolute z-10 ">
      <img src={logo} alt="logo" className="w-44 mx-auto md:mx-0" />

      {user &&
       ( 
        <div className="flex  items-center gap-3  px-4 py-2 rounded-lg shadow-md">
          
            <select className='bg-gray-800 text-white p-2 rounded-lg' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>
          
          <button className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600  cursor-pointer text-white font-semibold    rounded-md transition
          ${showGptSearch? 'px-4 py-2 md:px-3 md:py-1.5':'px-4  md:px-3 md:py-1.5'}`}
          onClick={handleGptSearch}>
          {showGptSearch? lang[langKey].home :lang[langKey].movieRecommender}

          </button>
          <img
            src={userIcon}
            alt="User Avatar"
            className="hidden md:block w-9 h-9 rounded-full object-cover border"
          />
          <span className="hidden md:block text-white font-medium">{user.displayName}</span>

          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold px-4 py-2 whitespace-nowrap  md:px-3 md:py-1.5 rounded-md transition"
          >
           {lang[langKey].signOut}
          </button>
        </div>

      )
      }
    </div>
  );
};

export default Header;
