import { Module } from '@nestjs/common';
import { RecipeController } from './controllers/recipe/recipe.controller';
import { RecipeService } from './services/recipe/recipe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredients } from '../entities/Ingredient';
import { Recipes } from '../entities/Recipe';
import { IngredientController } from '../ingredients/controllers/ingredient/ingredient.controller';
import { IngredientService } from '../ingredients/services/ingredient/ingredient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredients, Recipes])],
  controllers: [RecipeController, IngredientController],
  providers: [RecipeService, IngredientService]
})
export class RecipesModule {}
