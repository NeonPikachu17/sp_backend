import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Profile } from 'src/typeorm/entities/Profile';
import { ProfilesService } from '../profiles/services/profiles/profiles.service';
import { ProfilesController } from '../profiles/controllers/profiles/profiles.controller';
import { Ingredients } from '../entities/Ingredient';
import { IngredientController } from '../ingredients/controllers/ingredient/ingredient.controller';
import { IngredientService } from '../ingredients/services/ingredient/ingredient.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Ingredients])],
  controllers: [UsersController, ProfilesController, IngredientController],
  providers: [UsersService, ProfilesService, IngredientService]
})
export class UsersModule {}
