
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

const Browse = () => {

  const GptSearchVal = useSelector(store => store.gpt.gptSearch);

  useNowPlayingMovies();

  useUpcommingMovie();

  usePopularMovies();
  useTopratedMovies();


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