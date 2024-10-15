import { DisplayRecipe } from "../../models/recipes/recipe.model"
import CurrentRecipeCard from "./current-recipe-card"

type CurrentRecipeCardProps = {
    recipes: DisplayRecipe[],
    sectionLabel?: string | null
}

const SelectedRecipeCards = (props: CurrentRecipeCardProps) => {

    return(
        <>
            <div className="flex flex-col space-y-4">
                {
                    props.sectionLabel &&
                    <h2>{props.sectionLabel}</h2>
                }
                <div className="grid grid-cols-4 gap-4">
                    {
                        props.recipes?.map((x, idx) => (
                            <CurrentRecipeCard key={`upcoming-recipe-${idx}`} recipe={x}></CurrentRecipeCard>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SelectedRecipeCards