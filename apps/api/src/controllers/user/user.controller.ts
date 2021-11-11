import { Controller, Get, Param } from '@nestjs/common';
import { User } from '@nx-postapp-fullstack/api-interfaces';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private userService : UserService){}

    @Get(':id')
    async getComments(@Param() params): Promise<User> {
       return await this.userService.getUserById(params.id);  
    }
}
