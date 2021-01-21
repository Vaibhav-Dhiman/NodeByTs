import { Controller, Post, Body,HttpStatus, Get, Param, Patch, Delete, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserLoginDTO } from './dto/user-login.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/adduser')
    async addUser(@Res() res, @Body() createUserDto: CreateUserDTO)  {
        const user = await this.userService.addUser(createUserDto);
        if(user == true) {
            return res.status(HttpStatus.OK).json({
                message: "User has been created successfully"//,
                //user
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

    @Post('/login')
    async userLogin(@Res() res, @Body() userLoginDTO:UserLoginDTO) {
        const user = await this.userService.userLogin(userLoginDTO);
        if(user !== null && user !== undefined) {
            return res.status(HttpStatus.OK).json({
                message: "User login Successfully",
                user
            });
        }

        else {
            return res.status(HttpStatus.OK).json({
                message: "Incorrect email or password"//,
                //user
            });
        }
      
    }
}
