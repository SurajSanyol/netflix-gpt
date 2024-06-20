
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovie } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constant';

const usePopularMovies = () => {
       
    const dispatch = useDispatch();
     
      const getPopularMovie = async ()=>{
           const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTION);
           const jsonData = await data.json();
           dispatch(addPopularMovie(jsonData.results));
      }

      useEffect(()=>{
        getPopularMovie();
      },[])
}

export default usePopularMovies