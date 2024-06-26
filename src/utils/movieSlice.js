import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
     name:"nowPlayingMovie",
     initialState:{
         nowPlayingMovie:null,
         nowPlayingTrailer:null,
         upCommingMovie:null,
         topRatedMovies:null,
         popularmovies:null,
     },
     reducers:{
           addNowplayingMovie  :(state,action)=>{
               state.nowPlayingMovie=action.payload;
           },
           addTrailerVideo:(state,action)=>{
             state.nowPlayingTrailer=action.payload;
           },
           addUpcommingMovie :(state , action)=>{
             state.upCommingMovie = action.payload;
           },
           addTopRatedMovie :(state , action)=>{
            state.topRatedMovies = action.payload;
          },
          addPopularMovie :(state , action)=>{
            state.popularmovies = action.payload;
          },
     }
})

export const {addNowplayingMovie,addTrailerVideo,addUpcommingMovie,addTopRatedMovie,addPopularMovie}= movieSlice.actions;
export default movieSlice.reducer;