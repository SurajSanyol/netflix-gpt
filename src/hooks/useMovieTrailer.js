import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant"
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";



const useMovieTrailer = (movieId) => {
      
    const dispatch = useDispatch();
    const movieTrailer = useSelector(store => store.movie.nowPlayingTrailer);
    
  
    
    
    useEffect(() => {
       !movieTrailer&& getVideoPlaying();
    }, [])


    const getVideoPlaying = async () => {
       
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos', API_OPTION)
        const json = await data.json();
        
        const filterData = json.results.filter((v) => v.type === "Trailer");
    
        const trailer = filterData.length ? filterData[0] : json.results[0];

        // SetvideoKey(trailer?.key)
        dispatch(addTrailerVideo(trailer))

    }

   
}

export default useMovieTrailer