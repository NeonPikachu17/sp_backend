import { Get, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { UserProfileParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
    constructor( 
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>, 
    ) {}

    async createProfile(id: number, userProfileDetails: UserProfileParams) {
        const user = await this.userRepository.findOneBy( { id: id } );
        if (!user) throw new HttpException('User not found. Cannot create Profile.', HttpStatus.BAD_REQUEST);
        
        const newProfile = this.profileRepository.create( {...userProfileDetails});
        const savedProfile = await this.profileRepository.save(newProfile);

        user.profile = savedProfile;
        return this.userRepository.save(user);
    }

    getUserProfile(id: number) {
        return this.profileRepository.findOne( {
            where: { id: id },
            // select: {
            //     firstName: true,
            //     lastName: true
            // },
        }, 
    )}

    getAllProfiles() {
        return this.profileRepository.find({});
    }

    updateUser(id: number, updateUserProfileDetails: UserProfileParams) {
        return this.profileRepository.update({ id }, { ...updateUserProfileDetails } );
    }

    deleteUser(id: number) {
        return this.profileRepository.delete({ id });
    }

};
