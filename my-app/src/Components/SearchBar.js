import React, {useState} from "react";


function SearchBar({ setSearchInput }) {
    const [searchBar, setSearchBar] = useState("")


    function handleSubmit(e) {
        e.preventDefault();
        setSearchInput(searchBar)

    }
    
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search for a Destination!"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="submit">Search Destination</button>
    </form>
  );
}




export default SearchBar;