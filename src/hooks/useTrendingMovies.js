import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovie } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";



const useTrendingMovie = () => {
      
    const dispatch = useDispatch();
    const Trendingmovie = useSelector(store => store.movie.trendingmovie);
     
      const getTrendingMovie = async ()=>{
           const data = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US',API_OPTION);
           const jsonData = await data.json();
           dispatch(addTrendingMovie(jsonData.results));
      }

      useEffect(()=>{
       !Trendingmovie &&  getTrendingMovie();
      },[])
}
export default useTrendingMovie;