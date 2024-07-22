import React, { useRef, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { checkValidData } from '../utils/validFromData'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebaseValidation'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constant';

const Login = () => {
  const dispatch = useDispatch()
  
  
  const [isSignIn, setIsSignIn] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null)
  const displayName = useRef()

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // Sign up logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
          }).then(() => {
            // Profile updated!
            const{uid,email,displayName}=auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          
          
          }).catch((error) => {
            
          });
         
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          
        });
    }
    else {
      // sign in logic
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
         
          
          const{uid,email,displayName}=user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }
  }

  return (
    <div >
      <Header />
      <div className=' absolute  '>
        <img src={BG_IMG} alt='bg' />
      </div>

      {/* sign In from */}

      <div className='bg-black w-4/12 relative mx-auto top-20 opacity-[80%] rounded-md'>

        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col p-12 text-white'>
          <h3 className='text-3xl font-bold my-4'>{isSignIn ? "Sign In" : "Sign up"}</h3>
          {
            !isSignIn && <input ref={displayName} type='text' placeholder='Full Name' className='  bg-black border border-gray-400  px-4 py-3 rounded-md' required={true} />
          }

          <input ref={email} type='text' placeholder='Email Address' className='  bg-black border border-gray-400 my-4 px-4 py-3 rounded-md' required={true} />


          <input ref={password} type='password' placeholder='Password' className='  bg-black border border-gray-400 mb-4 px-4 py-3 rounded-md' required={true} />


          <p className=' text-red-600 mb-1 px-2  font-normal'> {errormessage}</p>


          <button onClick={handleButtonClick} className=' bg-red-600   rounded-md py-2 opacity-[100%] text-white font-semibold '>{isSignIn ? "Sign In" : "Sign up"} </button>

          <h3 className=' my-5'> {isSignIn ? "New to Netflix?" : "Already have an account?"}<Link><span onClick={toggleSignInForm} className='text-white font-semibold ml-2 hover:underline'>{isSignIn ? "Sign up" : "Sign In"}.</span></Link></h3>

        </form>
      </div>
    </div>
  )
}

export default Login
