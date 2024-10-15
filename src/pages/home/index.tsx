import NavBar from '@/src/components/nav-bar'
import PageWrapper from '@/src/components/page-wrapper'
import SelectedRecipeCards from '@/src/components/home/selected-recipes'
import { DisplayRecipe, RecipeType } from '@/src/models/recipes/recipe.model'
import Link from 'next/link'

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

function HomePage() {
  return (
    <>
      <PageWrapper>
        <SelectedRecipeCards recipes={MockRecipesForTesting} sectionLabel={'Test Recipe Section'} />
      </PageWrapper>
    </>
  )
}
 
export default HomePage