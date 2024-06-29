import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SuggestionMovieList = () => {

  const { movieName, movieResult } = useSelector((store) => store?.gpt);

  if (!movieName) return null;

  return (
    <div className=' mt-4  text-white'>

      <div>
        {
          movieName.map((moviename, index) => <MovieList key={index} title={moviename} movies={movieResult[index]} />)
        }
      </div>

    </div>
  )
}

export default SuggestionMovieList