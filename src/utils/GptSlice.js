import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovieResults:null,
        gptSearchMovies:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
              state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResults:(state,action)=>{
            const{movieNames,gptMovieResults}=action.payload;
            state.gptSearchMovies=movieNames;
            state.gptMovieResults=gptMovieResults
        }
    }
});


export default gptSlice.reducer;
export const{toggleGptSearchView,addGptMovieResults} = gptSlice.actions