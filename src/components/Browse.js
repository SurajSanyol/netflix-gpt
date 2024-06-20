
import React, { useEffect } from 'react'
import Header from './Header'
import { API,API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowplayingMovie } from '../utils/movieSlice';
import MainContainer from './MainContainer';
import Secondary from './Secondary';
import useUpcommingMovie from '../hooks/useUpcommingMovie';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';

const Browse = () => {

 
  useNowPlayingMovies();

  useUpcommingMovie();

  usePopularMovies();
  useTopratedMovies();


  return (
    <div className=' overflow-x-hidden' >
      <Header />
      <MainContainer/>
      <Secondary/>
    </div>
  )
}

export default Browse