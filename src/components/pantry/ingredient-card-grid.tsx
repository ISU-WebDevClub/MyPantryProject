import Link from 'next/link';
import { Ingredient } from '../../models/ingredients/ingredient.model';
import IngredientCard from "./ingredient-card"


type CurrentCardProps = {
    ingredients: Ingredient[],
    sectionLabel?: string | null
}

const IngredientCardGrid = ( props: CurrentCardProps ): JSX.Element => {

    return (
        <div className="flex flex-col space-y-4">
            {
                props.sectionLabel &&
                <h2>{props.sectionLabel}</h2>
            }
            <div className="grid grid-cols-5 gap-4">
                {
                    props.ingredients?.map((x, idx) => (
                        <IngredientCard key={`ingredient-${idx}`} ingredient={x}></IngredientCard>
                    ))
                }
            </div>
        </div>
    )
}

export default IngredientCardGrid