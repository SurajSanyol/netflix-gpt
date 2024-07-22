import React from 'react'
import GptSearchBar from './GptSearchBar'
import SuggestionMovieList from './SuggestionMovieList'
// import bg from '../Assets/background.jpg'

const GptSearchPage = () => {
  return (

    <div>   
            <div className=' fixed -z-20 '>
                <img className='w-screen h-screen object-cover' src={"https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg?w=996&t=st=1721391360~exp=1721391960~hmac=04274d47805ede81fae0db497f5726bb6df45e11d597ca9942f02819fad5e4a2"} alt='background' loading= "lazy" />
            </div>
           <GptSearchBar/>
           <SuggestionMovieList/>
           
    </div>
  )
}

export default GptSearchPage