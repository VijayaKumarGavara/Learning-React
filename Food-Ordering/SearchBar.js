import { useState } from "react";

export default function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-bar"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button 
        type="search-btn" 
        onClick={() => props.onSearch(searchText)}
            >
          Search
        </button>
      </div>
    </>
  );
}
