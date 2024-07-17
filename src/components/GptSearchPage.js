import React from 'react'
import GptSearchBar from './GptSearchBar'
import SuggestionMovieList from './SuggestionMovieList'
import bg from '../Assets/background.jpg'

const GptSearchPage = () => {
  return (

    <div>   
            <div className=' fixed -z-20'>
                <img className='w-screen h-screen object-cover' src={bg} alt='background' loading=' lazy' />
            </div>
           <GptSearchBar/>
           <SuggestionMovieList/>
           
    </div>
  )
}

export default GptSearchPage