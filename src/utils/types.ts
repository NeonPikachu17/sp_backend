import { Ingredients } from "src/typeorm/entities/Ingredient";
import { Recipes } from "src/typeorm/entities/Recipe";

export class CreateUserParams {
    username: string;
    password: string;
    type: number;
}

export class UpdateUserParams {
    username: string;
    password: string;
    type: number;
}

export class UserProfileParams {
    firstName: string;
    middleName: string;
    lastName: string;
    height: number;
    age: number;
    gender: number;
    dateOfBirth: string;
    activityFactor: number;
    totalEnergyRequirement: number;
    macronutrientDistribution: number;
}

export class ingredientParams {
    englishName: string;
    tagalogName: string;
    foodType: number;
    recipe: Recipes[];
    image: string;
}

export class RecipeParams {
    recipeName: string;
    ingredients: Ingredients[];
    description: string;
    steps: string;
    image: string;
    createdAt: Date;
}