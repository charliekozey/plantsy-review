import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // wrap fetch in useEffect
  // fetch data from server
  // .then for promise
  // store plant data array in state
  // map through data to display it

  const [plants, setPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")

  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  const addNewPlant = event => {
    event.preventDefault()
        
    const newPlant = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value
    }

    fetch("http://localhost:6001/plants", 
      { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newPlant)
      }
    )
    .then(res => res.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }

    // filter through plants array
    // if name of plant contains search input, then it passes through filter
    // set state of plants to the new filtered plants array
    
    const filteredPlants = plants.filter(plant => {
      return plant.name.toLowerCase().includes(searchInput.toLowerCase())
    })

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setSearchInput={setSearchInput} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
