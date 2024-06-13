import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {

   const[isSignIn,setIsSignIn]= useState(true);

   const toggleSignInForm = ()=>{
         setIsSignIn(!isSignIn)
   }
  return (
    <div >
          <Header/>
          <div className=' absolute  '>
              <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg-image'/>
          </div>

           {/* sign In from */}

           <div className='bg-black w-4/12 relative mx-auto top-20 opacity-[80%] rounded-md'> 
           
                <form className='flex flex-col p-12 text-white'>
                         <h3 className='text-3xl font-bold my-4'>{isSignIn ?"Sign In" : "Sign up"}</h3>
                         {
                          !isSignIn && <input type='text' placeholder='Full Name' className='  bg-black border border-gray-400  px-4 py-3 rounded-md'/>
                         }

                         <input type='text' placeholder='Email Address' className='  bg-black border border-gray-400 my-4 px-4 py-3 rounded-md'/>

                         <input type='password' placeholder='Password' className='  bg-black border border-gray-400 mb-4 px-4 py-3 rounded-md'/>

                         <button className=' bg-red-600   rounded-md py-2 opacity-[100%] text-white font-semibold '>{isSignIn ?"Sign In" : "Sign up"}</button>

                         <h3 className=' my-5'> {isSignIn ? "New to Netflix?":"Already have an account?" }<Link><span onClick={toggleSignInForm} className='text-white font-semibold ml-2 hover:underline'>{isSignIn ?"Sign up" : "Sign In"}.</span></Link></h3>

                </form>
           </div>
    </div>
  )
}

export default Login
