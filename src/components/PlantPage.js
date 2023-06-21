import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const URL = "http://localhost:6001/plants"
  const [plants, setPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const filteredList = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchInput.toLowerCase())
  })

  function updatePlantPrice(updated) {
    setPlants(plants => plants.map(plant => {
      if (updated.id === plant.id) plant.price = updated.price
      return plant
    }))
  }

  function deletePlant(id) {
    setPlants(plants => plants.filter(plant => plant.id !== id))
  }

  // set search filter state

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search setSearchInput={setSearchInput} searchInput={searchInput} />
      <PlantList plants={filteredList} updatePlantPrice={updatePlantPrice} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
