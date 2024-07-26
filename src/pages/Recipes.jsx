import RecipeCard from "../components/RecipeCard";
import useFetch from "../utils/useFetch";
import { MAIN_URL } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";

const Recipes = () => {
  const { data, loading, error } = useFetch(MAIN_URL);
  const [searchQuery, setSearchQuery] = useSearchParams({ q: "" });

  const q = searchQuery.get("q");

  const filteredData = data?.recipes?.filter((recipe) =>
    q ? recipe.name.toLowerCase().includes(q.toLowerCase()) : true,
  );

  return (
    <div className="container my-4">
      <h1>All Recipes</h1>

      <div className="my-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search By Name"
          aria-label="Search"
          onChange={(e) =>
            setSearchQuery((prev) => {
              prev.set("q", e.target.value);
              return prev;
            })
          }
        />
      </div>

      {data ? (
        <div className="row">
          {filteredData.map((recipe) => (
            <RecipeCard key={recipe._id} recData={recipe} />
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Recipes;
