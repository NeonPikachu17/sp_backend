import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProfilesService } from 'src/typeorm/profiles/services/profiles/profiles.service';
import { UserProfileDto } from 'src/typeorm/users/dto/dto';
import { UsersService } from 'src/typeorm/users/services/users/users.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private userService: UsersService, private profileService: ProfilesService) { }
    

    @Get(':id')
    getUserProfile(
        @Param('id', ParseIntPipe) id: number
    )
    {
        return this.profileService.getUserProfile(id)
    }

    @Get()
    getAllProfiles() {
        return this.profileService.getAllProfiles();
    }

    @Patch(':id')
    async updateUserProfileById(
        @Param('id', ParseIntPipe) id: number, 
        @Body() updateUserDTO: UserProfileDto,
    ) {
        // Need to add validation
        await this.profileService.updateUser(id, updateUserDTO);
    }

    @Delete(':id')
    async deleteUserProfile(
        @Param('id', ParseIntPipe) id: number ) {
        // Need to add validation
        await this.profileService.deleteUser(id);
    }


}
