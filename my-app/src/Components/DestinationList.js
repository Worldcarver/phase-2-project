import React from "react";
import DestinationCard from "./DestinationCard";



function DestinationList({ destinations }) {
    console.log("destinations passed from app:", destinations)
    return (
        <div className="ui four column grid">
            <ul className="row">
                {/*displays settings*/}
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                ))}
            </ul>
        </div>
    )

}

export default DestinationList