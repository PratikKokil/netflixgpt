import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey= useSelector((store=>store.configure.language))
  return (
    <div className="p-24 flex justify-center">
      <input 
        className='bg-gray-900 text-white w-[50%] px-6 py-4 text-lg rounded-l-2xl border border-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300' 
        type='text'
        placeholder={lang[langKey].gptPlaceholder}
      />
      <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-r-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center'>
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        {lang[langKey].search}
      </button>
    </div>
  )
}

export default GptSearchBar