import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, updatePlantPrice, deletePlant }) {
  const plantsDisplay = plants.map(plant => <PlantCard plant={plant} key={plant.id} updatePlantPrice={updatePlantPrice} deletePlant={deletePlant} />)
  
  return (
    <ul className="cards">{plantsDisplay}</ul>
  );
}

export default PlantList;
