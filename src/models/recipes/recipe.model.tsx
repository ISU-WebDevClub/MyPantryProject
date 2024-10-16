import { ExpirationInformation, CalorieInformation, FinancialInformation, Ingredient } from "../ingredients/ingredient.model";

export enum RecipeType {
    BREAKFAST,
    LUNCH,
    DINNER,
    SNACK
}

export type DisplayRecipe = {
    title: string;
    shortDescription: string;
    recipeType: RecipeType;
    cookDate?: Date | null;
    expirationDate?: Date | null;
    mainImage?: string;
}

export type Recipe = DisplayRecipe & {
    allImages: string[];
    servingNumber: number;
    description: string;
    ingredientList: Ingredient[];
    ingredientExpirationData: ExpirationInformation;
    calorieData: CalorieInformation;
    financialData: FinancialInformation;
}