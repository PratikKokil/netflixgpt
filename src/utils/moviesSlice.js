import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        trendingMovies:null,
        upcomingMovies:null,
        horrorMovies:null,
        movieDetails:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo= action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addHorrorMovies:(state,action)=>{
            state.horrorMovies=action.payload
        },
        addMovieDetails:(state,action)=>{
            state.movieDetails=action.payload
        }
    }
});

export const  {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies,addUpcomingMovies,addHorrorMovies,addMovieDetails} = moviesSlice.actions;

export default moviesSlice.reducer;