import logo from '../utils/logo.png';
import userIcon from '../utils/Netflix-avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Added onAuthStateChanged
import { auth } from '../utils/firebase';
import { removeUser, addUser } from '../utils/userSlice'; // Added addUser
import { useEffect } from 'react'; // Added useEffect

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
    <div className="w-full h-[80px] bg-gradient-to-b from-black/80 to-transparent px-10 py-4 flex justify-between items-center absolute z-10">
      <img src={logo} alt="logo" className="w-44" />
      {user && (
        <div className="flex items-center gap-3  px-4 py-2 rounded-lg shadow-md">
          <img
            src={userIcon}
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover border"
          />
          <span className="text-gray-800 font-medium">{user.displayName}</span>
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1.5 rounded-md transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
