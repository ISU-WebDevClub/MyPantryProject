import PageWrapper from "@/src/components/page-wrapper";
import IngredientCardGrid from '@/src/components/pantry/ingredient-card-grid'
import { Ingredient, MeasurementTypes } from '@/src/models/ingredients/ingredient.model'
import Link from 'next/link'

const FakePantryItemsForTesting: Ingredient[] = [
    {
        title: 'Suspicious Stew',
        measurementAmount: 3,
        measurementType: MeasurementTypes.GALLON, 
        mainImage: 'https://picsum.photos/300/200'
    },
     {
      title: 'Egg',
      measurementAmount: 212,
      measurementType: MeasurementTypes.WHOLE,
      mainImage: 'https://picsum.photos/300/200'
     }
  ]

const PantryPage = () => {

    return (
        <>
            <PageWrapper>
                <IngredientCardGrid  ingredients={FakePantryItemsForTesting} sectionLabel={'Test Pantry Section'}/>
            </PageWrapper>
        </>
    )
}

export default PantryPage;