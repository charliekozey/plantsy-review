import { useState } from "react";

function Search({ setSearchInput }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
