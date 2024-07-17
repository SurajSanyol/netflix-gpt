import  { useEffect } from 'react'
import { API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUpcommingMovie } from '../utils/movieSlice';
import { useSelector } from 'react-redux';

const useUpcommingMovie = () => {
      
    const dispatch = useDispatch();
    const upcommingMovie = useSelector(store => store.movie.upCommingMovie);
     
      const getUpcommingMovie = async ()=>{
           const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTION);
           const jsonData = await data.json();
           dispatch(addUpcommingMovie(jsonData.results));
      }

      useEffect(()=>{
       !upcommingMovie &&  getUpcommingMovie();
      },[])
}

export default useUpcommingMovie