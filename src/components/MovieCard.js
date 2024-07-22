import React, { useEffect } from 'react'
import { Img_CDN_URL } from '../utils/constant'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovieId } from '../utils/movieSlice';

const MovieCard = ({ posterpath, movieId }) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!posterpath) return;



  return (
    <div className='w-48 pr-4 '>
      <Link to={"/browse/movie?v=" + movieId}>
        <img onClick={()=>dispatch(addMovieId(movieId))} className=' rounded-md  cursor-pointer transition duration-500  hover:scale-125 ease-out' src={Img_CDN_URL + posterpath} alt='poster' />
      </Link>
    </div>
  )
}

export default MovieCard