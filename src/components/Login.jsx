import React, { useState, useRef} from 'react'
import Header from './Header'
import { validateData } from '../utils/validate';
import '../index.css';
import { auth } from '../utils/firebase'; // Import the initialized auth
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";


const Login = () => {

   const [isSignInForm,setIsSignInForm]=useState(true);
   const [errormessage,setErrormessage]= useState(null);


   const email = useRef(null);
   const password = useRef(null);
   const confirmPassword = useRef(null);
   const name =useRef(null);
   

   const handleButtonClick = ()=>{
    //validate data
    const errormessage= validateData(email.current.value,password.current.value);
    setErrormessage(errormessage);

    if(errormessage) return;
    
    if(!isSignInForm){
      if(password.current.value !== confirmPassword.current.value ){
        setErrormessage("Password does not match")
        return
      }
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
              displayName: name.current.value
            }).then(() => {
                  const {uid,email,displayName,photoURL} = auth.currentUser;
                  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            }).catch((error) => {
             
            });
      
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorCode+" "+errorMessage);
      });
    
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode+" "+errorMessage);
        });

    }
   }

   const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
    setErrormessage(null);
   }

  return (

    <div>

      <Header/>
      <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
      alt="background img"
      ></img>

      <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 absolute p-12 text-white my-36 mx-auto right-0 left-0  bg-black/80' >
      <h1 className='font-bold text-3xl my-4 '>{isSignInForm ?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && (
          <input 
          type="text" 
          ref={name}
          placeholder='Full Name'
          className='p-3 my-2 w-full border-2 rounded-md   bg-black/80 '>
          </input>
        )}

        <input 
        type="text" 
        ref={email} 
        placeholder='Email Address' 
        className='p-3 my-2 w-full border-2 rounded-md bg-black/80 ' >
        </input>

        <input 
        type='password' 
        ref={password} 
        placeholder='password' 
        className='p-3 my-2 w-full border-2 rounded-md bg-black/80  '>
        </input>

        {!isSignInForm &&
          (
            <input
             type='password' 
             ref={confirmPassword}
             placeholder='Confirm your password' 
             className='p-3 my-2 w-full border-2 rounded-md  bg-black/80 '>
             </input>
          )
        }

        <p 
        type ="text" 
        className='text-lg font-bold text-red-700 py-4'>
        {errormessage}
        </p>

        <button 
        className='p-2 my-2 w-full bg-red-700 opacity-100' 
        onClick={handleButtonClick} >
          {isSignInForm?"Sign In":"Sign Up"}
        </button>

        <p className='py-4 cursor-pointer'
        onClick={toggleSignInForm}>
          {isSignInForm?"New to Netflix? Sign Up Now.":"Already a user? Sign In Now."}
        </p>
      </form>
    </div>

  )
}

export default Login