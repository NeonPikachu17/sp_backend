import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProfilesService } from 'src/typeorm/profiles/services/profiles/profiles.service';
import { UserProfileDto, ingredientDto } from 'src/typeorm/users/dto/dto';
import { UsersService } from 'src/typeorm/users/services/users/users.service';
import { IngredientService } from '../../services/ingredient/ingredient.service';

@Controller('ingredients')
export class IngredientController {
    constructor(private ingredientService: IngredientService) { }
    
    @Get()
    getAllIngredients()
    {
        return this.ingredientService.getAllIngredients()
    }

    @Get(':id')
    getSpecificIngredient(id: number) {
        return this.ingredientService.getSpecificIngredient(id);
    }

    @Patch(':id')
    async updateUserProfileById(
        @Param('id', ParseIntPipe) id: number, 
        @Body() updateIngredientDTO: ingredientDto,
    ) {
        // Need to add validation
        await this.ingredientService.updateIngredient(id, updateIngredientDTO);
    }

    @Delete(':id')
    async deleteUserProfile(
        @Param('id', ParseIntPipe) id: number ) {
        // Need to add validation
        await this.ingredientService.deleteIngredient(id);
    }

    // For future me, dont forget to hash the password
    @Post()
    createIngredient(@Body() createIngredient: ingredientDto) {
        // Removes confirm password route here
        // const { ...userDetails, confirmPassword } = createUserDto;
        return this.ingredientService.addIngredient(createIngredient);
    }
}