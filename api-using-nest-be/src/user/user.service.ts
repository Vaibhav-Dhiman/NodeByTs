import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserLoginDTO } from './dto/user-login.dto';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
    async addUser(createUserDTO: CreateUserDTO): Promise<any> {
      try {
        const userExists = await this.findUserByEmail(createUserDTO.email);
        if (userExists == null) {
          const hashPassword = this.generatePasswordHashSalt(createUserDTO.password);
          createUserDTO.password = hashPassword;
          const user = await new this.userModel(createUserDTO).save();
          if(user !== null && user !== undefined ) {
            return true;
          }
          else {
            return false;
          }
        }
    }
      catch(err) {
        console.log(err);
      }
  }

  async userLogin(userLoginDTO: UserLoginDTO): Promise<User> {
    // matching hash password from db here then generate token from email and password
    const userFromDb = await this.findUserByEmail(userLoginDTO.email);
    return userFromDb;
  }

    async findUserByEmail(email:string) {
        const user = await this.userModel.findOne({email: email});
        if(user != null) {
            return user;
        }
        return null;
    }

     generatePasswordHashSalt(password: string) {
      var bcrypt = require('bcrypt');
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync("B4c0/\/", salt);
      return hash;
    }
}