import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './GptSlice'; 
import configureReducer from './configureSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        configure:configureReducer
    }
});

export default appStore;
