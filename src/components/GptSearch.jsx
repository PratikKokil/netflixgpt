import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
     <img className='fixed h-screen object-cover md:h-auto -z-10' src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
      alt="background img"
      ></img>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
