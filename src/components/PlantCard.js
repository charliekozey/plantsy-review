import {useEffect, useState} from "react";

function PlantCard({ plant }) {
  
  const [inStock, setInStock] = useState(plant.in_stock)
  
  function toggleInStock() {
    setInStock(inStock => !inStock)
  }
  
  // useEffect watches for changes to inStock state variable
  // sends PATCH request to update backend whenever inStock changes
  useEffect(() => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        in_stock: inStock
      })
    })
  }, [inStock])

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleInStock}>In Stock</button>
      ) : (
        <button  onClick={toggleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;