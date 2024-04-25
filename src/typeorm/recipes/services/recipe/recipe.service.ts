import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredients } from 'src/typeorm/entities/Ingredient';
import { Recipes } from 'src/typeorm/entities/Recipe';
import { RecipeDto } from 'src/typeorm/users/dto/dto';
import { RecipeParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeService {
    constructor( 
        @InjectRepository(Recipes) private recipesRepository: Repository<Recipes>,
        @InjectRepository(Ingredients) private profileRepository: Repository<Ingredients>, 
    ) {}

    async addRecipe(recipeDetails: RecipeDto) {
        const newRecipe = this.recipesRepository.create( {
            ...recipeDetails,
            createdAt: Date()
        });
        return this.recipesRepository.save(newRecipe);
    }

    getAllRecipes() {
        return this.recipesRepository.find({});
    }

    getSpecificRecipe(id: number){
        return this.recipesRepository.findOne({
            where: { id: id },
        })
    }

    updateRecipe(id: number, updateRecipeDetails: RecipeParams) {
        return this.recipesRepository.update({ id }, { ...updateRecipeDetails } );
    }

    deleteRecipe(id: number) {
        return this.recipesRepository.delete({ id });
    }

    filterIngredient(foodType: string) {
        //Fix later
    }
}
