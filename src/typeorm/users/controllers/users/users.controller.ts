import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProfilesService } from 'src/typeorm/profiles/services/profiles/profiles.service';
import { CreateUserDto, UpdateUserDto, UserProfileDto } from 'src/typeorm/users/dto/dto';
import { UsersService } from 'src/typeorm/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService, 
        private profileService: ProfilesService) 
        { }
    

    @Get()
    async getUsers() {
        const users = await this.userService.fetchUsers();
        return users;
    }

    // For future me, dont forget to hash the password
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        // Removes confirm password route here
        // const { ...userDetails, confirmPassword } = createUserDto;
        return this.userService.createUser(createUserDto);
    }

    @Post(':id')
    createProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() createUserProfileDto: UserProfileDto
    ) 
    {
        return this.profileService.createProfile(id, createUserProfileDto);
    }

    @Get(':id')
    async getUserById( 
        @Param('id', ParseIntPipe) id: number,
    )   
    {
        const user = await this.userService.fetchUserById(id);
        return user;
    }

    @Patch(':id')
    async updateUserById(
        @Param('id', ParseIntPipe) id: number, 
        @Body() updateUserDTO: UpdateUserDto,
    ) {
        // Need to add validation
        await this.userService.updateUser(id, updateUserDTO);
    }

    @Delete(':id')
    async deleteUserById(
        @Param('id', ParseIntPipe) id: number ) {
        // Need to add validation
        await this.userService.deleteUser(id);
    }

}
