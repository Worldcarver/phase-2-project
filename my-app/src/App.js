import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd731705817mshe230c4e09e3f014p16249djsn407579c5d12d',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};
// need to set json server to different port? how?
// send fetch to external api, and send post to json to capture data, inerpolate the data?
// pull data from json not the api
// requests to send data right to json and then render from there

fetch(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=new%20york&lang=en_US&units=km`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
