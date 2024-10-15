import { DisplayRecipe } from "@/src/models/recipes/recipe.model";
import CurrentRecipeCard from "../home/current-recipe-card";
import AllRecipesGridFilter from "./all-recipe-filters";
import { useState } from "react";

type AllRecipesGridProps = {
    recipes: DisplayRecipe[];
    
}

const AllRecipesGrid = (props: AllRecipesGridProps) => {
    const [filteredRecipes, setFilteredRecipes] = useState<DisplayRecipe[]>(props.recipes);

    return (
        <>
            <div className="flex flex-col space-y-4">
                <AllRecipesGridFilter allRecipes={props.recipes} filterCallback={(x: DisplayRecipe[]) => setFilteredRecipes(x)}></AllRecipesGridFilter>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        filteredRecipes.map((recipe, idx) => (
                            <CurrentRecipeCard key={`all-recipes-${idx}`} recipe={recipe} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default AllRecipesGrid