import { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar'



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
    const destination = 'las vegas'
    //add const here
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd731705817mshe230c4e09e3f014p16249djsn407579c5d12d',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };




    fetch(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${destination}&lang=en_US&units=km`, options)
	    .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err));


  
  //  fetch('http://localhost:8000/locations'),{
  //    method: 'POST',
  //    headers: { 'Content-Type': 'application/json'},
  //    body: JSON.stringify({title: 'test'})
  // }

}, [])


  return (
    <div className="App">
     <SearchBar setSearchInput = {setSearchInput}/>
    </div>
  );
}

export default App;
