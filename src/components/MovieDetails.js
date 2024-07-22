
import React, { useEffect, useState } from 'react'
import { IoIosPlay } from "react-icons/io";
import { useSearchParams } from 'react-router-dom';
import { API_OPTION } from '../utils/constant';


const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState();
    const [searchParam] = useSearchParams();
    const movieId = searchParam.get("v");
     console.log(movieId);

    const getMovieDetail = async () => {
        const data = await (await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTION)).json();

        setMovieDetails(data);
    }
    useEffect(() => {
        getMovieDetail();
    }, [])

    console.log(movieDetails);
    if (!movieDetails && !movieId) return;

    return (
        <div className='w-screen h-screen'>
            {/* <Header/> */}
            <img className ='w-screen h-[100%] -z-20 absolute opacity-[60%] ' src={'https://image.tmdb.org/t/p/w500'+movieDetails?.backdrop_path}/>

            <div className='flex flex-row  gap-x-2  py-10 h-[100vh]  bg-black opacity-[79%] -z-40'>
                <div className=' w-[30%] mx-auto px-10 z-10'>
                    <img className=' rounded-md ' src={"https://image.tmdb.org/t/p/w300" + movieDetails?.poster_path} alt='background' />
                </div>

                <div className=' w-[67%] '>
                    <h3 className=' text-white font-bold text-3xl'>{movieDetails?.original_title}</h3>
                    <div className='flex gap-x-3 '>
                        <span className=' font-semibold text-white'>{movieDetails?.release_date}({movieDetails?.origin_country[0]})</span>
                        {
                            movieDetails?.genres?.map((e)=><span key={e.id} className=' font-semibold bg-slate-400 px-2 rounded-md '>{e.name}</span>)
                        }
                        {/* <span className=' font-semibold '>1h 49m</span> */}
                    </div>
                    <button className='flex text-1xl font-semibold my-4 text-white py-2 px-5 bg-red-400 rounded-md'><IoIosPlay className='my-auto text-1xl  ' /> play Trailer</button>
                    <div>
                        <h3 className='text-gray-300 italic'>{movieDetails?.tagline}</h3>
                        <div className='text-white'>
                            <h2 className='font-semibold text-xl'>Overview</h2>
                            <p className='text-gray-300 '>{movieDetails?.overview}</p>
                        </div>

                        {/* <div>
                            <h2>Alex Garland</h2>
                            <p>Director, Writer</p>
                            
                        </div> */}
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default MovieDetails