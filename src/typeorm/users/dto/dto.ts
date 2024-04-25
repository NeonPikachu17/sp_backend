import { Ingredients } from "src/typeorm/entities/Ingredient";
import { Recipes } from "src/typeorm/entities/Recipe";

export class CreateUserDto {
    username: string;
    password: string;
    type: number;
}

export class UpdateUserDto {
    username: string;
    password: string;
    type: number;
}

export class UserProfileDto {
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

export class ingredientDto {
    englishName: string;
    tagalogName: string;
    foodType: number;
    recipe: Recipes[];
    image: string;
}

export class RecipeDto {
    recipeName: string;
    ingredients: Ingredients[];
    description: string;
    steps: string;
    image: string;
    createdAt: Date;
}