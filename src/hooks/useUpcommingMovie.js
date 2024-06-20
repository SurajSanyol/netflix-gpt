import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUpcommingMovie } from '../utils/movieSlice';

const useUpcommingMovie = () => {
      
    const dispatch = useDispatch();
     
      const getUpcommingMovie = async ()=>{
           const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTION);
           const jsonData = await data.json();
           dispatch(addUpcommingMovie(jsonData.results));
      }

      useEffect(()=>{
         getUpcommingMovie();
      },[])
}

export default useUpcommingMovie