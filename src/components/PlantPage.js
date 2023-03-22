import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsArray, setPlantsArray] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlantsArray(data))
  }, [])

  function addNewPlant(plant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(plant)
    })
    .then(res => res.json())
    .then(newPlant => setPlantsArray([...plantsArray, newPlant]))
  }

  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {method: "DELETE"})

    setPlantsArray(plantsArray.filter(plant => plant.id !== id))
  }

  function updatePlantPrice(newPrice, id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({price: parseInt(newPrice)})
    })

    // set plants array to:
    // all the plants except the changed plant stay the same
    // the changed plant (if plant.id == id) gets updated

    
    setPlantsArray(plantsArray.map(plant => {
      if (plant.id === id)
        return

    }))

  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search setSearch={setSearch} search={search} />
      <PlantList
        plantsArray={plantsArray}
        search={search}
        deletePlant={deletePlant}
        updatePlantPrice={updatePlantPrice}
      />
    </main>
  );
}

export default PlantPage;
