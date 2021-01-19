import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/adduser')
    async getAllProducts()  {
        const user = await this.userService.addUser();
        return user;
    }
}

