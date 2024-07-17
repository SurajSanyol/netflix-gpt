import { useDispatch, useSelector } from "react-redux";
import { addTrandingTvShow } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";



const useTrendingTvShow = ()=>{


    const dispatch = useDispatch();
    const TrendingTvShow = useSelector(store => store.movie.trendingTvShows);
     
      const getTrendingTvShow = async ()=>{
           const data = await fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US',API_OPTION);
           const jsonData = await data.json();
           dispatch(addTrandingTvShow(jsonData.results));
      }

      useEffect(()=>{
       !TrendingTvShow && getTrendingTvShow();
      },[])
}

export default useTrendingTvShow;