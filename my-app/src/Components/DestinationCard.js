import React from "react";


function DestinationCard({ destination }) {

    return (
        <li className="card">
            <div className="image">
                <span className="price"></span>
                <img src={destination.image} alt={destination.description} />
            </div>
            <div className="details">
                {true ? (
                    <button className="emoji-button favorite active">⭐</button>
                ) : (
                    <button className="emoji-button favorite">⭐</button>
                )}
                <strong>{destination.description}</strong>
                <span></span>
            </div>
        </li>
    )

}

export default DestinationCard