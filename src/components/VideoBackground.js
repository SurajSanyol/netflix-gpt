import React from 'react'
// import useMovieTrailer from '../utils/useMovieTrailer';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';



const VideoBackground = ({ movieId }) => {

  useMovieTrailer(movieId);
  const video = useSelector((store) => store.movie?.nowPlayingTrailer);

  if (!video) return;

  return (
    <div className=' w-screen  '>

      <iframe className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + video.key + "?autoplay=1&mute=1&loop=1&playlist=" + video.key + "&controls=0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>

    </div>
  )
}

export default VideoBackground