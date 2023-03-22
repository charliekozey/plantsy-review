import React, { useState } from "react";

function PlantCard({ plant, deletePlant, updatePlantPrice }) {
  const [isInStock, setIsInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState("")

  // #region event handlers //
  function handleClick() {
    setIsInStock(isInStock => !isInStock)
  }

  function handleDeleteClick() {
    deletePlant(plant.id)
  }

  function handleUpdatePrice(e) {
    setUpdatedPrice(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    updatePlantPrice(updatedPrice, plant.id)

    setUpdatedPrice("")
  }

  // #endregion //

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      <form onSubmit={handleSubmit}>
        <input type="number" name="updatePrice" step="0.01" placeholder="Change Price" onChange={handleUpdatePrice} value={updatedPrice} />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
