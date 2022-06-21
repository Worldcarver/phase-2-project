import React, { useEffect, useState } from 'react';
//import SearchBar from './Components/SearchBar';
import Header from './Components/Header'
import DestinationDisplay from './Components/DesitnationDisplay'
import DestinationList from './Components/DestinationList';


// need to set json server to different port? how?
// send fetch to external api, and send post to json to capture data, inerpolate the data?
// pull data from json not the api
// requests to send data right to json and then render from there


function App() {

  const [destinations, setDestinations] = useState([])
  const [favDest, setFavDest] = useState([])

  useEffect(() => {
 
    fetch(`http://localhost:8000/locations`)
	    .then(response => response.json())
	    .then(response => setDestinations(response))
	    .catch(err => console.error(err));

}, [])

function destPicker(newDest){
  if (favDest.includes(newDest) === false) {
    setFavDest([...favDest, newDest])
  } else {
    const removeFavDest = favDest.filter((dest) => {
      return dest !== newDest
    })
    setFavDest(removeFavDest)
  }

}

  return (
    <div className="App">
      <Header />
      <DestinationDisplay destPicker = {destPicker} favDest = {favDest}/>
      <DestinationList destinations = {destinations} destPicker = {destPicker}/>
    </div>
  );
}

export default App;
