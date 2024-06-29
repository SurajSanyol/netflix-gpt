import React, { useRef } from 'react'
import { genAI } from './GPT/Ai'
import { useDispatch, useSelector } from 'react-redux'
import { addGptSearchQueryMovie } from '../utils/gptSlice';
import { API_OPTION } from '../utils/constant';


const GptSearchBar = () => {
    
    const dispatch = useDispatch();
    const searchText = useRef(null)

    // search movie tmdb
     const searchMovieTmdb = async (movie)=>{
        
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1" ,API_OPTION);
        const jasonData = await data.json();
        return jasonData.results;

     }
    
    const handleClick = async () => {
        // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts

        const prompt = searchText.current.value + " , give only 5 movie name and separated comma";
        searchText.current.value=null;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text().split(",");
        
         

        // for each movie i will calll Tmdb api
        const promiseArray = text.map((movie)=>searchMovieTmdb(movie));
        //[promise,promise , promise,promise]
        
        const tmdbResult = await Promise.all(promiseArray)

        dispatch(addGptSearchQueryMovie({movieName:text,movieResult:tmdbResult}))

    }
     

    

    return (


        <div className='pt-[15%] w-1/2 mx-auto '>

            <form  onClick={(e) => e.preventDefault()} className='bg-black grid grid-cols-12 ' >
                <input ref={searchText} className=' outline-0 col-span-9 py-2 px-4' type='text' placeholder='search movie what you want' />
                <button onClick={handleClick} className=' outline-0 col-span-3 py-2 px-4 text-white bg-red-500'>Search</button>
            </form>


        </div >

    )
}

export default GptSearchBar