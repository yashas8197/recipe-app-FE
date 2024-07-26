import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { MENU_URL } from "../utils/constants";
import MenuHeader from "../components/MenuHeader";
import Shimmer from "../components/Shimmer";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(MENU_URL + recipeId);
  console.log(data);

  if (loading) return <Shimmer />;

  return (
    <div className="container my-4">
      <MenuHeader info={data.recipes} />
      <div className="container col-md-7">
        <p>Ingredients: {data?.recipes?.ingredients}</p>

        <p>Instruction:</p>
        <ul>
          {data?.recipes?.instructions.map((instruction, i) => (
            <li key={i}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
