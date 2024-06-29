import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API, API_OPTION } from '../utils/constant';
import { addNowplayingMovie } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
     
    const dispatch = useDispatch();
    
    
    const payingMovie = useSelector(store => store.movie.nowPlayingMovie);
  

  const getNowPlayingMovies = async () => {

    const data = await fetch(API, API_OPTION);
    const json = await data.json();
    
    dispatch(addNowplayingMovie(json.results));

  }

  useEffect(()=>{
      !payingMovie && getNowPlayingMovies();
  },[])

}

export default useNowPlayingMovies