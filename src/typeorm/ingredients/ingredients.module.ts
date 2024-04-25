import { Module } from '@nestjs/common';
import { IngredientService } from './services/ingredient/ingredient.service';
import { IngredientController } from './controllers/ingredient/ingredient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredients } from '../entities/Ingredient';
import { Recipes } from '../entities/Recipe';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredients, Recipes])],
  providers: [IngredientService],
  controllers: [IngredientController]
})
export class IngredientsModule {}
