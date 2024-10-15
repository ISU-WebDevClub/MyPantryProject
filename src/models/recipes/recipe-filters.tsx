import { RecipeType } from "./recipe.model"

export enum RecipeTag {
    VEGAN,
    VEGETARIAN,
    PESCETARIAN,
    HIGH_PROTEIN,
    LOW_CALORIE
};

export type RecipeFilters = {
    recipeTypes?: RecipeType[];
    recipeTags?: RecipeTag[];
    searchValue?: string;
};