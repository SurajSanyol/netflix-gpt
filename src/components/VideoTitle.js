import React from 'react'
import { FiInfo } from "react-icons/fi";
import { IoIosPlay } from "react-icons/io";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className='pt-44 px-11 w-full absolute bg-gradient-to-r bg-black opacity-60 aspect-video text-white  '>
      <h3 className=' font-semibold  text-4xl font-serif'>{original_title}</h3>
      <p className=' font-normal w-1/3 mt-7'>{overview}</p>
      <div className='flex gap-x-2 mt-4'>

        <button className=' flex bg-white px-6 text-black  rounded-sm py-1 gap-x-2'><IoIosPlay  className=' my-auto '/>Play</button>

        <button className=' flex bg-white px-6 text-black  rounded-sm py-1 gap-x-2'> <FiInfo className='my-auto' /> Info</button>

      </div>
    </div>
  )
}

export default VideoTitle