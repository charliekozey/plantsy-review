import React, {} from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsArray, search, deletePlant, updatePlantPrice }) {

  const filtered = plantsArray.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <ul className="cards">{
      filtered.map(plant => <PlantCard
        plant={plant}
        key={plant.id}
        deletePlant={deletePlant}
        updatePlantPrice={updatePlantPrice}
      />)
    }</ul>

  );
}

export default PlantList;
