import PageWrapper from "@/src/components/page-wrapper";
import AllRecipesGrid from "@/src/components/recipes/all-recipe-grid";
import { DisplayRecipe, RecipeType } from "@/src/models/recipes/recipe.model";

const MockRecipesForTesting: DisplayRecipe[] = [
    {
      title: 'Yummy Breakfast Item',
      shortDescription: 'A mock breakfast item to eat for breakfast',
      recipeType: RecipeType.BREAKFAST,
      mainImage: 'https://picsum.photos/300/200',
      cookDate: new Date()
    },
    {
      title: 'Yummy Breakfast Item 2',
      shortDescription: 'Another mock breakfast item to eat for breakfast',
      recipeType: RecipeType.BREAKFAST,
      mainImage: 'https://picsum.photos/300/200'
    }
  ]

const RecipePage = () => {

    return (
        <>
            <PageWrapper>
                <h3>All Recipes</h3>
                <AllRecipesGrid recipes={MockRecipesForTesting} />
            </PageWrapper>
        </>
    )
}

export default RecipePage;