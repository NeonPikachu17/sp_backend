import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams, UserProfileParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>, 
    ) {}

    fetchUsers() {
        return this.userRepository.find({relations: ['profile']});
    }

    fetchUserById(userId: number) {
        return this.userRepository.findOne({ where:{ id: userId }, relations: ['profile'] });
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails } );
    }

    deleteUser(id: number) {
        return this.userRepository.delete({ id });
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date(),
        });
        return this.userRepository.save(newUser);
    }

    async createProfile(id: number, userProfileDetails: UserProfileParams) {
        const user = await this.userRepository.findOneBy( { id: id } );
        if (!user) throw new HttpException('User not found. Cannot create Profile.', HttpStatus.BAD_REQUEST);
        
        const newProfile = this.profileRepository.create( {...userProfileDetails});
        const savedProfile = await this.profileRepository.save(newProfile);

        user.profile = savedProfile;
        return this.userRepository.save(user);
    }
}
