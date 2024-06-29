import React from 'react'
import { Img_CDN_URL } from '../utils/constant'

const MovieCard = ({posterpath}) => {
 
  if(!posterpath) return;
   
  return (
    <div className='w-48 pr-4'>
        <img className=' rounded-md' src={Img_CDN_URL+posterpath} alt='poster'/>
    </div>
  )
}

export default MovieCard