import { Link } from "react-router-dom";
import { CDN_URL, DELETE_RECIPE_URL } from "../utils/constants";

const RecipeCard = ({ recData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, _id } = recData;

  const imageStyle = {
    width: "15rem",
    height: "10rem",
    objectFit: "cover",
  };

  const handleDelete = async (recipeId) => {
    try {
      const response = await fetch(DELETE_RECIPE_URL + recipeId, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete a recipe";
      }

      const data = await response.json();

      if (data) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-3 my-2">
      <div
        className="card shadow  hover:bg-gray-100"
        style={{ width: "15rem" }}
      >
        <Link
          className="text-black text-decoration-none"
          to={"/recipeDetail/" + _id}
        >
          <div className="">
            <img
              style={imageStyle}
              className="card-img-top img-fluid"
              src={CDN_URL + cloudinaryImageId}
              alt="restaurantImg"
            />
            <div className="card-body">
              <p className="card-text my-2">
                <strong>{name}</strong>
              </p>
              <p className="text-secondary my-2">
                {cuisines.length > 3
                  ? cuisines.slice(0, 3).join(", ") + "..."
                  : cuisines.join(", ")}
              </p>
              <p>⭐{avgRating}</p>
            </div>
          </div>
        </Link>
        <button
          className="btn btn-danger m-1"
          onClick={() => handleDelete(_id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
