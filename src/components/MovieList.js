import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {

  if (!movies) return;

  console.log(movies);

  return (
    <div className=' w-screen '>

      <h3 className='text-3xl py-3 px-4 text-white'>{title} </h3>

      <div className='flex  overflow-x-scroll px-8 py-7'>
        <div className='flex'>
          {
            movies.map((movie) => <MovieCard key={movie.id} posterpath={movie.poster_path} />)
          }

        </div>
      </div>

    </div>
  )
}

export default MovieList