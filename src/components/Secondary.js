import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondary = () => {
  const movieList = useSelector(store => store.movie);

  return (
    <div className='bg-black ' >
      <div className=' -mt-60 relative z-20'>
        <MovieList title={"Now Playing Movies"} movies={movieList.nowPlayingMovie} />
        <MovieList title={"Upcomming Movies"} movies={movieList.upCommingMovie} />
        <MovieList title={"Top rated Movies"} movies={movieList.topRatedMovies} />
        <MovieList title={"Populer Movies"} movies={movieList.popularmovies} />
        <MovieList title={"Trending Movies"} movies={movieList.nowPlayingMovie} />
      </div>
    </div>

  )
}

export default Secondary