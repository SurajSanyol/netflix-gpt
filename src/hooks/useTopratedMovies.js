import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopRatedMovie } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constant';

const useTopratedMovies = () => {
     
    const dispatch = useDispatch();
     
      const getTopratedMovie = async ()=>{
           const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTION);
           const jsonData = await data.json();
           dispatch(addTopRatedMovie(jsonData.results));
      }

      useEffect(()=>{
        getTopratedMovie();
      },[])
}

export default useTopratedMovies