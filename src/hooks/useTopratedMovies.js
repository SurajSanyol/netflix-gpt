import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovie } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constant';

const useTopratedMovies = () => {
     
    const dispatch = useDispatch();
    const topratedMovie = useSelector(store => store.movie.topRatedMovies);
     
      const getTopratedMovie = async ()=>{
           const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTION);
           const jsonData = await data.json();
           dispatch(addTopRatedMovie(jsonData.results));
      }

      useEffect(()=>{
      !topratedMovie && getTopratedMovie();
      },[])
}

export default useTopratedMovies