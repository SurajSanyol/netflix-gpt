import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/constant'
import SuggestionMovieList from './SuggestionMovieList'

const GptSearchPage = () => {
  return (
    <div>   
            <div className=' fixed -z-20'>
                <img className='w-screen h-screen object-cover' src={BG_IMG} alt='bg-image' />
            </div>
           <GptSearchBar/>
           <SuggestionMovieList/>
           
    </div>
  )
}

export default GptSearchPage