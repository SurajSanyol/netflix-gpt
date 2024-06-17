
import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebaseValidation';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import userSlice from '../utils/userSlice';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store=>store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className=' absolute px-10 py-2 z-10 flex justify-between w-full'>
      <img className='w-40' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
     

     {
        user &&(
          <div className=' flex p-2 '>
         <FaUserAlt className='w-8 h-8 my-auto'/>
        <button onClick={handleSignOut} className='font-bold ' >Sign out</button>
      </div>
        )
     }
      
    </div>
  )
}

export default Header