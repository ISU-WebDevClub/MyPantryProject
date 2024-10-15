import { RecipeFilters } from "@/src/models/recipes/recipe-filters";
import { DisplayRecipe, RecipeType } from "@/src/models/recipes/recipe.model"
import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import MyPantryInput from "./form/styled-input";
import MyPantryButton from "./form/styled-button";

export type AllRecipesGridFilterProps = {
    allRecipes: DisplayRecipe[];
    filterCallback: (recipes: DisplayRecipe[]) => void;
}

const AllRecipesGridFilter = (props: AllRecipesGridFilterProps) => {

    const handleSubmit = (filters: RecipeFilters) => {
        const filteredRecipes = filterRecipes(props.allRecipes, filters);
        props.filterCallback(filteredRecipes);
    }

    const filterRecipes = (allRecipes: DisplayRecipe[], filterValues: RecipeFilters): DisplayRecipe[] => {
        const filteredRecipes = allRecipes
            .filter(x => filterValues.recipeTypes?.length == 0 ? true : filterValues.recipeTypes?.includes(x.recipeType))
            .filter(x => filterValues.searchValue?.length ? filterValues.searchValue.toLowerCase().includes(x.title.toLowerCase()) || x.title.toLowerCase().includes(filterValues.searchValue.toLowerCase()) || filterValues.searchValue.toLowerCase().includes(RecipeType[x.recipeType].toLowerCase()) : false)

        return filteredRecipes;
    }

    const initialValues: RecipeFilters = {
        recipeTypes: [],
        recipeTags: [],
        searchValue: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className="grid grid grid-cols-4 gap-4">
                        <div className="col-span-2">
                            <MyPantryInput
                                type="search"
                                name="searchValue"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.searchValue}
                                placeholder="Search for recipes..."
                            />
                            {errors.searchValue && touched.searchValue}
                        </div>
                        <MyPantryButton type="submit" disabled={isSubmitting}>
                            Submit
                        </MyPantryButton>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default AllRecipesGridFilter