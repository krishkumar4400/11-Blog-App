import React, { useState } from 'react'

const SearchBar = () => {
  const [input, setInput] = useState('');

  return (
    <div>
        <form className="border inline-flex items-center  border-gray-300 max-w-lg mx-auto bg-white overflow-hidden rounded-md sm:min-w-md max-sm:scale-75 px-4 py-1">
          <input onChange={(e) => setInput(e.target.value)}
          required
            type="text"
            placeholder="Search blogs"
            className="outline-none text-slate-800 border-0 w-full "
          />
          <button className="bg-blue-600 px-8 py-2 rounded-md hover:scale-105 active:scale-95 transition-all duration-200 text-white">
            Search{" "}
          </button>
        </form>
    </div>
  );
}

export default SearchBar
