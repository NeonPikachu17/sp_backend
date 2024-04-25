import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './typeorm/users/users.module';
import { User } from './typeorm/entities/User';
import { Profile } from './typeorm/entities/Profile';
import { ProfilesModule } from './typeorm/profiles/profiles.module';
import { IngredientsModule } from './typeorm/ingredients/ingredients.module';
import { FoodTypesModule } from './typeorm/food-types/food-types.module';
import { RecipesModule } from './typeorm/recipes/recipes.module';
import { Recipes } from './typeorm/entities/Recipe';
import { Ingredients } from './typeorm/entities/Ingredient';
import { FoodType } from './typeorm/entities/FoodType';
//meow


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: ' ',
      database: 'sp_db',
      entities: [User, Profile, Recipes, Ingredients, FoodType],
      synchronize: true,
      }), UsersModule, ProfilesModule, IngredientsModule, FoodTypesModule, RecipesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
