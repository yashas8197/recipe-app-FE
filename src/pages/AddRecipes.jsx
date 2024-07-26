import { useState } from "react";
import { ADD_RECIPE_URL } from "../utils/constants";

const AddRecipes = () => {
  const [formData, setFormData] = useState({
    name: "",
    cloudinaryImageId: "",
    locality: "",
    cuisines: "",
    avgRating: 0,
    totalRatingsString: "",
    ingredients: "",
    instructions: [],
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(ADD_RECIPE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed To Add Recipe");
      }

      const data = await response.json();
      console.log("Added Recipe", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-5">
      <h1>Add Recipe</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleOnchange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Cloudinary Image Id:
          </label>
          <input
            type="text"
            className="form-control"
            id="img"
            name="cloudinaryImageId"
            value={formData.cloudinaryImageId}
            onChange={handleOnchange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="locality" className="form-label">
            Locality:
          </label>
          <input
            type="text"
            className="form-control"
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleOnchange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cuisines" className="form-label">
            Cuisine Type:
          </label>
          <input
            type="text"
            className="form-control"
            id="cuisines"
            name="cuisines"
            value={formData.cuisines}
            onChange={handleOnchange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="avgRating" className="form-label">
            Avg Rating:
          </label>
          <input
            type="number"
            className="form-control"
            id="avgRating"
            name="avgRating"
            value={formData.avgRating}
            onChange={handleOnchange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="totalRatingsString" className="form-label">
            Total Ratings:
          </label>
          <input
            type="text"
            className="form-control"
            id="totalRatingsString"
            name="totalRatingsString"
            value={formData.totalRatingsString}
            onChange={handleOnchange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            className="form-control"
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleOnchange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            className="form-control"
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleOnchange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipes;
