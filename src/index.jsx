import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipes from "./pages/Recipes";
import AddRecipes from "./pages/AddRecipes";
import RecipeDetail from "./pages/RecipeDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Recipes />,
			},
			{
				path: "/add-recipes",
				element: <AddRecipes />,
			},
			{
				path: "/recipeDetail/:recipeId",
				element: <RecipeDetail />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
