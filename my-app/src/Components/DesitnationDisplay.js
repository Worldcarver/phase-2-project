import React from "react";
import DestinationCard from "./DestinationCard";

function DestinationDisplay({ destPicker, favDest }){
    return (
        <div className="fav dest">
              <h1>Travel Wishlist</h1>
          <div className="ui five column grid">
            <div className="row fav-dest-row">
              {favDest.map((destination) => (
                <DestinationCard key = {destination.id} destination = {destination} destPicker = {destPicker} />
              ))}
            
            </div>
          </div>
        </div>
      );
    }


export default DestinationDisplay