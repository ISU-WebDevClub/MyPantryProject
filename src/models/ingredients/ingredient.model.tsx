export enum MeasurementTypes {
    PINCH,
    TEASPOON, TABLESPOON,
    CUP, GALLON,
    OZ, POUND, // Should we go for Metric, Imperial, or Both? 
    CLOVE, // For pretty much only garlic 
    WHOLE // I'm thinking in context of Eggs or something that doesn't really have units, '3 whole eggs'
}

export type ExpirationInformation = {

}

export type CalorieInformation = {

}

export type FinancialInformation = {

}

export type Ingredient = {
    title: string;
    measurementAmount: number;
    measurementType?: MeasurementTypes;
    measurementDisplay?: string;

    mainImage?: string;

    // Thought it might be interesting to have some expiration date info, not really sure if there is an API that can account for something like this though (NH)
    dateBought?: Date; // This is how you express dates in tsx, right? (NH)

    expirationInformation?: ExpirationInformation;

    calorieInformation?: CalorieInformation;

    financialInformation?: FinancialInformation;
    
}