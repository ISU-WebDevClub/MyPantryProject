export enum MeasurementTypes {
    PINCH,
    TEASPOON,
    TABLESPOON,
    CUP
}

export type CalorieInformation = {

}

export type FinancialInformation = {

}

export type Ingredient = {
    title: string;
    measurementAmount: number;
    measurementType: MeasurementTypes;
    measurementDisplay: string;

    calorieInformation: CalorieInformation;

    financialInformation: FinancialInformation;
}