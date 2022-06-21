import React, {useState} from "react";


function SearchBar({ setSearchInput }) {
    const [searchBar, setSearchBar] = useState("")

    //const destination = setSearchBar(searchBar)

    function handleSubmit(e) {
        e.preventDefault();
        setSearchInput(searchBar)
    }
    
    // function apiSearch(){
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': 'd731705817mshe230c4e09e3f014p16249djsn407579c5d12d',
    //       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    //     }
    //   };
    //   (() => {
    //     fetch(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${destination}&lang=en_US&units=km`, options)
    //       .then(res => res.json())
    //       .then(data => console.log(data))
    // }, [])
    // }

    // function searchInput(e){
    //   e.preventDefault();
    //   fetch('http://localhost:8000/locations'),{
    //     method: 'POST'

    //   }

    // }
    
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