import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
    async addUser(createUserDTO: CreateUserDTO): Promise<any> {
      const userExists = await this.findUserByEmail(createUserDTO.email);
      if (userExists == null) {
        const user = await new this.userModel(createUserDTO);
        return user.save();
      }
    }


    async findUserByEmail(email:string) {
        const user = await this.userModel.findOne({email: email});
        if(user != null) {
            return user;
        }
        return null;
    }
}