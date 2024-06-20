import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector(store => store.movie?.nowPlayingMovie)
  if (!movies) return;
  const movie = movies[0];
  const { overview, original_title,id } = movie;



  return (
    <div >
      <VideoTitle original_title={original_title} overview={overview}/>
      <VideoBackground movieId ={id}/>
    </div>
  )
}

export default MainContainer