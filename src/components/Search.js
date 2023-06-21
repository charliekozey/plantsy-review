import React from "react";

function Search({ setSearchInput, searchInput }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
    </div>
  );
}

export default Search;
