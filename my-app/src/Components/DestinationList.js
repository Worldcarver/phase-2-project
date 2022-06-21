import React from "react";




function DestinationList({ destinations, destPicker }) {
    console.log("destinations passed from app:", destinations)
    return (
        <div className="ui four column grid">
            <ul className="row">
                {/*displays settings*/}
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} destPicker = {destPicker} />
                ))}
            </ul>
        </div>
    )

}

export default DestinationList