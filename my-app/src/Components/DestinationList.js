import React from "react";
import DestinationCard from "./DestinationCard";



function DestinationList({ destinations }) {
    console.log("destinations passed from app:", destinations)
    return (
        <main>
            <ul className="cards">
                {/*displays settings*/}
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                ))}
            </ul>
        </main>
    )

}

export default DestinationList