import React, {useState} from "react";



const BASE_URL = "http://localhost:8000/locations";
const initialNewDestination = {
  id: 0,
  description: '',
  image: ''
};

function NewDestinationForm({ setDestinations }) {
  const [newDestination, setNewDestination] = useState(initialNewDestination);

  function handleChange(e) {
    setNewDestination((currentNewDestinationState) => ({
      ...currentNewDestinationState,
      [e.target.name]: e.target.value,
    }));
  }
//handleChange updates state, handleSubmit updates database
  function handleSubmit(e) {
    e.preventDefault();

    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDestination),
    })
      .then((resp) => resp.json())
      .then((data) => setDestinations((currentDestinations) => [...currentDestinations, data]));

    setNewDestination(initialNewDestination);
  }
 //have code to automate the generation of a new id, if I have time
  return (
    <div className="new-destination-form">  
      <h2>New Destination</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Destination name"
          value={newDestination.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newDestination.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          //step="0.01"
          placeholder="Image URL"
          value={newDestination.image}
          onChange={handleChange}
        />
        <button type="submit">Add Destination</button>
      </form>
    </div>
  );

}

export default NewDestinationForm