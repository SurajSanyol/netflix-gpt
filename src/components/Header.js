
import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebaseValidation';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeuser } from '../utils/userSlice'
import { LOGO } from '../utils/constant';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

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

  return (
    <div className={` absolute px-10 py-2 z-10 flex justify-between w-full  ${user && ' bg-black'}` }>
      <img className='w-40' src={LOGO} alt='logo' />


      {
        user && (
          <div className=' flex p-2 gap-x-1 '>
            {/* <FaUserAlt className='w-8 h-8 my-auto' /> */}
            <img className='w-10 h-10 my-auto rounded-sm' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'/>
            <button onClick={handleSignOut} className='font-bold text-slate-50 ' >Sign out</button>
          </div>
        )
      }

    </div>
  )
}

export default Header