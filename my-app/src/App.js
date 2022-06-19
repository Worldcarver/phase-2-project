import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header'
import DestinationDisplay from './Components/DesitnationDisplay'
import DestinationList from './Components/DestinationList'

// need to set json server to different port? how?
// send fetch to external api, and send post to json to capture data, inerpolate the data?
// pull data from json not the api
// requests to send data right to json and then render from there


function App() {

  const [destinations, setDestinations] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {

    //use variable with e.target to pull input text to send to api to pull searches
    //post needs a submit button to work?
    //const destination = 'las vegas'

    //https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${destination}&lang=en_US&units=km
    // , options



    
    fetch(`http://localhost:8000/locations`)
	    .then(response => response.json())
	    .then(response => setDestinations(response))
	    .catch(err => console.error(err));


  
  //  fetch('http://localhost:8000/locations'),{
  //    method: 'POST',
  //    headers: { 'Content-Type': 'application/json'},
  //    body: JSON.stringify({title: 'test'})
  // }

}, [])


  return (
    <div className="App">
      <Header />
      <SearchBar setSearchInput={setSearchInput} destinations = {destinations}  />
    </div>
  );
}

export default App;
