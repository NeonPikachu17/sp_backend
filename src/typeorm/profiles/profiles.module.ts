import { Module } from '@nestjs/common';
import { ProfilesService } from './services/profiles/profiles.service';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Profile } from 'src/typeorm/entities/Profile';
import { UsersService } from 'src/typeorm/users/services/users/users.service';
import { UsersController } from 'src/typeorm/users/controllers/users/users.controller';
import { Recipes } from '../entities/Recipe';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Recipes])],
  controllers: [ProfilesController, UsersController],
  providers: [ProfilesService, UsersService]
})
export class ProfilesModule {}
