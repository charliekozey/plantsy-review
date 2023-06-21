import { useState } from "react";

function PlantCard({ plant, updatePlantPrice, deletePlant }) {
  const [inStock, setInStock] = useState(true)

  function toggleStock() {
    setInStock(state => !state)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: e.target.newprice.value
      })
    })
    .then(res => res.json())
    .then(data => {
      updatePlantPrice(data)
      e.target.reset()
    })

    // state: plants (array of objects)
    // plant.id
    // data (response), updated with patch

    // filter plants, everything but patched plant
    // replace patched plant with updated version
    // create a new array


  }

  function handleClick() {
    // DELETE
    // remove from front end (use .filter)

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE'
    })

    deletePlant(plant.id)
  }

  // PATCH
  // update front end plant price
  // build front end UI

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>${plant.price}</p>
      <form onSubmit={handleSubmit}>
        <input name="newprice" type="number" placeholder="Update price" step="0.01" ></input>
      </form>
      {inStock ? (
        <button onClick={toggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
      <button onClick={handleClick}>Delete</button>
    </li>
  );
}

export default PlantCard;
