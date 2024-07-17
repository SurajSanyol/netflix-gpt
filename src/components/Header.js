
import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebaseValidation';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeuser } from '../utils/userSlice'
import { LOGO, user_img } from '../utils/constant';
import { toggleGptSearch } from '../utils/gptSlice';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const GptSearchVal = useSelector(store => store.gpt.gptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.


    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
        navigate("/");
      }
    });

    return () => unsubscribe(); 
  }, [])

  const handleGptSearch = () => {
    dispatch(toggleGptSearch())
   
  }

  return (
    <div className={` absolute px-10 py-2 z-10 flex  sm:flex-row flex-col   justify-between w-full  ${(user && !GptSearchVal) && ' bg-black '}  ` }>
      <img className='w-40 sm:mx-0 mx-auto' src={LOGO} alt='logo' />


      {
        user && (
          <div className=' flex py-2 gap-x-1 sm:mx-0 mx-auto '>
            {/* <FaUserAlt className='w-8 h-8 my-auto' /> */}
            <button onClick={handleGptSearch} className=' bg-purple-600 text-white px-4 h-11 my-auto  rounded-md'> {
              GptSearchVal ? "Go-Home" : "Gpt Search"
            }
            </button>
            <img className='w-10 h-10 my-auto rounded-sm' src={user_img} alt='user' />
            <button onClick={handleSignOut} className='font-bold text-slate-50 ' >( Sign out )</button>
          </div>
        )
      }

    </div>
  )
}

export default Header