import { createSlice } from "@reduxjs/toolkit";



const GPTSearch = createSlice({
   name: "gpt",
   initialState: {
      gptSearch: false,
      movieResult: null,
      movieName :null,
   },
   reducers: {
      toggleGptSearch: (state) => {
         state.gptSearch = !state.gptSearch;
      },
      addGptSearchQueryMovie: (state, action) => {
         const {movieResult,movieName} = action.payload;
         state.movieResult = movieResult;
         state.movieName = movieName;

      }
   }
})


export const { toggleGptSearch, addGptSearchQueryMovie } = GPTSearch.actions;
export default GPTSearch.reducer;