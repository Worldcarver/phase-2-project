import React, {useState} from "react";


function DestinationCard({ destination }) {


    const [favorited, setFavorited] = useState(false)

    function handleFavorited(){
        setFavorited((favorited) => !favorited)
      }
    return (
        <li className="card">
            <div className="cardimage">
                <span className="price"></span>
                <img src={destination.image} alt={destination.description} />
            </div>
            <div className="details">
                {favorited ? (
                    <button onClick ={handleFavorited} className="emoji-button favorite active">★</button>
                ) : (
                    <button onClick ={handleFavorited} className="emoji-button favorite">☆</button>
                )}
                <strong>{destination.description}</strong>
                <span></span>
            </div>
        </li>
    )
}
export default DestinationCard