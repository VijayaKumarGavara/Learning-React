import { useState } from "react";

export default function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="border-2 rounded-lg py-1 px-4 focus:border-red-400"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button 
        className="bg-emerald-400 px-4 py-1 m-4 border-transparent rounded-lg hover:cursor-pointer"
        type="search-btn" 
        onClick={() => props.onSearch(searchText)}
            >
          Search
        </button>
      </div>
    </>
  );
}
