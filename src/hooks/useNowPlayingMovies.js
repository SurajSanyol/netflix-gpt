import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API, API_OPTION } from '../utils/constant';
import { addNowplayingMovie } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
     
    const dispatch = useDispatch();

  

  const getNowPlayingMovies = async () => {

    const data = await fetch(API, API_OPTION);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowplayingMovie(json.results));

  }

  useEffect(()=>{
       getNowPlayingMovies();
  },[])

}

export default useNowPlayingMovies