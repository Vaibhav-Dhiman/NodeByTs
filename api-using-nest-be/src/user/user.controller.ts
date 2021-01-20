import { Controller, Post, Body,HttpStatus, Get, Param, Patch, Delete, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/adduser')
    async getAllProducts(@Res() res, @Body() createUserDto: CreateUserDTO)  {
        const user = await this.userService.addUser(createUserDto);
        if(user !== null && user !== undefined) {
            return res.status(HttpStatus.OK).json({
                message: "User has been created successfully",
                user
            })
        }
        else if (user == null && user == undefined ) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: "User email already exists"
            })
        }
        else {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: "Unable to add user"
            })
        }
    }
}
