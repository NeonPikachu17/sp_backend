import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RecipeService } from '../../services/recipe/recipe.service';
import { RecipeDto } from 'src/typeorm/users/dto/dto';
import { IngredientService } from 'src/typeorm/ingredients/services/ingredient/ingredient.service';

@Controller('recipe')
export class RecipeController {
    constructor(private recipeService: RecipeService,
        private ingredientService: IngredientService) { }
    
    @Get()
    getAllIngredients()
    {
        // return this.recipeService.getAllIngredients()
    }

    @Get(':id')
    getSpecificIngredient(id: number) {
        // return this.recipeService.getSpecificIngredient(id);
    }

    @Patch(':id')
    async updateUserProfileById(
        @Param('id', ParseIntPipe) id: number, 
        @Body() updateRecipeDTO: RecipeDto,
    ) {
        // Need to add validation
        // await this.recipeService.updateIngredient(id, updateIngredientDTO);
    }

    @Delete(':id')
    async deleteUserProfile(
        @Param('id', ParseIntPipe) id: number ) {
        // Need to add validation
        // await this.recipeService.deleteIngredient(id);
    }

    @Post()
    createIngredient(@Body() createRecipe: RecipeDto) {
        // Removes confirm password route here
        // const { ...userDetails, confirmPassword } = createUserDto;
        return this.recipeService.addRecipe(createRecipe);
    }

}
