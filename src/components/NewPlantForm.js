import { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  // onSubmit, onChange
  // useState for form input
  // create object for the new plant
  // POST request
  // update the front end with new plant

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addNewPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
