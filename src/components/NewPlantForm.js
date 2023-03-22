import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: ""
  })

  const {name, image, price} = form

  function handleChange(e) {
    const {name, value} = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    addNewPlant(form)

    e.target.reset()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={image} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={price} />
        {/* <input type="checkbox" name="inStock?" onChange={handleInStockChange} checked={inStock} /> */}
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
