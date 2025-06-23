export const GEMINI_KEY = import.meta.env.VITE_REACT_APP_GEMINI_KEY;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+import.meta.env.VITE_REACT_APP_TMDB_KEY
  }
};

export const Poster_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English"
  },
  {
    identifier: "hindi",
    name: "Hindi"
  }
];
