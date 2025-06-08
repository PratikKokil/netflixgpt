
import logo from '../utils/logo.png';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import{auth} from '../utils/firebase'

const Header = () => {

  const user = useSelector((state)=>state.user)
  const navigate = useNavigate();


  const handleSignOut=()=>{
     signOut(auth).then(() => {
     navigate("/");
   }).catch((error) => {
 
});
  }
  return (
    <div className="w-full h-[80px] bg-gradient-to-b from-black/80 to-transparent px-10 py-4 flex justify-between items-center absolute z-10">
      <img src={logo} alt="logo" className="w-44" />

      { user  &&
       (<div className="flex items-center gap-3  px-4 py-2 rounded-lg shadow-md">
          <img
            src={user.photoURL}
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
{/* <div className='flex'>
        <span>{user.displayName}</span>
       <div className=''> <img src={user.photoURL}></img></div> 
       <button onClick={handleSignOut}className='bg-red-500 font-bold px-3 py-1 rounded-md text-white'>Sign Out</button>
        </div> */}
export default Header;
