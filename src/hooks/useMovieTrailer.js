import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant"
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";



const useMovieTrailer = (movieId) => {
      
    const dispatch = useDispatch();
    
    useEffect(() => {
        getVideoPlaying();
    }, [])


    const getVideoPlaying = async () => {
       
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos', API_OPTION)
        const json = await data.json();
        //  console.log(json.results);
        const filterData = json.results.filter((v) => v.type === "Trailer");
        // console.log(videos);
        const trailer = filterData.length ? filterData[0] : json.results[0];

        // SetvideoKey(trailer?.key)
        dispatch(addTrailerVideo(trailer))

    }

   
}

export default useMovieTrailer