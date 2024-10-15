import Link from 'next/link';
import { DisplayRecipe } from '../../models/recipes/recipe.model';

type CurrentRecipeCardProps = {
    recipe: DisplayRecipe
}

const CurrentRecipeCard = (props: CurrentRecipeCardProps): JSX.Element => {

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                {
                    props.recipe?.mainImage &&
                    <img className="rounded-t-lg object-cover" src={props.recipe?.mainImage} alt="recipe image" />
                }
            </Link>
            <div className="p-5">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.recipe?.title ?? ""}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.recipe?.shortDescription}</p>
                <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Details
                </Link>
            </div>
        </div>
    )
}

export default CurrentRecipeCard