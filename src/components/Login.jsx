import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
   const [isSignInForm,setIsSignInForm]=useState([true]);
   const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
   }
  return (

    <div>
      <Header/>
      <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
      alt="background img"
      ></img>
      <form className='w-3/12 absolute p-12 text-white my-36 mx-auto right-0 left-0  bg-black/80' >
      <h1 className='font-bold text-3xl my-4 '>{isSignInForm ?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && (
          <input type="text" placeholder='Full Name'className='p-4 my-2 w-full border-2 rounded-md   bg-black/80 '></input>
        )}
        <input type="text" placeholder='Email Address' className='p-3 my-2 w-full border-2 rounded-md bg-black/80 ' ></input>
        <input type='password' placeholder='password' className='p-3 my-2 w-full border-2 rounded-md bg-black/80 '></input>
        {!isSignInForm &&
          (
            <input type='password' placeholder='Confirm your password' className='p-4 my-2 w-full border-2 rounded-md  bg-black/80 '></input>
          )
        }
        <button className='p-2 my-2 w-full bg-red-700 opacity-100' >{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now.":"Already a user? Sign In Now."}</p>
      </form>
    </div>

   
  )
}

export default Login