import { useState } from "react";

function NewPlantForm({setPlants}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  function handleFormChange(e) {
    console.log(formData[e.target.name])
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // create  plant object

    // post to back end
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => setPlants(p => [...p, data]))

    // update front end with new plant
    // use spread operator to update plants with newPlant

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Plant name"
          onChange={handleFormChange}
        />
        <input 
          type="text" 
          name="image"
          placeholder="Image URL" 
          onChange={handleFormChange}
        />
        <input
          type="number" 
          name="price"
          step="0.01" 
          placeholder="Price"
          onChange={handleFormChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
