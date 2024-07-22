
import React from 'react'
import Header from './Header'
import {  useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import Secondary from './Secondary';
import useUpcommingMovie from '../hooks/useUpcommingMovie';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';
import GptSearchPage from './GptSearchPage';
import useTrendingMovie from '../hooks/useTrendingMovies';
import useTrendingTvShow from '../hooks/useTrendingTvShow';
import MovieDetails from './MovieDetails';


const Browse = () => {

  const GptSearchVal = useSelector(store => store.gpt.gptSearch);
  const movieTogglepage = useSelector(store=>store.movie.moviePage);

  useNowPlayingMovies();

  useUpcommingMovie();

  usePopularMovies();
  useTopratedMovies();
  useTrendingMovie();
  useTrendingTvShow()


  return (
    <div className=' overflow-x-hidden' >
      <Header />

      {
         GptSearchVal ? (<GptSearchPage />) : <><MainContainer />
        <Secondary /></>
       
      }

    </div>
  )
}

export default Browse