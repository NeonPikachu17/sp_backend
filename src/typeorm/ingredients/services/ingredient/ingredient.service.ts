import { Get, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredients } from 'src/typeorm/entities/Ingredient';
import { Profile } from 'src/typeorm/entities/Profile';
import { ingredientDto } from 'src/typeorm/users/dto/dto';
import { ingredientParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {
    constructor( 
        @InjectRepository(Ingredients) private ingredientRepository: Repository<Ingredients>,
        // @InjectRepository(Profile) private profileRepository: Repository<Profile>, 
    ) {}

    async addIngredient(ingredientDetails: ingredientDto) {
        const newIngredient = this.ingredientRepository.create( {
            ...ingredientDetails
        });
        return this.ingredientRepository.save(newIngredient);
    }

    getAllIngredients() {
        return this.ingredientRepository.find({});
    }

    getSpecificIngredient(id: number){
        return this.ingredientRepository.findOne({
            where: { id: id },
        })
    }

    updateIngredient(id: number, updateIngredientDetails: ingredientParams) {
        return this.ingredientRepository.update({ id }, { ...updateIngredientDetails } );
    }

    deleteIngredient(id: number) {
        return this.ingredientRepository.delete({ id });
    }

    filterIngredient(foodType: string) {
        //Fix later
    }

};
